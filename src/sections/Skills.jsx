import { skillGroups, skillLevel } from '../data/portfolio';
import { Reveal, Section, SectionHeading } from '../components/ui';

const legend = (
  <div className="flex flex-wrap gap-4 text-[11px] text-neutral-500">
    <span>&lt;75 Intermediate</span>
    <span>75–89 Advanced</span>
    <span>90+ Expert</span>
  </div>
);

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading eyebrow="04 // skills" title="Technical Skills" aside={legend} />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-x-8 gap-y-10">
        {skillGroups.map(g => (
          <Reveal key={g.title} className="flex flex-col gap-1">
            <div className="mb-2.5 text-xs uppercase tracking-[0.08em] text-neutral-500">{g.title}</div>
            {g.items.map(([name, score]) => (
              <div key={name} className="row-rule-left flex flex-col gap-2 py-3">
                <div className="flex items-baseline justify-between gap-2.5 text-sm">
                  <span>{name}</span>
                  <span className="flex flex-none items-baseline gap-2">
                    <span className="text-[11px] text-neutral-500">{skillLevel(score)}</span>
                    <span className="text-sm font-medium tabular-nums text-accent-300">{score}%</span>
                  </span>
                </div>
                <div
                  className="h-[3px] overflow-hidden rounded-[2px] bg-neutral-800"
                  role="meter"
                  aria-label={name}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={score}
                >
                  <div className="h-full rounded-[2px] bg-accent" style={{ width: `${score}%` }} />
                </div>
              </div>
            ))}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
