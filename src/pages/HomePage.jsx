import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import RetroFrame from '../components/RetroFrame'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card'
import { NAV_SECTIONS, PLATFORMS } from '../data/navigation'

export default function HomePage() {
  return (
    <RetroFrame>
      <main className="py-10">
        <div className="max-w-4xl mx-auto px-6">

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-display uppercase tracking-widest text-retro-teal mb-4">
              Aide à l'élaboration d'un chatbot éducatif
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez les outils pour concevoir un chatbot pédagogique adapté à vos besoins :
              typologie, règles comportementales et types d'interlocuteurs.
            </p>
          </motion.div>

          {/* Navigation cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {NAV_SECTIONS.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={section.path}>
                  <Card className={`h-full cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ${section.color}`}>
                    <CardHeader className="text-center pb-2">
                      <div className="text-5xl mb-3">{section.emoji}</div>
                      <CardTitle className="text-lg">{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center">
                        {section.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Séparateur */}
          <div className="retro-separator">❧ Outils ❧</div>

          {/* External tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-display uppercase tracking-widest text-retro-teal mb-2 text-center">
              Plateformes recommandées
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Pour concevoir et déployer votre chatbot éducatif.
            </p>

            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {PLATFORMS.map((platform) => (
                    <a
                      key={platform.id}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-3 rounded-lg transition-all duration-200 hover:bg-retro-orange/5 group"
                    >
                      <span className="text-2xl">{platform.emoji}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 font-semibold text-foreground group-hover:text-retro-orange transition-colors">
                          {platform.name}
                          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-retro-orange transition-colors" />
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {platform.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </main>
    </RetroFrame>
  )
}
