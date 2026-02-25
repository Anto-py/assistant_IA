import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ChevronDown } from 'lucide-react'
import RetroFrame from '../components/RetroFrame'
import Button from '../components/ui/Button'
import { RULES } from '../data/rules'

function AccordionItem({ rule, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="rounded-lg px-4 bg-background"
      style={{
        border: isOpen ? '2px solid #127676' : '2px solid rgba(18,118,118,0.35)',
        borderRadius: '16px 4px 16px 4px',
        transition: 'border-color 0.2s',
      }}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 font-medium text-left hover:no-underline focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{rule.emoji}</span>
          <div>
            <div className="font-display uppercase tracking-wide text-retro-teal">
              {index + 1}. {rule.title}
            </div>
            <div className="text-sm text-muted-foreground font-normal mt-0.5">
              👉 {rule.description}
            </div>
          </div>
        </div>
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform duration-200 text-retro-teal ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden pb-4"
        >
          <ul className="space-y-2 ml-11">
            {rule.rules.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-foreground">
                <span className="text-retro-orange mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.div>
  )
}

export default function RulesPage() {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id))

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
              📋 Règles comportementales
            </h1>
            <p className="text-muted-foreground mb-8">
              10 catégories de règles pour définir comment le chatbot doit interagir avec l'élève.
            </p>

            <div className="space-y-3">
              {RULES.map((rule, index) => (
                <AccordionItem
                  key={rule.id}
                  rule={rule}
                  index={index}
                  isOpen={openId === rule.id}
                  onToggle={() => toggle(rule.id)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </RetroFrame>
  )
}
