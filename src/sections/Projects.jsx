import { projects } from '../data/portfolio';
import { Button, Reveal, Section, SectionHeading, Tag } from '../components/ui';

function tilt(e) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const px = (e.clientX - r.left) / r.width;
  const py = (e.clientY - r.top) / r.height;
  el.style.transform = `perspective(900px) rotateX(${((0.5 - py) * 9).toFixed(2)}deg) rotateY(${((px - 0.5) * 11).toFixed(2)}deg)`;
  el.style.setProperty('--mx', `${px * 100}%`);
  el.style.setProperty('--my', `${py * 100}%`);
  el.style.setProperty('--glow', 1);
}

function untilt(e) {
  const el = e.currentTarget;
  el.style.transform = 'perspective(900px)';
  el.style.setProperty('--glow', 0);
}

function ProjectCard({ p }) {
  return (
    <div
      onMouseMove={tilt}
      onMouseLeave={untilt}
      className="relative flex h-full flex-col gap-3.5 overflow-hidden rounded-card bg-surface p-[26px] shadow-hairline transition-[transform,box-shadow] duration-[250ms] ease-out transform-3d will-change-transform hover:shadow-raised"
    >
      <div className="card-glow pointer-events-none absolute inset-0 transition-opacity duration-300" />
      <div className="relative flex items-center justify-between gap-2.5">
        <span className="text-outline text-[40px] leading-none font-medium tracking-[-0.03em] [--stroke-color:var(--color-neutral-600)]">
          {p.n}
        </span>
        {p.url && (
          <Button variant="ghost" href={p.url} target="_blank" rel="noreferrer" className="gap-1 px-1.5 py-1 text-xs">
            live
            <svg width="12" height="12" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
              <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
            </svg>
          </Button>
        )}
        {p.kind && <span className="text-[11px] uppercase tracking-[0.06em] text-neutral-500">{p.kind}</span>}
      </div>
      <h3 className="relative m-0 translate-z-[30px] text-[21px] tracking-[-0.015em]">{p.title}</h3>
      <p className="relative m-0 flex-1 text-sm leading-[1.6] text-pretty text-neutral-400">{p.desc}</p>
      <div className="relative flex flex-wrap gap-1.5">
        {p.tags.map(t => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading eyebrow="03 // projects" title="Featured Projects" />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(320px,100%),1fr))] gap-[18px]">
        {projects.map(p => (
          <Reveal key={p.n}>
            <ProjectCard p={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
