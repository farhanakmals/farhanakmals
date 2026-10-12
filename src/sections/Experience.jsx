import { useState } from 'react';
import { experiences } from '../data/portfolio';
import { Reveal, Section, SectionHeading, Tag } from '../components/ui';

export default function Experience() {
  const [current, setCurrent] = useState(0);
  const exp = experiences[current];

  return (
    <Section id="experience">
      <SectionHeading eyebrow="02 // experience" title="Work Experience" />
      <Reveal className="flex flex-wrap items-start gap-10">
        <div className="flex min-w-0 flex-[1_1_280px] flex-col" role="tablist" aria-label="Companies">
          {experiences.map((e, i) => {
            const active = i === current;
            return (
              <button
                key={e.company}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setCurrent(i)}
                className={`flex cursor-pointer gap-3.5 border-0 bg-transparent py-3 pr-1 pl-0 text-left font-[inherit] hover:text-neutral-100 ${
                  active ? 'text-neutral-100' : 'text-neutral-500'
                }`}
              >
                <span
                  className={`w-0.5 flex-none rounded-[2px] transition-colors duration-200 ${
                    active ? 'bg-accent shadow-[0_0_10px_var(--color-accent)]' : 'bg-neutral-800'
                  }`}
                />
                <span className="flex min-w-0 flex-col gap-0.5">
                  <span className="text-sm leading-[1.35]">{e.company}</span>
                  <span className="text-[11px] text-neutral-500">{e.period}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          className="bg-card-fade flex min-h-[340px] min-w-0 flex-[3_1_460px] flex-col gap-[18px] rounded-card p-7 shadow-hairline"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2.5">
            <div className="flex flex-col gap-1">
              <h3 className="m-0 text-[26px] tracking-[-0.02em]">{exp.role}</h3>
              <div className="text-[15px] text-accent-400">{exp.company}</div>
            </div>
            <div className="text-xs tracking-[0.04em] text-neutral-400">{exp.period}</div>
          </div>
          <div className="h-px bg-linear-to-r from-divider to-transparent" />
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {exp.points.map(p => (
              <li key={p} className="flex gap-3 text-[15px] leading-[1.6] text-neutral-300">
                <span className="mt-2.5 h-px w-2.5 flex-none bg-accent" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-wrap gap-1.5">
            {exp.tags.map(t => (
              <Tag key={t} variant="accent">
                {t}
              </Tag>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
