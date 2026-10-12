import { useLayoutEffect, useRef } from 'react';

const btnBase =
  'inline-flex items-center justify-center gap-1.5 cursor-pointer no-underline font-medium text-sm leading-[1.2] ' +
  'border bg-transparent rounded-lg px-[10px] py-[5.6px] transition-colors';

const btnVariants = {
  primary: 'text-accent border-accent hover:text-accent-300 hover:bg-accent/12 active:bg-accent/22',
  secondary: 'text-text border-divider hover:text-accent-300 hover:bg-text/7 active:bg-text/14',
  ghost: 'text-accent border-transparent px-[2.8px] hover:text-accent-300 hover:bg-accent/10 active:bg-accent/18',
};

export function Button({ variant = 'primary', className = '', children, ...props }) {
  return (
    <a className={`${btnBase} ${btnVariants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}

const tagVariants = {
  accent: 'bg-accent-800 text-accent-100',
  neutral: 'bg-neutral-800 text-neutral-100',
};

export function Tag({ variant = 'neutral', className = '', children }) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2.5 py-[3px] text-[11px] tracking-[0.02em] ${tagVariants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

export function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-2.5 text-xs uppercase tracking-[0.1em] text-accent-400">
      <span className="h-px w-5 bg-accent" />
      {children}
    </div>
  );
}

export function SectionHeading({ eyebrow, title, aside }) {
  return (
    <Reveal className="mb-11 flex flex-wrap items-end justify-between gap-4">
      <div className="flex flex-col gap-3">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="m-0 text-[clamp(32px,4vw,48px)] tracking-[-0.025em]">{title}</h2>
      </div>
      {aside}
    </Reveal>
  );
}

export function Section({ id, className = 'pt-24 pb-16', children }) {
  return (
    <section id={id} className={`relative z-[1] mx-auto max-w-[1240px] scroll-mt-[60px] px-8 ${className}`}>
      {children}
    </section>
  );
}

/** Tilts into place as it scrolls into view. Elements already on screen at mount are left alone. */
export function Reveal({ className = '', children, ...props }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || el.getBoundingClientRect().top < window.innerHeight) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    Object.assign(el.style, {
      opacity: '0',
      transformOrigin: '50% 0%',
      transform: 'perspective(1000px) rotateX(14deg) translateY(40px) scale(.97)',
      transition: 'opacity .9s ease, transform 1s cubic-bezier(.2,.7,.2,1)',
    });
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.style.opacity = '1';
        el.style.transform = 'none';
        io.disconnect();
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
}
