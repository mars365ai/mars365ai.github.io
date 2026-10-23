import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { SiteLayout, NotFound } from './components'
import {
  AboutPage,
  ArticlePage,
  ContactPage,
  HomePage,
  IndustriesPage,
  IndustryDetailPage,
  InsightsPage,
  PrivacyPage,
  RoboticsPage,
  ServiceDetailPage,
  ServicesPage,
  SolutionDetailPage,
  SolutionsPage,
} from './pages'

function RouteEffects() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    const pageName = location.pathname.split('/').filter(Boolean).at(-1)?.replaceAll('-', ' ')
    document.title = pageName ? `${pageName.replace(/\b\w/g, (letter) => letter.toUpperCase())} | Mars365 AI` : 'Mars365 AI — Intelligence, put to work'
  }, [location.pathname])
  return null
}

function App() {
  return <SiteLayout>
    <RouteEffects />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/robotics-training" element={<RoboticsPage />} />
      <Route path="/services/:slug" element={<ServiceDetailPage />} />
      <Route path="/solutions" element={<SolutionsPage />} />
      <Route path="/solutions/:slug" element={<SolutionDetailPage />} />
      <Route path="/industries" element={<IndustriesPage />} />
      <Route path="/industries/:slug" element={<IndustryDetailPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/insights" element={<InsightsPage />} />
      <Route path="/insights/:slug" element={<ArticlePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </SiteLayout>
}

export default App