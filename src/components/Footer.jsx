export default function Footer({ subtitle = 'Aide à l\'élaboration de chatbots éducatifs' }) {
  return (
    <footer className="bg-edhuman-blue/5 border-t border-border py-6">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-muted-foreground">
        <p>Formation enseignants • {subtitle}</p>
        <p className="mt-2">
          <a
            href="https://www.edhuman.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-edhuman-orange font-medium hover:underline"
          >
            www.edhuman.org
          </a>
        </p>
        <p className="mt-1 text-edhuman-orange font-medium">EDHUMAN © 2026</p>
      </div>
    </footer>
  )
}
