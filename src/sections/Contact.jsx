import { contact } from '../data/portfolio';
import { Button, Eyebrow, Reveal, Section } from '../components/ui';

export default function Contact() {
  return (
    <Section id="contact" className="pt-[120px] pb-24">
      <Reveal className="flex max-w-[820px] flex-col gap-[22px]">
        <Eyebrow>06 // contact</Eyebrow>
        <h2 className="m-0 text-[clamp(44px,7vw,88px)] leading-none tracking-[-0.035em]">Get In Touch</h2>
        <p className="m-0 max-w-[560px] text-[17px] leading-[1.65] text-pretty text-neutral-400">
          Open to new opportunities — whether it&apos;s a full-time role, freelance project, or just a good
          conversation about tech. My inbox is always open.
        </p>
        <a
          href={`mailto:${contact.email}`}
          className="underline-accent self-start pb-1.5 text-[clamp(22px,3.4vw,40px)] tracking-[-0.02em] break-all text-neutral-100 no-underline hover:text-accent-300"
        >
          {contact.email}
        </a>
        <div className="flex flex-wrap gap-2.5">
          <Button href={contact.linkedin} target="_blank" rel="noreferrer" className="px-[18px] py-2.5">
            LinkedIn ↗
          </Button>
          <Button variant="secondary" href={`tel:${contact.phone}`} className="px-[18px] py-2.5">
            {contact.phoneLabel}
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
