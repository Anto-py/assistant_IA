import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import RetroFrame from '../components/RetroFrame'
import Button from '../components/ui/Button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card'
import { INTERLOCUTORS } from '../data/interlocutors'

export default function InterlocutorsPage() {
  return (
    <RetroFrame>
      <main className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/">
              <Button variant="ghost" className="mb-6 text-muted-foreground hover:text-retro-teal">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour à l'accueil
              </Button>
            </Link>

            <h1 className="text-3xl font-display uppercase tracking-widest text-retro-teal mb-2">
              🎭 Types d'interlocuteurs
            </h1>
            <p className="text-muted-foreground mb-8">
              4 postures que peut adopter le chatbot selon l'objectif pédagogique visé.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {INTERLOCUTORS.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl">{item.emoji}</span>
                        <div>
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                          <CardDescription className="text-retro-orange font-medium mt-1">
                            {item.role}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-1.5">
                        {item.behaviors.map((behavior, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                            <span className="text-retro-teal mt-0.5">•</span>
                            <span>{behavior}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-2 border-t border-border">
                        <p className="text-sm">
                          <span className="text-muted-foreground">👉 Usage clé : </span>
                          <span className="font-medium text-foreground">{item.usageKey}</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </RetroFrame>
  )
}
