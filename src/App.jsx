import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TypologyPage from './pages/TypologyPage'
import RulesPage from './pages/RulesPage'
import InterlocutorsPage from './pages/InterlocutorsPage'

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Page introuvable</p>
        <Link to="/" className="text-edhuman-blue underline hover:opacity-80">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}

const bgUrl = `${import.meta.env.BASE_URL}background.jpg`

export default function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
      }}
    >
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/typologie" element={<TypologyPage />} />
        <Route path="/regles" element={<RulesPage />} />
        <Route path="/interlocuteurs" element={<InterlocutorsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
    </div>
  )
}
