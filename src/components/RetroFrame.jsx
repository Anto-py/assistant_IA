function CornerOrnament({ className }) {
  return (
    <svg
      className={`absolute w-14 h-14 opacity-60 pointer-events-none ${className}`}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5,5 C5,5 20,5 30,15 C40,25 35,40 35,40 C35,40 25,30 15,30 C5,30 5,5 5,5 Z"
        stroke="#127676"
        strokeWidth="1.5"
      />
      <circle cx="8" cy="8" r="3" fill="#127676" />
      <path d="M15,15 Q20,10 25,18" stroke="#127676" strokeWidth="1" />
    </svg>
  )
}

const bgUrl = `${import.meta.env.BASE_URL}background.jpg`

export default function RetroFrame({ children }) {
  return (
    <div
      className="bg-retro-ink min-h-screen"
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: '40px',
      }}
    >
      <div className="page-frame">
        <CornerOrnament className="top-3 left-3" />
        <CornerOrnament className="top-3 right-3 rotate-90" />
        <CornerOrnament className="bottom-3 right-3 rotate-180" />
        <CornerOrnament className="bottom-3 left-3 -rotate-90" />
        {children}

        <footer className="mt-10 pt-4 border-t border-retro-teal/30 text-center text-sm text-muted-foreground">
          A partir d'un outil créé par{' '}
          <a
            href="https://www.edhuman.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-retro-teal font-medium hover:text-retro-orange transition-colors"
          >
            edhuman
          </a>
        </footer>
      </div>
    </div>
  )
}
