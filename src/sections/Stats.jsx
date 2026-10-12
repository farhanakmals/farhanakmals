import { stats } from '../data/portfolio';
import { Reveal } from '../components/ui';

export default function Stats() {
  return (
    <section className="bg-stats relative z-[1]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 px-8 py-11">
        {stats.map(s => (
          <Reveal key={s.label} className="flex flex-col gap-1">
            <div className="text-[clamp(44px,5vw,64px)] leading-none font-medium tracking-[-0.03em] text-neutral-100">
              {s.value}
            </div>
            <div className="text-[13px] text-accent-200">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
