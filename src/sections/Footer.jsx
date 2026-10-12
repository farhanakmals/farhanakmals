export default function Footer() {
  return (
    <footer className="relative z-[1] mx-auto max-w-[1240px] px-8 pb-10">
      <div className="rule-fade mb-[22px]" />
      <div className="flex flex-wrap justify-between gap-3 text-xs text-neutral-500">
        <span>© 2025 Farhan Akmal Shaleh</span>
        <a href="#top" className="text-neutral-400 no-underline hover:text-accent-300">
          back to top ↑
        </a>
      </div>
    </footer>
  );
}
