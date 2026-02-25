import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Target, User, BookOpen, MessageSquare, Copy, Check } from 'lucide-react'
import RetroFrame from '../components/RetroFrame'
import Button from '../components/ui/Button'
import { CHATBOT_TYPES, MOMENTS, INTENTIONS } from '../data/chatbots'

// ─── Matrice ────────────────────────────────────────────────────────────────

function Matrix({ onSelectCell }) {
  const getChatbot = (momentId, intentionId) =>
    CHATBOT_TYPES.find((c) => c.moment === momentId && c.intention === intentionId)

  return (
    <motion.div
      key="matrix"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      className="w-full max-w-6xl mx-auto p-6"
    >
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-display uppercase tracking-widest text-retro-teal mb-3">
          Typologie des Chatbots Éducatifs
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Cliquez sur une case pour découvrir le type de chatbot correspondant
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[700px]">
          {/* Header row */}
          <div className="grid grid-cols-4 gap-3 mb-3">
            <div className="p-4" />
            {MOMENTS.map((m) => (
              <div key={m.id} className="bg-retro-teal text-retro-paper p-4 rounded-lg text-center">
                <div className="font-display uppercase tracking-wide text-lg">{m.label}</div>
                <div className="text-sm opacity-80">{m.description}</div>
              </div>
            ))}
          </div>

          {/* Data rows */}
          {INTENTIONS.map((intention, rowIdx) => (
            <div key={intention.id} className="grid grid-cols-4 gap-3 mb-3">
              {/* Row label */}
              <div className="bg-retro-teal text-retro-paper p-4 rounded-lg flex items-center gap-3">
                <span className="text-2xl">{intention.emoji}</span>
                <span className="font-display uppercase tracking-wide">{intention.label}</span>
              </div>

              {/* Cells */}
              {MOMENTS.map((moment, colIdx) => {
                const chatbot = getChatbot(moment.id, intention.id)
                if (!chatbot) return <div key={moment.id} />
                return (
                  <motion.button
                    key={`${moment.id}-${intention.id}`}
                    onClick={() => onSelectCell(chatbot.id)}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 text-left hover:shadow-lg hover:scale-[1.02] cursor-pointer ${intention.color}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: rowIdx * 0.1 + colIdx * 0.05 }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="font-display uppercase tracking-wide text-retro-teal text-sm leading-tight">
                      {chatbot.type}
                    </div>
                  </motion.button>
                )
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 p-6 bg-muted/50 rounded-lg" style={{ border: '2px solid #127676' }}>
        <h3 className="font-display uppercase tracking-wide text-retro-teal mb-3">
          Comment utiliser cette matrice ?
        </h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-retro-orange mt-1">•</span>
            <span><strong>Colonnes :</strong> choisissez le moment de l'apprentissage (avant, pendant, après)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-retro-orange mt-1">•</span>
            <span><strong>Lignes :</strong> identifiez votre intention pédagogique</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-retro-orange mt-1">•</span>
            <span><strong>Cliquez</strong> sur une case pour découvrir le type de chatbot adapté, un exemple et un prompt prêt à l'emploi</span>
          </li>
        </ul>
      </div>
    </motion.div>
  )
}

// ─── Fiche détail ────────────────────────────────────────────────────────────

function ChatbotDetail({ chatbot, onBack }) {
  const [copied, setCopied] = useState(false)
  const intention = INTENTIONS.find((i) => i.id === chatbot.intention)
  const moment = MOMENTS.find((m) => m.id === chatbot.moment)

  const copyPrompt = async () => {
    await navigator.clipboard.writeText(chatbot.prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      key="detail"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="w-full max-w-4xl mx-auto p-6"
    >
      <Button
        variant="ghost"
        onClick={onBack}
        className="mb-6 text-retro-teal hover:text-retro-teal/80 hover:bg-retro-teal/10"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Retour à la matrice
      </Button>

      {/* Title block */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">{intention?.emoji}</span>
          <div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-retro-teal/10 text-retro-teal rounded-full text-sm font-display uppercase tracking-wide">
                {moment?.label}
              </span>
              <span className="px-3 py-1 bg-retro-orange/10 text-retro-orange rounded-full text-sm font-display uppercase tracking-wide">
                {intention?.label}
              </span>
            </div>
          </div>
        </div>
        <h1 className="text-2xl md:text-3xl font-display uppercase tracking-widest text-retro-teal">
          {chatbot.type}
        </h1>
      </div>

      <div className="space-y-6">
        {/* Objectif */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-background rounded-lg p-6"
          style={{ border: '3px solid #127676', borderRadius: '24px 8px 24px 8px', boxShadow: 'inset 0 0 0 2px rgba(228,99,46,0.2)' }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-retro-teal/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-retro-teal" />
            </div>
            <h2 className="text-lg font-display uppercase tracking-wide text-retro-teal">Objectif pédagogique</h2>
          </div>
          <p className="text-foreground leading-relaxed">{chatbot.objectif}</p>
        </motion.div>

        {/* Posture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-background rounded-lg p-6"
          style={{ border: '3px solid #127676', borderRadius: '24px 8px 24px 8px', boxShadow: 'inset 0 0 0 2px rgba(228,99,46,0.2)' }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-retro-orange/10 flex items-center justify-center">
              <User className="w-5 h-5 text-retro-orange" />
            </div>
            <h2 className="text-lg font-display uppercase tracking-wide text-retro-teal">Posture du chatbot</h2>
          </div>
          <p className="text-foreground leading-relaxed">{chatbot.posture}</p>
        </motion.div>

        {/* Exemple */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-background rounded-lg p-6"
          style={{ border: '3px solid #127676', borderRadius: '24px 8px 24px 8px', boxShadow: 'inset 0 0 0 2px rgba(228,99,46,0.2)' }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-retro-teal/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-retro-teal" />
            </div>
            <h2 className="text-lg font-display uppercase tracking-wide text-retro-teal">Exemple concret</h2>
          </div>
          <p className="text-foreground leading-relaxed italic bg-muted/30 p-4 rounded-md border-l-4 border-retro-orange">
            {chatbot.exemple}
          </p>
        </motion.div>

        {/* Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-retro-teal text-retro-paper rounded-lg p-6 shadow-lg"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-display uppercase tracking-wide">Prompt prêt à l'emploi</h2>
            </div>
            <button
              onClick={copyPrompt}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-display uppercase tracking-wide transition-colors ${
                copied ? 'bg-retro-jaune/40 text-retro-ink' : 'bg-white/20 hover:bg-white/30'
              }`}
            >
              {copied ? (
                <><Check className="w-4 h-4" />Copié !</>
              ) : (
                <><Copy className="w-4 h-4" />Copier</>
              )}
            </button>
          </div>
          <p className="leading-relaxed bg-white/10 p-4 rounded-md font-mono text-sm">
            {chatbot.prompt}
          </p>
        </motion.div>
      </div>

      <div className="mt-8 text-center">
        <Button
          onClick={onBack}
          className="bg-retro-orange hover:bg-retro-orange/90 text-retro-paper"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à la matrice
        </Button>
      </div>
    </motion.div>
  )
}

// ─── Page principale ─────────────────────────────────────────────────────────

export default function TypologyPage() {
  const [selectedId, setSelectedId] = useState(null)
  const chatbot = selectedId ? CHATBOT_TYPES.find((c) => c.id === selectedId) : null

  return (
    <RetroFrame>
      <main className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          <Link to="/">
            <Button variant="ghost" className="mb-4 text-muted-foreground hover:text-retro-teal">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Button>
          </Link>
        </div>

        <AnimatePresence mode="wait">
          {chatbot ? (
            <ChatbotDetail
              key={chatbot.id}
              chatbot={chatbot}
              onBack={() => setSelectedId(null)}
            />
          ) : (
            <Matrix key="matrix" onSelectCell={setSelectedId} />
          )}
        </AnimatePresence>
      </main>
    </RetroFrame>
  )
}
