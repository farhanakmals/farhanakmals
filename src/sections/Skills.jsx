import { skillGroups, skillLevels } from '../data/portfolio';
import { Reveal, Section, SectionHeading } from '../components/ui';

const legend = (
  <div className="flex gap-4 text-[11px] text-neutral-500">
    <span>▮▮▯▯ Intermediate</span>
    <span>▮▮▮▯ Advanced</span>
    <span>▮▮▮▮ Expert</span>
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
            {g.items.map(([name, level]) => (
              <div key={name} className="row-rule-left flex flex-col gap-2 py-3">
                <div className="flex justify-between gap-2.5 text-sm">
                  <span>{name}</span>
                  <span className="text-xs text-accent-300">{level}</span>
                </div>
                <div className="grid grid-cols-4 gap-1">
                  {[0, 1, 2, 3].map(i => (
                    <span
                      key={i}
                      className={`h-[3px] rounded-[2px] ${i < skillLevels[level] ? 'bg-accent' : 'bg-neutral-800'}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
