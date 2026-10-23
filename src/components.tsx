import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  CircleHelp,
  Command,
  Compass,
  Copy,
  Cpu,
  Layers3,
  Menu,
  Moon,
  Search,
  Settings2,
  Sparkles,
  Sun,
  X,
  type LucideIcon,
} from 'lucide-react'
import { articles, company, industries, navigation, services, solutions, type Service } from './data'

const serviceIcons: Record<Service['icon'], LucideIcon> = {
  strategy: Compass,
  agents: Bot,
  generative: BrainCircuit,
  development: Layers3,
  microsoft: BriefcaseBusiness,
  engineering: Settings2,
  robotics: Cpu,
}

export function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className={`brand ${light ? 'brand-light' : ''}`} aria-label={`${company.name} home`}>
      <span className="brand-glyph" aria-hidden="true"><i /><i /><i /><i /></span>
      <span className="brand-name">{company.name}<small>AI SOLUTIONS</small></span>
    </Link>
  )
}

export function IconForService({ service, className = '' }: { service: Service; className?: string }) {
  const Icon = serviceIcons[service.icon]
  return <Icon className={className} aria-hidden="true" strokeWidth={1.7} />
}

export function ArrowLink({ to, children, light = false }: { to: string; children: React.ReactNode; light?: boolean }) {
  return <Link className={`arrow-link ${light ? 'arrow-link-light' : ''}`} to={to}>{children}<ArrowUpRight size={17} aria-hidden="true" /></Link>
}

function GlobalSearch({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const cleanQuery = query.trim().toLowerCase()
  const results = [
    ...services.map((item) => ({ kind: 'Service', title: item.title, description: item.summary, to: `/services/${item.slug}` })),
    ...solutions.map((item) => ({ kind: 'Solution', title: item.title, description: item.challenge, to: `/solutions/${item.slug}` })),
    ...articles.map((item) => ({ kind: 'Insight', title: item.title, description: item.excerpt, to: `/insights/${item.slug}` })),
  ].filter((item) => !cleanQuery || `${item.title} ${item.description} ${item.kind}`.toLowerCase().includes(cleanQuery)).slice(0, 8)

  useEffect(() => {
    if (!open) return
    inputRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open) return null
  return (
    <div className="search-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <section className="search-panel" role="dialog" aria-modal="true" aria-labelledby="search-title">
        <div className="search-heading">
          <h2 id="search-title">Search Mars365 AI</h2>
          <button className="icon-button" type="button" onClick={onClose} aria-label="Close search"><X size={19} /></button>
        </div>
        <label className="search-input-wrap">
          <Search size={20} aria-hidden="true" />
          <span className="sr-only">Search services, solutions, and insights</span>
          <input ref={inputRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search services, solutions, insights…" />
          <kbd>ESC</kbd>
        </label>
        <div className="search-results" aria-live="polite">
          {results.length ? results.map((result) => (
            <Link key={`${result.kind}-${result.to}`} to={result.to} className="search-result" onClick={onClose}>
              <span><small>{result.kind}</small><strong>{result.title}</strong></span><ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          )) : <p className="empty-state">No matches. Try a different phrase.</p>}
        </div>
        <p className="search-foot"><Command size={13} aria-hidden="true" /> Search across {services.length + solutions.length + articles.length} pages</p>
      </section>
    </div>
  )
}

function ThemeToggle() {
  const [dark, setDark] = useState(true)
  useEffect(() => {
    const stored = window.localStorage.getItem('mars365-theme')
    const useDark = stored !== 'light'
    setDark(useDark)
    document.documentElement.classList.toggle('dark', useDark)
  }, [])

  function toggle() {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    window.localStorage.setItem('mars365-theme', next ? 'dark' : 'light')
  }

  return <button className="icon-button theme-toggle" type="button" onClick={toggle} aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`} title={`Switch to ${dark ? 'light' : 'dark'} theme`}>{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
}

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onShortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener('keydown', onShortcut)
    return () => window.removeEventListener('keydown', onShortcut)
  }, [])

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <div className="header-inner">
        <BrandMark />
        <nav className={`primary-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {navigation.map((item) => <NavLink key={item.href} to={item.href} onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>{item.label}</NavLink>)}
        </nav>
        <div className="header-actions">
          <button className="icon-button search-trigger" type="button" onClick={() => setSearchOpen(true)} aria-label="Search"><Search size={18} /><kbd>⌘ K</kbd></button>
          <ThemeToggle />
          <Link className="button button-dark header-cta" to="/contact">Let's talk <ArrowUpRight size={15} /></Link>
          <button className="icon-button mobile-menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </div>
    </header>
    <GlobalSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
  </>
}

export function Footer() {
  const [copied, setCopied] = useState(false)
  async function copyEmail() {
    if (!company.email) return
    await navigator.clipboard.writeText(company.email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return <footer className="site-footer">
    <div className="footer-main">
      <div className="footer-brand-column"><BrandMark light /><p>We design and build intelligent solutions around the work that matters.</p>{company.email && <div className="footer-contact"><a href={`mailto:${company.email}`}>{company.email}</a><button type="button" className="copy-button" onClick={copyEmail} aria-label="Copy business email">{copied ? <Check size={15} /> : <Copy size={15} />}</button>{copied && <span className="sr-only" role="status">Email copied</span>}</div>}</div>
      <div className="footer-column"><h3>Services</h3>{services.map((service) => <Link key={service.slug} to={`/services/${service.slug}`}>{service.title}</Link>)}</div>
      <div className="footer-column"><h3>Solutions</h3>{solutions.map((solution) => <Link key={solution.slug} to={`/solutions/${solution.slug}`}>{solution.title}</Link>)}</div>
      <div className="footer-column"><h3>Industries</h3>{industries.map((industry) => <Link key={industry.slug} to={`/industries/${industry.slug}`}>{industry.name}</Link>)}</div>
      <div className="footer-column"><h3>Company</h3><Link to="/about">About</Link><Link to="/insights">Insights</Link><Link to="/contact">Contact</Link><Link to="/privacy">Privacy</Link>{company.linkedin && <a href={company.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a>}{company.office && <span className="footer-office">{company.office}</span>}</div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {company.name}</span><span>Intelligence, put to work.</span></div>
  </footer>
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return <><Header />{children}<Footer /></>
}

export function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <span className={`eyebrow ${dark ? 'eyebrow-light' : ''}`}>{children}</span>
}

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  return <Link className="service-card" to={`/services/${service.slug}`}>
    <div className="service-card-top"><span className="service-icon"><IconForService service={service} /></span><span className="service-number">0{index + 1}</span></div>
    <h3>{service.title}</h3><p>{service.summary}</p>
    <span className="card-link">Explore service <ArrowUpRight size={15} /></span>
  </Link>
}

export function SolutionCard({ slug, title, category, description }: { slug: string; title: string; category: string; description: string }) {
  return <Link className="solution-card" to={`/solutions/${slug}`}>
    <div className="solution-card-art" aria-hidden="true"><span className="art-orbit orbit-one" /><span className="art-orbit orbit-two" /><span className="art-core"><Sparkles size={21} /></span><span className="art-node node-one" /><span className="art-node node-two" /><span className="art-node node-three" /></div>
    <div className="solution-card-copy"><div className="card-meta"><span>{category}</span><ArrowUpRight size={15} /></div><h3>{title}</h3><p>{description}</p></div>
  </Link>
}

export function IndustryLink({ slug, name, number, description }: { slug: string; name: string; number: string; description?: string }) {
  return <Link className={`industry-link${description ? ' industry-card' : ''}`} to={`/industries/${slug}`}><span className="industry-number">{number}</span><strong>{name}</strong><ArrowUpRight size={17} />{description && <p>{description}</p>}</Link>
}

export function ArticleCard({ slug, title, category, publishedAt, readingMinutes, excerpt }: { slug: string; title: string; category: string; publishedAt: string; readingMinutes: number; excerpt: string }) {
  return <Link to={`/insights/${slug}`} className="article-card"><span className="article-category">{category}</span><h3>{title}</h3><p>{excerpt}</p><span className="article-meta">{new Date(`${publishedAt}T00:00:00`).toLocaleDateString('en', { month: 'short', day: 'numeric', year: 'numeric' })}<span aria-hidden="true">·</span>{readingMinutes} min read<ArrowUpRight size={14} /></span></Link>
}

export function Breadcrumbs({ current, parent }: { current: string; parent?: { label: string; to: string } }) {
  return <nav className="breadcrumbs" aria-label="Breadcrumb"><Link to="/">Home</Link><span>/</span>{parent && <><Link to={parent.to}>{parent.label}</Link><span>/</span></>}<span aria-current="page">{current}</span></nav>
}

export function PageHero({ eyebrow, title, description, label = 'Illustrative example' }: { eyebrow: string; title: string; description: string; label?: string }) {
  return <section className="page-hero"><div className="page-hero-grid"><div><SectionLabel>{eyebrow}</SectionLabel><h1>{title}</h1><p>{description}</p></div><div className="page-hero-stamp"><div className="stamp-ring"><Sparkles size={24} /><span>WORK<br />WITH<br />PURPOSE</span></div><small>{label}</small></div></div></section>
}

export function ListBlock({ title, items, icon = 'check' }: { title: string; items: string[]; icon?: 'check' | 'arrow' }) {
  return <div className="list-block"><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{icon === 'check' ? <Check size={15} aria-hidden="true" /> : <ArrowDownRight size={15} aria-hidden="true" />}{item}</li>)}</ul></div>
}

export function NotFound() {
  return <main id="main" className="not-found"><span className="eyebrow">404 / Not found</span><h1>This page took a different route.</h1><p>The link may be outdated, or the page may have moved.</p><Link className="button button-dark" to="/">Back to the homepage <ArrowRight size={15} /></Link></main>
}

export function EmptySearch() {
  return <div className="empty-state"><CircleHelp size={22} /><p>Nothing matched that combination. Try clearing a filter.</p></div>
}
