import { contact } from '../data/portfolio';
import { Button } from '../components/ui';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative z-[1] mx-auto flex min-h-[min(820px,90vh)] max-w-[1240px] flex-wrap items-center gap-6 px-8 pt-12 pb-[72px]"
    >
      <div className="relative z-[2] flex min-w-0 flex-[1_1_460px] flex-col gap-[22px]">
        <div className="flex items-center gap-2.5 text-[13px] tracking-[0.04em] text-accent-400">
          <span className="h-px w-5 bg-accent" />
          &gt; hello, world! I&apos;m
        </div>
        <h1 className="m-0 text-[clamp(52px,7.4vw,104px)] leading-[0.95] font-medium tracking-[-0.035em]">
          Farhan Akmal
          <br />
          <span className="text-outline [--stroke-color:var(--color-accent-400)] [--stroke:1.2px]">Shaleh</span>
        </h1>
        <div className="text-[clamp(18px,2vw,22px)] text-neutral-200">Fullstack Developer &amp; Data Enthusiast</div>
        <p className="m-0 max-w-[520px] text-[15px] leading-[1.65] text-pretty text-neutral-400">
          S.Tr.Kom from Gadjah Mada University. Building production-grade web systems with Laravel, Next.js, and
          TypeScript — with a serious interest in ML and data engineering.
        </p>
        <div className="mt-1.5 flex flex-wrap gap-2.5">
          <Button href="#projects" className="px-[18px] py-2.5">
            View my work
          </Button>
          <Button variant="secondary" href={contact.linkedin} target="_blank" rel="noreferrer" className="px-[18px] py-2.5">
            LinkedIn ↗
          </Button>
        </div>
        <div className="mt-2 flex items-center gap-2 text-xs text-neutral-400">
          <span className="size-[7px] rounded-full bg-accent-400 shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-accent)_20%,transparent)]" />
          available for work · {contact.location}
        </div>
      </div>

      {/* Space the fixed 3D scene occupies on wide screens */}
      <div className="relative h-[clamp(380px,50vw,620px)] min-w-0 flex-[1_1_440px]">
        <div className="bg-hero-glow absolute inset-[12%] rounded-full blur-[10px]" />
      </div>
    </section>
  );
}
