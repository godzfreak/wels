export default function Footer() {
  return (
    <footer className="bg-obsidian text-alabaster/40 py-12 px-8 border-t border-alabaster/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end">
        <div>
          <h1 className="text-6xl font-serif text-alabaster mb-4">W</h1>
          <p className="text-xs font-mono tracking-widest uppercase">
            Welwitschi Ree &copy; 2024
          </p>
        </div>
        <div className="flex gap-8 mt-8 md:mt-0 font-mono text-xs uppercase tracking-widest">
          <a href="#" className="hover:text-namib-gold transition-colors">Instagram</a>
          <a href="#" className="hover:text-namib-gold transition-colors">Twitter</a>
          <a href="#" className="hover:text-namib-gold transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
