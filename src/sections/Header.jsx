import { contact, navLinks } from '../data/portfolio';
import { Button } from '../components/ui';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-bg/78 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-[22px] px-8 py-3.5">
        <a href="#top" className="mr-auto flex items-center gap-2 text-base font-medium text-text no-underline hover:text-accent">
          <span className="size-2 rounded-[2px] bg-accent shadow-[0_0_12px_var(--color-accent)]" />
          Farhan Akmal S
        </a>
        {navLinks.map(id => (
          <a key={id} href={`#${id}`} className="text-[13px] text-neutral-400 no-underline hover:text-accent">
            {id}
          </a>
        ))}
        <Button href={`mailto:${contact.email}`} className="text-[13px] text-text! hover:text-accent!">
          hire me
        </Button>
      </nav>
      <div className="rule-fade" />
    </header>
  );
}
