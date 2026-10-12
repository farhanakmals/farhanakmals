import { certs } from '../data/portfolio';
import { Reveal, Section, SectionHeading, Tag } from '../components/ui';

const card = 'flex flex-col gap-2 rounded-card bg-surface p-[26px] shadow-hairline';
const kicker = 'text-xs uppercase tracking-[0.08em] text-neutral-500';

export default function Education() {
  return (
    <Section id="education">
      <SectionHeading eyebrow="05 // education & certs" title="Education & Certifications" />
      <div className="flex flex-wrap items-start gap-12">
        <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-[18px]">
          <Reveal className={card}>
            <div className={`flex justify-between gap-2.5 ${kicker}`}>
              <span>// education</span>
              <span className="text-accent-400">2021 — 2025</span>
            </div>
            <h3 className="mt-1.5 mb-0 text-2xl tracking-[-0.02em]">Universitas Gadjah Mada</h3>
            <div className="text-[15px] text-neutral-200">Sarjana Terapan Komputer (S.Tr.Kom)</div>
            <div className="text-sm text-neutral-400">Software Engineering Technology</div>
            <div className="text-[13px] text-neutral-500">Yogyakarta, Indonesia</div>
          </Reveal>

          <Reveal className={card}>
            <div className={kicker}>// organization</div>
            <h3 className="mt-1.5 mb-0 text-[19px] tracking-[-0.015em]">
              ASSETS — Assoc. of Software Engineering Students
            </h3>
            <div className="text-sm text-neutral-400">Interest &amp; Talent Division</div>
            <div className="flex items-center gap-2 text-[13px] text-neutral-300">
              <Tag>Staff (2022)</Tag>
              <span className="text-accent">→</span>
              <Tag variant="accent">Division Head (2023)</Tag>
            </div>
          </Reveal>
        </div>

        <Reveal className="flex min-w-0 flex-[1.4_1_420px] flex-col">
          <div className={`mb-1.5 ${kicker}`}>// certifications</div>
          {certs.map(c => (
            <div key={c.title} className="row-rule flex items-baseline gap-4 py-4">
              <span className="w-[22px] flex-none text-xs text-accent-400">{c.mark}</span>
              <div className="flex min-w-0 flex-col gap-[3px]">
                <div className="text-[15px] text-neutral-100">{c.title}</div>
                <div className="text-[13px] text-neutral-500">{c.meta}</div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
