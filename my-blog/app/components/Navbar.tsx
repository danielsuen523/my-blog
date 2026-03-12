export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-black/80">
      <div className="flex h-16 w-full max-w-5xl mx-auto items-center justify-between px-6">
        <a href="/" className="text-lg font-semibold text-black dark:text-white">
          Daniel Suen
        </a>
        <nav className="flex items-center gap-6">
          <a href="/" className="text-sm text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white">
            Home
          </a>
          <a href="/blog" className="text-sm text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white">
            Blog
          </a>
          <a href="#" className="text-sm text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white">
            About
          </a>
        </nav>
      </div>
    </header>
  );
}
