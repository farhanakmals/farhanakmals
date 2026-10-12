import { techList } from '../data/portfolio';
import { Reveal, Section, SectionHeading, Tag } from '../components/ui';

export default function About() {
  return (
    <Section id="about" className="pt-28 pb-16">
      <SectionHeading eyebrow="01 // about_me" title="Who I Am" />
      <div className="flex flex-wrap items-start gap-14">
        <Reveal className="flex min-w-0 flex-[2_1_460px] flex-col gap-4 text-base leading-[1.7] text-pretty text-neutral-300">
          <p className="m-0 text-xl leading-[1.55] text-neutral-100">
            I&apos;m a Software Engineer with a strong interest in both web and data development. Graduated from the
            Software Engineering Technology program at Universitas Gadjah Mada in 2025.
          </p>
          <p className="m-0">
            I&apos;ve built production systems ranging from internal government health data portals to company profile
            sites with custom CMS, and real-time manufacturing dashboards. I care about code quality, clean
            architecture, and shipping things that actually work.
          </p>
          <p className="m-0">
            Outside of fullstack work, I&apos;ve trained machine learning models, built OCR pipelines, and done data
            analysis through Bangkit Academy (Google, GoTo, Traveloka). Certified Associate Data Scientist by BNSP —
            valid until 2028.
          </p>
          <p className="m-0">
            Currently working as a Fullstack Developer at PT Mekar Armada Jaya (New Armada Group), Bekasi, maintaining
            and building internal web systems and IoT integrations.
          </p>
          <div className="mt-4 flex flex-col gap-3">
            <div className="text-xs uppercase tracking-[0.08em] text-neutral-500">// tech I work with</div>
            <div className="flex flex-wrap gap-2">
              {techList.map(t => (
                <Tag key={t} className="px-3 py-[5px] text-xs">
                  {t}
                </Tag>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="relative min-w-0 max-w-[380px] flex-[1_1_280px]">
          <div className="absolute -inset-3.5 -rotate-3 rounded-card border border-accent/40" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-surface shadow-raised">
            <img
              src="https://farhanakmals.github.io/image/farhan.jpg"
              alt="Farhan Akmal Shaleh"
              className="size-full object-cover mix-blend-lighten"
            />
          </div>
          <Tag variant="accent" className="absolute bottom-4 left-4 px-3 py-[5px] text-xs">
            available for work
          </Tag>
        </Reveal>
      </div>
    </Section>
  );
}
