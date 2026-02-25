export default function Header() {
  return (
    <header className="bg-edhuman-blue text-white py-4 px-6 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center gap-4">
        <a
          href="https://www.edhuman.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
        >
          {/* Logo texte de secours si l'image ne charge pas */}
          <span className="font-bold text-2xl tracking-widest">EDHUMAN</span>
        </a>
      </div>
    </header>
  )
}
