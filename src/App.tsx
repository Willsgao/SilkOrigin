import { useEffect, useState } from 'react'
import {
  ArrowRight,
  ChevronDown,
  FlaskConical,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  X,
} from 'lucide-react'
import { siteContent } from './content/site'

const navItems = [
  { label: '首页', href: '#home' },
  { label: '产品与服务', href: '#products' },
  { label: '技术研发', href: '#technology' },
  { label: '应用领域', href: '#applications' },
  { label: '关于丝源', href: '#about' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [headerSolid, setHeaderSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setHeaderSolid(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`site-header ${headerSolid ? 'is-solid' : ''}`}>
        <div className="nav-shell">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="丝源生物首页">
            <span className="brand-mark" aria-hidden="true">
              <span />
              <span />
            </span>
            <span className="brand-copy">
              <strong>{siteContent.company.shortName}</strong>
              <small>{siteContent.company.englishName}</small>
            </span>
          </a>

          <nav className={menuOpen ? 'is-open' : ''} aria-label="主导航">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a className="nav-contact" href="#contact" onClick={closeMenu}>
              联系合作 <ArrowRight size={16} />
            </a>
          </nav>

          <button
            className="menu-button"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? '关闭导航' : '打开导航'}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <img className="hero-image" src="/images/hero-silk.avif" alt="细腻的天然纤维材料" />
          <div className="hero-overlay" />
          <div className="hero-content page-shell">
            <p className="eyebrow light">{siteContent.company.tagline}</p>
            <h1>{siteContent.company.heroTitle}</h1>
            <p className="hero-description">{siteContent.company.heroDescription}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#products">
                探索产品与技术 <ArrowRight size={18} />
              </a>
              <a className="text-link light" href="#about">
                认识丝源 <ChevronDown size={18} />
              </a>
            </div>
          </div>
          <div className="hero-meta page-shell">
            <span>{siteContent.company.englishName}</span>
            <span>{siteContent.company.location}</span>
          </div>
        </section>

        <section className="stats-band" aria-label="企业概览">
          <div className="page-shell stats-grid">
            {siteContent.stats.map((stat) => (
              <div className="stat-item" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section page-shell" id="products">
          <SectionHeading
            eyebrow="Products & Services"
            title="以材料为起点，连接真实需求"
            description="围绕丝源生物基材料，我们持续探索从核心原料、复合材料到联合开发的产品路径。"
          />
          <div className="product-grid">
            {siteContent.products.map((product, index) => (
              <article className="product-card" key={product.name}>
                <div className="product-image-wrap">
                  <img src={product.image} alt={product.name} />
                  <span className="product-index">0{index + 1}</span>
                </div>
                <div className="product-copy">
                  <p>{product.englishName}</p>
                  <h3>{product.name}</h3>
                  <strong>{product.summary}</strong>
                  <span>{product.detail}</span>
                  <div className="tag-list">
                    {product.tags.map((tag) => <em key={tag}>{tag}</em>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="content-note">当前产品内容为网站结构示例，正式发布前请替换为企业确认资料。</p>
        </section>

        <section className="technology-section" id="technology">
          <div className="page-shell technology-layout">
            <div className="technology-intro">
              <p className="eyebrow light">{siteContent.technology.eyebrow}</p>
              <h2>{siteContent.technology.title}</h2>
              <p>{siteContent.technology.description}</p>
              <div className="tech-icons" aria-label="技术价值">
                <span><Leaf /> 可持续材料</span>
                <span><FlaskConical /> 研发驱动</span>
                <span><ShieldCheck /> 严谨验证</span>
              </div>
            </div>
            <div className="technology-steps">
              {siteContent.technology.steps.map((step) => (
                <article key={step.number}>
                  <span>{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section page-shell" id="applications">
          <SectionHeading
            eyebrow="Applications"
            title="面向多元场景的材料想象"
            description="以实际研发与合规进展为基础，逐步拓展丝源材料的应用边界。"
          />
          <div className="application-grid">
            {siteContent.applications.map((application) => (
              <article className="application-card" key={application.name}>
                <img src={application.image} alt={application.name} />
                <div>
                  <h3>{application.name}</h3>
                  <p>{application.description}</p>
                  <ArrowRight size={20} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="page-shell about-layout">
            <div className="about-image">
              <img src="/images/about-lab.avif" alt="天然材料细节" />
              <div className="about-badge">
                <strong>SilkOrigin</strong>
                <span>Bio-based innovation</span>
              </div>
            </div>
            <div className="about-copy">
              <p className="eyebrow">About SilkOrigin</p>
              <h2>{siteContent.about.title}</h2>
              {siteContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <div className="timeline">
                {siteContent.about.milestones.map((milestone) => (
                  <div key={milestone.year}>
                    <strong>{milestone.year}</strong>
                    <span>{milestone.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="page-shell contact-layout">
            <div>
              <p className="eyebrow light">{siteContent.contact.eyebrow}</p>
              <h2>{siteContent.contact.title}</h2>
              <p>{siteContent.contact.description}</p>
            </div>
            <div className="contact-panel">
              <p><MapPin /> <span>{siteContent.company.address}</span></p>
              <p><Phone /> <span>{siteContent.company.phone}</span></p>
              <p><Mail /> <span>{siteContent.company.email}</span></p>
              {siteContent.company.email.includes('@') && (
                <a className="button button-light" href={`mailto:${siteContent.company.email}`}>
                  发起合作咨询 <ArrowRight size={18} />
                </a>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="page-shell footer-layout">
          <div>
            <a className="brand footer-brand" href="#home">
              <span className="brand-mark" aria-hidden="true"><span /><span /></span>
              <span className="brand-copy"><strong>{siteContent.company.shortName}</strong><small>{siteContent.company.englishName}</small></span>
            </a>
            <p>{siteContent.company.name}</p>
          </div>
          <div className="footer-links">
            {navItems.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
          </div>
          <p className="copyright">© {new Date().getFullYear()} SilkOrigin Bio. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  )
}

export default App
