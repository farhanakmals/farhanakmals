import { useEffect, useRef } from 'react';
import { globeTechs } from '../data/portfolio';

const SECTION_IDS = ['top', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
// Per-section framing of the point cloud: horizontal offset (fraction of view width), opacity, scale
const X = [0.25, 0.3, 0.29, 0.31, 0.3, 0.29, 0.24];
const OP = [1, 0.5, 0.45, 0.4, 0.5, 0.45, 0.95];
const SC = [1, 0.95, 1, 0.9, 0.85, 1, 1.1];
const SPEEDS = { Still: 0, Calm: 0.6, Lively: 1.4 };

/**
 * Fixed full-viewport WebGL layer: a tech globe in the hero whose point cloud
 * morphs into a different shape for each section as the page scrolls.
 */
export default function HeroScene({ shape = 'Tech globe', motion = 'Calm' }) {
  const hostRef = useRef(null);
  const labelsRef = useRef(null);
  const opts = useRef({ shape, motion });

  useEffect(() => {
    opts.current = { shape, motion };
  }, [shape, motion]);

  useEffect(() => {
    const el = hostRef.current;
    const lb = labelsRef.current;
    let dead = false;
    let raf = 0;
    let ro, renderer, onPM;
    let labels = [];
    const disposables = [];

    (async () => {
      let THREE;
      try {
        THREE = await import('three');
      } catch {
        return;
      }
      if (dead) return;

      const css = getComputedStyle(document.documentElement);
      const col = (n, f) => new THREE.Color(css.getPropertyValue(n).trim() || f);
      const accent = col('--color-accent', '#9184d9');
      const a400 = col('--color-accent-400', '#b5abfc');
      const a700 = col('--color-accent-700', '#5d5294');

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      Object.assign(renderer.domElement.style, { position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' });
      el.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
      camera.position.set(0, 0, 8.4);
      const root = new THREE.Group();
      scene.add(root);

      let seed = 7;
      const rnd = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };
      const track = x => (disposables.push(x), x);

      const R = 2.3;
      const fib = (i, n) => {
        const y = 1 - ((i + 0.5) / n) * 2;
        const r = Math.sqrt(1 - y * y);
        const t = i * Math.PI * (3 - Math.sqrt(5));
        return new THREE.Vector3(Math.cos(t) * r, y, Math.sin(t) * r);
      };
      const nodes = globeTechs.map((_, i) => fib(i, globeTechs.length).multiplyScalar(R));

      // Globe: tech nodes, nearest-neighbour links, and a wireframe core
      const globe = new THREE.Group();
      root.add(globe);
      const nodeMat = track(new THREE.PointsMaterial({ color: a400, size: 0.11, transparent: true }));
      globe.add(new THREE.Points(track(new THREE.BufferGeometry().setFromPoints(nodes)), nodeMat));
      const seg = [];
      nodes.forEach((p, i) =>
        nodes
          .map((q, j) => [j, p.distanceTo(q)])
          .filter(x => x[0] !== i)
          .sort((a, b) => a[1] - b[1])
          .slice(0, 3)
          .forEach(([j]) => seg.push(p, nodes[j])),
      );
      const lineMat = track(new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0.35 }));
      globe.add(new THREE.LineSegments(track(new THREE.BufferGeometry().setFromPoints(seg)), lineMat));
      const coreMat = track(new THREE.MeshBasicMaterial({ color: accent, wireframe: true, transparent: true, opacity: 0.5 }));
      const core2Mat = track(new THREE.MeshBasicMaterial({ color: a400, wireframe: true, transparent: true, opacity: 0.9 }));
      const core = new THREE.Mesh(track(new THREE.IcosahedronGeometry(1.05, 1)), coreMat);
      const core2 = new THREE.Mesh(track(new THREE.IcosahedronGeometry(0.55, 0)), core2Mat);
      globe.add(core, core2);

      // Orbit rings with a satellite
      const ringG = new THREE.Group();
      ringG.rotation.x = 1.15;
      ringG.rotation.y = -0.35;
      root.add(ringG);
      const r1Mat = track(new THREE.MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.45 }));
      const r2Mat = track(new THREE.MeshBasicMaterial({ color: a700, transparent: true, opacity: 0.5 }));
      const satMat = track(new THREE.MeshBasicMaterial({ color: a400, transparent: true }));
      ringG.add(new THREE.Mesh(track(new THREE.TorusGeometry(3.05, 0.006, 6, 220)), r1Mat));
      ringG.add(new THREE.Mesh(track(new THREE.TorusGeometry(3.35, 0.004, 6, 220)), r2Mat));
      const sat = new THREE.Mesh(track(new THREE.SphereGeometry(0.06, 16, 16)), satMat);
      ringG.add(sat);

      // Morphing point cloud — one shape per section
      const N = 1800;
      const mk = () => new Float32Array(N * 3);
      const sphere = mk(), knotA = mk(), helix = mk(), cube = mk(), torus = mk(), wave = mk();
      const knotGeo = new THREE.TorusKnotGeometry(1.55, 0.42, 149, 11, 2, 3);
      const kg = knotGeo.attributes.position.array;
      knotGeo.dispose();
      for (let i = 0; i < N; i++) {
        const o = i * 3;
        const p = fib(i, N).multiplyScalar(R);
        sphere[o] = p.x; sphere[o + 1] = p.y; sphere[o + 2] = p.z;
        knotA[o] = kg[o % kg.length]; knotA[o + 1] = kg[(o + 1) % kg.length]; knotA[o + 2] = kg[(o + 2) % kg.length];

        const st = i % 3;
        let y = rnd() * 5.4 - 2.7;
        if (st < 2) {
          const an = y * 2.1 + st * Math.PI;
          helix[o] = Math.cos(an) * 1.15 + (rnd() - 0.5) * 0.08;
          helix[o + 1] = y;
          helix[o + 2] = Math.sin(an) * 1.15 + (rnd() - 0.5) * 0.08;
        } else {
          y = Math.round(y * 4) / 4;
          const an = y * 2.1, t = 1 - 2 * rnd();
          helix[o] = Math.cos(an) * 1.15 * t;
          helix[o + 1] = y;
          helix[o + 2] = Math.sin(an) * 1.15 * t;
        }

        const ci = i % 1728, j = i >= 1728 ? (rnd() - 0.5) * 0.2 : 0;
        cube[o] = ((ci % 12) / 11 - 0.5) * 3 + j;
        cube[o + 1] = ((Math.floor(ci / 12) % 12) / 11 - 0.5) * 3 + j;
        cube[o + 2] = (Math.floor(ci / 144) / 11 - 0.5) * 3 + j;

        const u = rnd() * Math.PI * 2, v = rnd() * Math.PI * 2;
        torus[o] = (2.1 + 0.55 * Math.cos(v)) * Math.cos(u);
        torus[o + 1] = 0.55 * Math.sin(v);
        torus[o + 2] = (2.1 + 0.55 * Math.cos(v)) * Math.sin(u);

        wave[o] = ((i % 45) / 44 - 0.5) * 7;
        wave[o + 2] = (Math.floor(i / 45) / 39 - 0.5) * 6;
      }
      const pos = sphere.slice();
      const cloudGeo = track(new THREE.BufferGeometry());
      cloudGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const cloudMat = track(new THREE.PointsMaterial({ color: a400, size: 0.03, transparent: true, opacity: 0.9, depthWrite: false }));
      root.add(new THREE.Points(cloudGeo, cloudMat));

      labels = globeTechs.map(t => {
        const d = document.createElement('div');
        d.textContent = t;
        Object.assign(d.style, {
          position: 'absolute', left: 0, top: 0, fontSize: '11px', letterSpacing: '0.04em',
          color: 'var(--color-accent-200)', whiteSpace: 'nowrap', willChange: 'transform,opacity',
        });
        lb.appendChild(d);
        return d;
      });

      let mx = 0, my = 0, W = 0, H = 0;
      onPM = e => {
        mx = (e.clientX / window.innerWidth) * 2 - 1;
        my = (e.clientY / window.innerHeight) * 2 - 1;
      };
      window.addEventListener('pointermove', onPM);

      const resize = () => {
        W = el.clientWidth;
        H = el.clientHeight;
        renderer.setSize(W, H, false);
        camera.aspect = W / H;
        camera.position.z = W < 600 ? 11 : 8.4;
        camera.updateProjectionMatrix();
      };
      ro = new ResizeObserver(resize);
      ro.observe(el);
      resize();

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      const v = new THREE.Vector3();
      const cl = x => Math.max(0, Math.min(1, x));
      let tx = 0, ty = 0, last = performance.now(), time = 0, sm = 0;

      const tick = now => {
        if (dead) return;
        raf = requestAnimationFrame(tick);
        if (!W || W !== el.clientWidth || H !== el.clientHeight) resize();
        if (!W) return;

        const { shape, motion } = opts.current;
        const dt = Math.min((now - last) / 1000, 0.05);
        last = now;
        time += dt * (reduceMotion.matches ? 0 : (SPEEDS[motion] ?? 0.6));
        const isGlobe = shape === 'Tech globe';
        const seq = isGlobe
          ? [sphere, helix, knotA, cube, wave, torus, sphere]
          : [knotA, helix, sphere, cube, wave, torus, sphere];

        // Fractional section index from each section's centre relative to the viewport centre
        const n = SECTION_IDS.length;
        const cs = SECTION_IDS.map(id => {
          const e = document.getElementById(id);
          if (!e) return 0;
          const r = e.getBoundingClientRect();
          return r.top + r.height / 2 - window.innerHeight / 2;
        });
        let m = 0;
        if (cs[n - 1] <= 0) m = n - 1;
        else
          for (let k = 0; k < n - 1; k++)
            if (cs[k] <= 0 && cs[k + 1] > 0) {
              m = k + -cs[k] / (cs[k + 1] - cs[k]);
              break;
            }
        sm += (m - sm) * 0.07;

        const i = Math.min(Math.floor(sm), n - 1), i2 = Math.min(i + 1, n - 1), fr = sm - i;
        const q = cl((fr - 0.2) / 0.6), g = q * q * (3 - 2 * q);
        for (let j = 0; j < N; j++) {
          const o = j * 3;
          wave[o + 1] = Math.sin(wave[o] * 1.1 + time * 2) * Math.cos(wave[o + 2] * 1.1 + time) * 0.45;
        }
        const A = seq[i], B = seq[i2], burst = 1 + Math.sin(g * Math.PI) * 0.22;
        for (let j = 0; j < N * 3; j++) pos[j] = (A[j] + (B[j] - A[j]) * g) * burst;
        cloudGeo.attributes.position.needsUpdate = true;

        const L = arr => arr[i] + (arr[i2] - arr[i]) * g;
        const wide = W > 900;
        const vh = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z, vw = vh * camera.aspect;
        const fit = wide ? Math.min(1, (vw * 0.5 - 0.3) / 7.2) : 1;
        const sc = L(SC) * fit;
        root.scale.set(sc, sc, sc);
        const tgtX = wide ? Math.max(L(X) * vw, 0.3 + 3.4 * sc) : 0;
        root.position.x += (Math.min(tgtX, vw / 2 - 2.9 * sc) - root.position.x) * 0.08;
        root.position.y += ((wide ? 0 : sm < 1 ? -vh * 0.2 * (1 - sm) : 0) - root.position.y) * 0.08;
        cloudMat.opacity = L(OP) * (wide ? 1 : 0.6);

        // Globe, rings and labels fade out over the first ~half screen of scroll
        const sy = window.scrollY;
        const e = cl(1 - sy / (window.innerHeight * 0.55));
        globe.visible = isGlobe && e > 0.01;
        ringG.visible = e > 0.01;
        nodeMat.opacity = e;
        lineMat.opacity = 0.35 * e;
        coreMat.opacity = 0.5 * e;
        core2Mat.opacity = 0.9 * e;
        r1Mat.opacity = 0.45 * e;
        r2Mat.opacity = 0.5 * e;
        satMat.opacity = e;
        lb.style.opacity = isGlobe ? e : 0;

        tx += (my * 0.3 - tx) * 0.05;
        ty += (mx * 0.45 - ty) * 0.05;
        root.rotation.x = tx + Math.sin(sy * 0.0007) * 0.45;
        root.rotation.y = ty + time * 0.3 + sy * 0.0014;
        core.rotation.x = -time * 0.5;
        core.rotation.y = -time * 0.4;
        core2.rotation.y = time * 1.1;
        core2.rotation.z = time * 0.6;
        const ps = 1 + Math.sin(time * 2.2) * 0.04;
        core.scale.set(ps, ps, ps);
        const an = time * 0.8;
        sat.position.set(Math.cos(an) * 3.05, Math.sin(an) * 3.05, 0);
        renderer.render(scene, camera);

        if (isGlobe && e > 0.01)
          nodes.forEach((p, k) => {
            v.copy(p).applyMatrix4(globe.matrixWorld);
            const f = cl((v.z - root.position.z + R) / (2 * R));
            v.project(camera);
            const x = (v.x * 0.5 + 0.5) * W, y = (-v.y * 0.5 + 0.5) * H;
            labels[k].style.transform = `translate(${(x + 9).toFixed(1)}px,${(y - 7).toFixed(1)}px) scale(${(0.8 + f * 0.3).toFixed(2)})`;
            labels[k].style.opacity = (f * f).toFixed(2);
          });
      };
      raf = requestAnimationFrame(tick);
    })();

    return () => {
      dead = true;
      cancelAnimationFrame(raf);
      ro?.disconnect();
      if (onPM) window.removeEventListener('pointermove', onPM);
      disposables.forEach(d => d.dispose());
      if (renderer) {
        renderer.dispose();
        renderer.domElement.remove();
      }
      labels.forEach(d => d.remove());
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div ref={hostRef} className="absolute inset-0" />
      <div ref={labelsRef} className="absolute inset-0 overflow-hidden" />
    </div>
  );
}
