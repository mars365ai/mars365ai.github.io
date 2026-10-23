import { useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, CircleDot, Code2, Copy, Cpu, Cog, Eye, FileText, Network, Radar, Scan, Search, ShieldCheck, Sparkles, Users, Wrench } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { articles, categoryOptions, company, industries, services, solutions } from './data'
import { ArticleCard, ArrowLink, Breadcrumbs, EmptySearch, IndustryLink, ListBlock, PageHero, SectionLabel, ServiceCard, SolutionCard } from './components'

const steps = [
  { number: '01', title: 'Discover', description: 'Understand the work, the people, and the friction worth addressing.' },
  { number: '02', title: 'Strategize', description: 'Choose opportunities where value, readiness, and risk meet.' },
  { number: '03', title: 'Architect', description: 'Design clear boundaries for data, systems, people, and AI.' },
  { number: '04', title: 'Build', description: 'Create a useful experience and test it against real scenarios.' },
  { number: '05', title: 'Optimize', description: 'Learn from usage, measure behavior, and improve deliberately.' },
]

function CTA({ title = 'Your next competitive advantage starts with AI.', copy = 'Let’s explore where intelligent technology can make a meaningful difference.' }: { title?: string; copy?: string }) {
  return <section className="closing-cta"><div className="closing-cta-mark" aria-hidden="true"><Sparkles size={20} /></div><SectionLabel dark>A thoughtful next step</SectionLabel><h2>{title}</h2><p>{copy}</p><Link className="button button-lime" to="/contact">Explore a conversation <ArrowUpRight size={16} /></Link></section>
}

function HomePage() {
  return <main id="main">
    <section className="hero-shell hero-home">
      <div className="hero-noise" aria-hidden="true" />
      <div className="hero-copy">
        <span className="hero-overline"><i /> AI SYSTEMS / HUMAN-CENTERED BY DESIGN</span>
        <h1>Turning AI potential into<br /><em>real business impact.</em></h1>
        <p>We design and build intelligent AI solutions that help organizations work smarter, automate complexity, and unlock new opportunities.</p>
        <div className="hero-actions"><Link className="button button-lime" to="/solutions">Explore solutions <ArrowUpRight size={16} /></Link><Link className="hero-text-link" to="/contact">Start a conversation <ArrowRight size={16} /></Link></div>
      </div>
      <div className="hero-console" role="img" aria-label="Illustrative AI workflow from trusted context through human review">
        <div className="console-header"><span><i /> SYSTEM ARCHITECTURE / CONCEPT 01</span><span>ILLUSTRATIVE / NOT LIVE TELEMETRY</span></div>
        <div className="console-canvas">
          <div className="console-axis console-axis-horizontal" /><div className="console-axis console-axis-vertical" />
          <div className="console-node console-source"><small>01 / CONTEXT</small><strong>Trusted sources</strong><span>Permissions · provenance</span></div>
          <div className="console-node console-node-active"><small>02 / REASONING</small><strong>Task-specific AI</strong><span>Bounded · evaluated</span></div>
          <div className="console-node console-node-review"><small>03 / OVERSIGHT</small><strong>Human review</strong><span>Escalation · control</span></div>
          <div className="console-connector"><i /><i /><i /></div>
          <div className="console-connector console-connector-return"><i /><i /><i /></div>
          <span className="console-tag console-tag-left">SOURCE EVIDENCE</span><span className="console-tag console-tag-right">CONTROLLED ACTIONS</span>
        </div>
        <div className="console-footer"><span><CircleDot size={12} /> EXAMPLE SYSTEM FLOW / FOR DISCUSSION</span><span>DATA BOUNDARIES · EVALUATION · OVERSIGHT</span></div>
      </div>
      <a className="hero-bottom" href="#why-ai"><span>Explore the architecture</span><ArrowDown size={14} /></a>
    </section>

    <section className="architecture-section" id="why-ai">
      <div className="section architecture-heading-row"><div><SectionLabel>ARCHITECTURE / PRINCIPLES</SectionLabel><h2>Designing useful AI<br /><span>for real systems.</span></h2></div><p className="section-intro">Start with context, make boundaries visible, keep people in control, and evaluate against the work a system is meant to support.</p></div>
      <div className="section architecture-layout">
      <div className="architecture-grid">
        {[
          ['01', 'Grounded in sources', 'Connect answers to approved information and make evidence easy to inspect.'],
          ['02', 'Bounded by design', 'Define data access, permissions, and action scope before expanding capability.'],
          ['03', 'People stay accountable', 'Route uncertainty and consequential decisions to the people responsible.'],
          ['04', 'Evaluated in context', 'Test against representative workflows, edge cases, and changing needs.'],
        ].map(([number, title, copy]) => <article className="architecture-card" key={number}><span>{number} / DESIGN PRINCIPLE</span><h3>{title}</h3><p>{copy}</p></article>)}
      </div>
      <aside className="architecture-index"><span className="mono-label">SITE INDEX / EXAMPLES</span><div><strong>{String(services.length).padStart(2, '0')}</strong><span>Intended service areas</span></div><div><strong>{String(solutions.length).padStart(2, '0')}</strong><span>Illustrative solution concepts</span></div><div><strong>{String(industries.length).padStart(2, '0')}</strong><span>Industry contexts</span></div><p>Catalog counts describe this website, not client deployments or measured business outcomes.</p></aside>
      </div>
    </section>

    <section className="section services-section">
      <div className="section-heading-row"><div><SectionLabel>PRIMARY SERVICE AREAS</SectionLabel><h2>From first question<br />to <span>lasting capability.</span></h2></div><div className="section-aside"><p>Practical AI work spans strategy, engineering, and the changes that make new tools useful.</p><ArrowLink to="/services">All services</ArrowLink></div></div>
      <div className="service-grid">{services.map((service, index) => <ServiceCard key={service.slug} service={service} index={index} />)}</div>
    </section>

    <section className="section solutions-section">
      <div className="section-heading-row"><div><SectionLabel>FEATURED SOLUTIONS / ILLUSTRATIVE</SectionLabel><h2>See possibility<br /><span>in the everyday.</span></h2></div><div className="section-aside"><p>Examples of how AI could support real work. These are concepts, not customer case studies or shipped products.</p><ArrowLink to="/solutions">Explore the library</ArrowLink></div></div>
      <div className="solution-grid">{solutions.map((solution) => <SolutionCard key={solution.slug} slug={solution.slug} title={solution.title} category={solution.category} description={solution.challenge} />)}</div>
    </section>

    <section className="section industries-section">
      <div className="section-heading-row"><div><SectionLabel>INDUSTRY CONTEXTS</SectionLabel><h2>Different industries.<br /><span>Distinct realities.</span></h2></div><div className="section-aside"><p>AI opportunities make sense in context. Explore the challenges and use cases that may matter in your sector.</p><ArrowLink to="/industries">All industries</ArrowLink></div></div>
      <div className="industry-grid industry-card-grid">{industries.map((industry, index) => <IndustryLink key={industry.slug} slug={industry.slug} name={industry.name} number={String(index + 1).padStart(2, '0')} description={industry.description} />)}</div>
    </section>

    <section className="impact-section"><div className="section"><div className="section-heading-row"><div><SectionLabel>ENGINEERED FOR STABILITY</SectionLabel><h2>Built around people.<br /><span>Measured against impact.</span></h2></div><p className="section-intro">A responsible approach balances technical rigor with a clear view of the people, processes, and outcomes involved.</p></div><div className="impact-grid"><article><span>01 / SYSTEM DESIGN</span><h3>Security-conscious by default</h3><p>Make permissions, data boundaries, and operational responsibilities explicit as a solution is designed.</p></article><article><span>02 / HUMAN OVERSIGHT</span><h3>People remain in control</h3><p>Keep review, escalation, and accountability visible wherever uncertainty or consequence matters.</p></article><article><span>03 / BUSINESS VALUE</span><h3>Useful beyond the demo</h3><p>Define how the work should improve and evaluate the solution against that real context.</p></article></div></div></section>

    <section className="process-section"><div className="section method-shell"><div className="method-heading"><div><SectionLabel dark>THE 5-STEP EXECUTION METHOD</SectionLabel><h2>Make progress<br />you can <em>explain.</em></h2></div><p>Move from a real business need to a considered implementation, one clear decision at a time.</p></div><div className="method-grid">{steps.map((step) => <article className="method-step" key={step.number}><span>{step.number} / PHASE</span><CircleDot size={18} aria-hidden="true" /><h3>{step.title}</h3><p>{step.description}</p></article>)}</div><ArrowLink to="/about" light>Explore our approach</ArrowLink></div></section>

    <section className="section ecosystem-section"><div className="section-heading-row"><div><SectionLabel>SYSTEM LAYERS / ILLUSTRATIVE</SectionLabel><h2>Technology shaped<br /><span>around the work.</span></h2></div><p className="section-intro">These are common areas to consider when designing an AI system, not a list of confirmed platforms or company credentials.</p></div><div className="ecosystem-layers">{['Models & inference', 'Knowledge retrieval', 'Workflow orchestration', 'Identity & access', 'Evaluation methods', 'Human review', 'Data boundaries', 'Application interfaces', 'Monitoring signals', 'Cost controls', 'Security practices', 'Operational ownership'].map((layer, index) => <div className="ecosystem-layer" key={layer}><span>{String(index + 1).padStart(2, '0')}</span><strong>{layer}</strong><ArrowUpRight size={14} aria-hidden="true" /></div>)}</div>{company.confirmedTechnologies.length > 0 && <div className="technology-list">{company.confirmedTechnologies.map((technology) => <span key={technology}>{technology}</span>)}</div>}<p className="ecosystem-disclaimer">Specific technologies appear only when confirmed in the company configuration.</p></section>

    <section className="section insights-section"><div className="section-heading-row"><div><SectionLabel>Field notes</SectionLabel><h2>Ideas for the<br /><span>work ahead.</span></h2></div><div className="section-aside"><p>Clear thinking on AI adoption, responsible automation, and building things that hold up beyond a demo.</p><ArrowLink to="/insights">All insights</ArrowLink></div></div><div className="article-grid">{articles.map((article) => <ArticleCard key={article.slug} {...article} />)}</div></section>
    <CTA />
  </main>
}

function ServicesPage() {
  return <main id="main"><PageHero eyebrow="Services / Capabilities" title="Build the right thing, for the right reason." description="From early opportunity discovery to dependable AI engineering, bring the business question and technical craft into the same conversation." label={`${services.length} capability areas`} /><section className="section page-content"><div className="service-grid">{services.map((service, index) => <ServiceCard key={service.slug} service={service} index={index} />)}</div><div className="editorial-note"><Sparkles size={18} /><p>These are intended service areas. Specific delivery experience, partnerships, and certifications are not asserted here.</p></div></section><CTA title="Start with the question behind the request." /></main>
}

function RoboticsPage() {
  const learningPath = [
    { number: '01', icon: Cog, title: 'Imagine', copy: 'Frame a challenge, sketch a mechanism, and think through how movement might work.', deliverable: 'Concept sketch' },
    { number: '02', icon: Wrench, title: 'Build', copy: 'Explore structures, mechanisms, and ways parts can fit together.', deliverable: 'Prototype assembly' },
    { number: '03', icon: Code2, title: 'Code', copy: 'Use programming and control ideas to help a robot sense and respond.', deliverable: 'Behavior program' },
    { number: '04', icon: ShieldCheck, title: 'Deploy', copy: 'Test the idea in a suitable setting, notice what happens, and improve it.', deliverable: 'Test and reflection' },
  ]
  const tracks = [
    ['FOUNDATION', 'Robotics and mechatronics', 'Movement, mechanisms, sensors, and the building blocks of a robot.', 'Mechanical concepts / introductory electronics'],
    ['INTERMEDIATE', 'Embedded systems and control', 'Inputs, outputs, simple control loops, and how software connects to hardware.', 'Microcontrollers / motor control concepts'],
    ['AUTONOMY', 'Mobile robots and navigation', 'How mobile robots represent space, sense obstacles, and plan movement.', 'Mapping concepts / route planning'],
    ['PHYSICAL AI', 'Vision and manipulation', 'An introduction to machine perception, robot arms, and responsible automation.', 'Computer vision concepts / kinematics'],
    ['INTEGRATION', 'Multi-system projects', 'Bring mechanical, electronic, and software ideas together in a guided project.', 'System integration / testing methods'],
  ]
  const projects = [
    { category: 'KINEMATIC MANIPULATION', icon: Wrench, title: '4-DOF Precision Articulated Robotic Arm', copy: 'Explore articulated mechanisms, mechanical grippers, ultrasonic sensors, and how gear ratios and control programs shape a robot\u2019s movement.', detail: 'FOCUS: JOINTS + CONTROL', feature: 'SERVO ACTUATION', position: 'top' },
    { category: 'AUTONOMOUS NAVIGATION', icon: Radar, title: 'Modular Tracked Crawler & Kinematic Grabber', copy: 'Investigate a continuous-track platform with a motorized arm, a claw end-effector, and sensor-guided navigation through a test course.', detail: 'DRIVE: DUAL TRACKED TREADS', feature: 'SERVO-LINKED CLAW', position: 'bottom' },
    { category: 'EDGE PHYSICAL AI', icon: Eye, title: 'Multi-Legged Hexapod & Precision Gear Rigs', copy: 'Experiment with mechanical linkages, synchronized gear trains, multi-legged movement, and ultrasonic sensing to understand how robots perceive their surroundings.', detail: 'RIG: MULTI-LEGGED GEAR TRAIN', feature: 'ULTRASONIC VISION', position: 'center' },
  ]
  const audiences = [
    ['YOUNG LEARNERS & FAMILIES', 'Explore a learner’s interests, experience, and questions about robotics.', 'Ask about learning options'],
    ['SCHOOLS & EDUCATORS', 'Discuss how robotics topics might support a classroom or enrichment goal.', 'Discuss an education inquiry'],
    ['ORGANIZATIONS', 'Talk through a youth learning initiative or a potential training partnership.', 'Start a program conversation'],
  ]

  return <main id="main" className="robotics-page">
    <section className="robotics-hero">
      <div className="section robotics-hero-grid">
        <div className="robotics-hero-copy">
          <span className="robotics-eyebrow"><i /> PHYSICAL AI &amp; ROBOTICS / LEARNING PATHWAYS</span>
          <h1>Bring ideas to life<br /><em>in the physical world.</em></h1>
          <p>Mars365 offers robotics training for young people, connecting mechanical design, electronics, programming, and creative problem-solving through hands-on learning.</p>
          <div className="robotics-hero-tags"><span><Cog size={15} /> MECHANICS</span><span><Cpu size={15} /> SENSORS &amp; CIRCUITS</span><span><Code2 size={15} /> PROGRAMMING</span><span><Wrench size={15} /> TEST &amp; ITERATE</span></div>
          <div className="robotics-hero-actions"><a className="button button-lime" href="#inquire-section">Ask about robotics training <Users size={20} /></a><a className="robotics-secondary-link" href="#curriculum-section"><FileText size={20} /> Explore learning tracks</a></div>
          <span className="robotics-notice">Learning topics shown are illustrative. Program dates, age eligibility, and delivery details are available when confirmed.</span>
        </div>
      </div>
      <figure className="section robotics-lab" aria-labelledby="robotics-lab-caption">
        <figcaption id="robotics-lab-caption"><i /> ILLUSTRATIVE LAB WORKBENCH / SAMPLE TELEMETRY</figcaption>
        <div className="robotics-lab-grid">
          <div className="robotics-lab-visuals">
            <div className="robotics-camera">
              <img src={`${import.meta.env.BASE_URL}images/robotics-workbench.png`} alt="Illustrated robotics workbench with an articulated arm, circuits, and lab monitors" fetchPriority="high" />
              <div className="robotics-camera-top"><span>CAM_01 [RGB-D 1080P // 60.2 FPS]</span><span>YOLOv8x-POSE <span>CONF: 99.4%</span> <span>LATENCY: 8.4ms</span></span></div>
              <div className="robotics-camera-target"><div><span>OBJ: TARGET_BEARING_01</span><span>X: 244.18 Y: -112.04 Z: 89.20</span></div><Scan size={32} aria-hidden="true" /></div>
              <div className="robotics-camera-bottom"><div><small>END-EFFECTOR (X,Y,Z)</small><strong>[+312.4mm, -145.2mm, +210.8mm]</strong></div><div><small>GRIPPER TORQUE</small><strong>1.82 Nm (92%)</strong></div><div><small>INVERSE KINEMATICS</small><span>CONVERGED (0.3ms)</span></div></div>
            </div>
            <div className="robotics-lidar"><div className="robotics-lidar-copy"><span className="robotics-lidar-icon"><Radar size={24} aria-hidden="true" /></span><div><h3>360° LiDAR Point Cloud Stream</h3><p>RPLIDAR S2 // 32,000 pts/sec // SLAM Navigation Mesh</p></div></div><div className="robotics-sparkline" aria-hidden="true">{[16, 28, 20, 32, 24, 32, 20, 28].map((height, index) => <i key={index} style={{ height }} />)}</div><div className="robotics-lidar-metrics"><span>32K PTS</span><span>ΔT: 2.1MS</span></div></div>
          </div>
          <aside className="robotics-diagnostics" aria-label="Illustrative hardware diagnostics, not live readings">
            <div className="robotics-hardware"><div className="robotics-diagnostic-heading"><span>HARDWARE NODES</span><span>SAMPLE READINGS</span></div><dl><div><dt><Cpu size={18} aria-hidden="true" /> STM32F407 Cortex-M4</dt><dd>168 MHz / 38°C</dd></div><div><dt><Code2 size={18} aria-hidden="true" /> NVIDIA Jetson Orin 64GB</dt><dd>275 TOPS / 44°C</dd></div><div><dt><Network size={18} aria-hidden="true" /> CAN 2.0B Differential Bus</dt><dd>1.0 Mbps // 0 Err</dd></div></dl></div>
            <div className="robotics-actuation"><div className="robotics-diagnostic-heading">6-DOF ACTUATION PWM</div>{[
              ['J1 BASE ROTOR (MG996R)', '1485 µs (74.2%)', 74.2],
              ['J2 SHOULDER ACTUATOR', '1820 µs (91.0%)', 91],
              ['J3 ELBOW SERVO KINEMATICS', '1120 µs (56.0%)', 56],
            ].map(([label, value, percentage]) => <div className="robotics-actuator" key={label}><div><span>{label}</span><span>{value}</span></div><div className="robotics-actuator-bar" aria-hidden="true"><i style={{ width: `${percentage}%` }} /></div></div>)}</div>
            <div className="robotics-middleware"><div><small>EXAMPLE ROS2 MIDDLEWARE GRAPH</small><strong>18 Topics · 4 Actions</strong></div><span>FastDDS RTPS</span></div>
          </aside>
        </div>
      </figure>
    </section>

    <section className="section robotics-learning" id="learning-path">
      <div className="section-heading-row"><div><SectionLabel>ENGINEERING PRINCIPLES / LEARN BY MAKING</SectionLabel><h2>The physical engineering<br /><span>learning cycle.</span></h2></div><p className="section-intro">Robotics brings design, making, code, and testing together. This example four-step cycle is a starting point; program content and pace should be tailored to the learners.</p></div>
      <div className="robotics-phase-grid">{learningPath.map(({ number, icon: Icon, title, copy, deliverable }) => <article className="robotics-phase" key={number}><div><div className="robotics-phase-top"><span>PHASE {number}</span><Icon size={19} aria-hidden="true" /></div><h3>{title}</h3><p>{copy}</p></div><div className="robotics-phase-output"><span>EXAMPLE OUTPUT</span><strong>{deliverable}</strong></div></article>)}</div>
    </section>

    <section className="robotics-topics-section" id="curriculum-section"><div className="section"><div className="robotics-section-intro"><SectionLabel>PROGRESSIVE ROADMAP / SAMPLE TOPICS</SectionLabel><h2>Structured robotics<br /><span>and physical AI tracks.</span></h2><p>These example learning tracks move from foundational concepts toward integrated projects. They are not a fixed syllabus, schedule, or credential.</p></div><div className="robotics-track-list">{tracks.map(([level, title, copy, focus], index) => <article className="robotics-track" key={title}><span className="robotics-track-number">0{index + 1}</span><div className="robotics-track-main"><div className="robotics-track-meta"><span>{level}</span><small>EXAMPLE TRACK</small></div><h3>{title}</h3><p>{copy}</p></div><div className="robotics-track-focus"><span>TOPIC EXAMPLES</span><p>{focus}</p></div><Link to="/contact" className="robotics-track-link">Ask about this topic <ArrowUpRight size={14} /></Link></article>)}</div></div></section>

    <section className="section robotics-projects"><div className="section-heading-row"><div><SectionLabel>PHYSICAL CAPSTONE PRODUCTION</SectionLabel><h2>What Fellows Build &amp; Deploy</h2></div><p className="section-intro">Illustrative projects for young innovators to explore, not completed student work or a guarantee of specific equipment.</p></div><div className="robotics-project-grid">{projects.map(({ category, icon: Icon, title, copy, detail, feature, position }, index) => <article className="robotics-project" key={title}><div className="robotics-project-image"><img src={`${import.meta.env.BASE_URL}images/robotics-capstones.png`} alt="Illustrative modular robotics builds with grippers, tracked wheels, gears, and ultrasonic sensors" style={{ objectPosition: position }} loading="lazy" /><span>CAPSTONE 0{index + 1}</span></div><div className="robotics-project-copy"><span><Icon size={16} aria-hidden="true" />{category}</span><h3>{title}</h3><p>{copy}</p><div className="robotics-project-meta"><span>{detail}</span><span>{feature}</span></div></div></article>)}</div></section>

    <section className="robotics-safety"><div className="section robotics-safety-grid"><div><SectionLabel dark>MENTORSHIP / LEARNING ENVIRONMENT</SectionLabel><h2>Guided practice.<br /><em>Thoughtful progression.</em></h2><p>A strong youth robotics experience makes room for questions, supervised experimentation, reflection, and different learning paces. Program specifics should be clear before enrollment.</p><div className="robotics-support-list"><div><ShieldCheck size={17} /><span>Age-appropriate activities and safety arrangements</span></div><div><CircleDot size={17} /><span>Guidance through testing, debugging, and iteration</span></div><div><ArrowUpRight size={17} /><span>Clear expectations for learners and families</span></div></div></div><div className="robotics-safety-note"><span className="robotics-note-label">PROGRAM DETAILS / TO CONFIRM</span><h3>Every learning environment is different.</h3><p>Ask about age range, schedule, accessibility, supervision, location, equipment, and any prerequisites for the specific training opportunity.</p><Link to="/contact">Discuss program details <ArrowUpRight size={15} /></Link></div></div></section>

    <section className="robotics-inquiry-section" id="inquire-section"><div className="section"><div className="robotics-section-intro"><SectionLabel>PROGRAM &amp; PARTNERSHIP INQUIRIES</SectionLabel><h2>Find a useful place<br /><span>to start.</span></h2><p>Share who the learning is for and what they hope to explore. There is no application form on this site.</p></div><div className="robotics-audience-grid">{audiences.map(([label, title, copy]) => <article className="robotics-audience-card" key={label}><span>{label}</span><h3>{title}</h3><p>{copy}</p><Link to="/contact">Start a conversation <ArrowUpRight size={14} /></Link></article>)}</div></div></section>
  </main>
}

function ServiceDetailPage() {
  const { slug = '' } = useParams()
  const service = services.find((item) => item.slug === slug)
  if (!service) return <NotFoundInline />
  const related = solutions.slice(0, 2)
  return <main id="main"><div className="section breadcrumb-wrap"><Breadcrumbs current={service.title} parent={{ label: 'Services', to: '/services' }} /></div><PageHero eyebrow={service.eyebrow} title={service.title} description={service.summary} label="Service overview" /><section className="section detail-intro"><div><SectionLabel>The business value</SectionLabel><h2>{service.businessValue}</h2></div><p>{service.approach}</p></section><section className="section challenge-approach"><article><span className="detail-number">01 / The challenge</span><h2>Start with what makes the work hard.</h2><p>{service.challenge}</p></article><article className="approach-panel"><span className="detail-number">02 / A considered approach</span><h2>Make the path visible.</h2><p>{service.approach}</p></article></section><section className="section detail-lists"><ListBlock title="Areas of focus" items={service.capabilities} /><ListBlock title="Potential benefits" items={service.benefits} /></section><section className="section related-section"><div className="section-heading-row"><div><SectionLabel>Related examples</SectionLabel><h2>Where this can<br /><span>show up.</span></h2></div><p className="section-intro">Illustrative solution concepts only; not claims of prior customer delivery.</p></div><div className="solution-grid">{related.map((solution) => <SolutionCard key={solution.slug} slug={solution.slug} title={solution.title} category={solution.category} description={solution.challenge} />)}</div></section><CTA title="Have a specific challenge in mind?" /></main>
}

function SolutionsPage() {
  const [category, setCategory] = useState('All categories')
  const [industry, setIndustry] = useState('All industries')
  const [query, setQuery] = useState('')
  const filtered = solutions.filter((solution) => {
    const matchesCategory = category === 'All categories' || solution.category === category
    const matchesIndustry = industry === 'All industries' || solution.industries.includes(industry)
    const matchesQuery = !query.trim() || `${solution.title} ${solution.challenge} ${solution.approach} ${solution.category}`.toLowerCase().includes(query.trim().toLowerCase())
    return matchesCategory && matchesIndustry && matchesQuery
  })
  return <main id="main"><PageHero eyebrow="Solutions / Illustrative use cases" title="AI possibilities, grounded in real work." description="Explore illustrative ways intelligent systems could support everyday business challenges. These concepts describe possibilities, not deployed products or customer results." label="Use-case library" /><section className="section page-content"><div className="filter-toolbar"><label className="filter-search"><Search size={17} /><span className="sr-only">Search solutions</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find a use case" /></label><label className="select-wrap"><span>Industry</span><select value={industry} onChange={(event) => setIndustry(event.target.value)}><option>All industries</option>{industries.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}</select><ChevronDown size={15} /></label></div><div className="filter-tabs" aria-label="Filter by category">{['All categories', ...categoryOptions].map((option) => <button type="button" className={category === option ? 'filter-tab selected' : 'filter-tab'} key={option} onClick={() => setCategory(option)} aria-pressed={category === option}>{option}</button>)}</div><p className="result-count">{filtered.length} illustrative {filtered.length === 1 ? 'use case' : 'use cases'}</p>{filtered.length ? <div className="solution-grid">{filtered.map((solution) => <SolutionCard key={solution.slug} slug={solution.slug} title={solution.title} category={solution.category} description={solution.challenge} />)}</div> : <EmptySearch />}</section><CTA title="Possibility becomes practical in context." /></main>
}

function SolutionDetailPage() {
  const { slug = '' } = useParams()
  const solution = solutions.find((item) => item.slug === slug)
  if (!solution) return <NotFoundInline />
  const relevantIndustries = industries.filter((industry) => solution.industries.includes(industry.slug))
  return <main id="main"><div className="section breadcrumb-wrap"><Breadcrumbs current={solution.title} parent={{ label: 'Solutions', to: '/solutions' }} /></div><PageHero eyebrow={`Illustrative use case / ${solution.category}`} title={solution.title} description={solution.challenge} label="Demonstration concept" /><section className="section editorial-note prominent-note"><Sparkles size={19} /><p>This is a conceptual example to show how AI might support a business need. It is not a customer case study, product claim, or guaranteed result.</p></section><section className="section detail-intro"><div><SectionLabel>Possible approach</SectionLabel><h2>Designed around the problem, not the novelty.</h2></div><p>{solution.approach}</p></section><section className="section detail-lists"><ListBlock title="Illustrative capabilities" items={solution.capabilities} /><ListBlock title="Potential outcomes" items={solution.outcomes} /></section><section className="section related-section"><div className="section-heading-row"><div><SectionLabel>Relevant industries</SectionLabel><h2>Context changes<br /><span>the solution.</span></h2></div><p className="section-intro">Industry examples identify areas to explore, not proven deployments.</p></div><div className="industry-grid">{relevantIndustries.map((industry, index) => <IndustryLink key={industry.slug} slug={industry.slug} name={industry.name} number={String(index + 1).padStart(2, '0')} />)}</div></section><CTA /></main>
}

function IndustriesPage() {
  return <main id="main"><PageHero eyebrow="Industries / Context" title="Good AI starts with the realities of your industry." description="Explore common challenges and possible opportunities by sector. Every organization is different; these pages are starting points for a more specific conversation." label="Eight sectors" /><section className="section page-content"><div className="industry-grid industry-grid-large">{industries.map((industry, index) => <IndustryLink key={industry.slug} slug={industry.slug} name={industry.name} number={String(index + 1).padStart(2, '0')} />)}</div></section><CTA title="Your context is the place to begin." /></main>
}

function IndustryDetailPage() {
  const { slug = '' } = useParams()
  const industry = industries.find((item) => item.slug === slug)
  if (!industry) return <NotFoundInline />
  const related = solutions.filter((solution) => industry.solutions.includes(solution.slug))
  return <main id="main"><div className="section breadcrumb-wrap"><Breadcrumbs current={industry.name} parent={{ label: 'Industries', to: '/industries' }} /></div><PageHero eyebrow="Industry / Opportunity areas" title={industry.name} description={industry.description} label="Context, not a claim" /><section className="section challenge-approach"><article><span className="detail-number">01 / Common challenges</span><h2>Where teams may feel friction.</h2><ListBlock title="Areas to explore" items={industry.challenges} icon="arrow" /></article><article className="approach-panel"><span className="detail-number">02 / AI opportunities</span><h2>Possibilities worth investigating.</h2><ListBlock title="Potential directions" items={industry.opportunities} icon="arrow" /></article></section><section className="section related-section"><div className="section-heading-row"><div><SectionLabel>Illustrative use cases</SectionLabel><h2>Ideas to explore<br /><span>in context.</span></h2></div><p className="section-intro">These are demonstration concepts, not client deployments.</p></div><div className="solution-grid">{related.map((solution) => <SolutionCard key={solution.slug} slug={solution.slug} title={solution.title} category={solution.category} description={solution.challenge} />)}</div></section><CTA /></main>
}

function AboutPage() {
  return <main id="main"><PageHero eyebrow="About / A way of thinking" title="Business first. People always. Engineering throughout." description="Mars365 AI is a configurable public identity for a team focused on practical AI strategy, thoughtful engineering, and useful adoption." label="Our principles" /><section className="section about-statement"><div><SectionLabel>Our mission</SectionLabel><h2>Make intelligent technology useful for the people doing the work.</h2></div><div><p>We believe successful AI begins with a business need, is shaped around human judgment, and earns trust through clear boundaries and careful engineering.</p><p>This site describes intended capabilities and illustrative examples. It does not assert company history, certifications, customer deployments, or measured results that have not been confirmed.</p></div></section><section className="people-section about-people"><div className="people-image-wrap"><img src="/images/teams-at-work.jpg" alt="Colleagues working together in a shared office" loading="lazy" /><span className="image-index">PEOPLE / PRACTICE / PROGRESS</span></div><div className="people-copy"><SectionLabel>Our AI philosophy</SectionLabel><h2>Useful systems make room for <em>human judgment.</em></h2><p>AI should help people find information, reduce repetitive coordination, or explore a decision with greater clarity. It should not hide uncertainty or blur accountability.</p><p>That belief shapes how opportunities are chosen, how systems are built, and how a solution is evaluated after it meets real work.</p></div></section><section className="section values-section"><div className="section-heading-row"><div><SectionLabel>What guides the work</SectionLabel><h2>Principles over<br /><span>promises.</span></h2></div><p className="section-intro">A grounded approach to AI is less about spectacle and more about what people can understand, trust, and improve.</p></div><div className="values-grid">{[['Business-first', 'Connect technical choices to a clearly described need and meaningful outcome.'], ['Human-centered', 'Give people context, control, and a clear way to step in when judgment matters.'], ['Security-conscious', 'Make data, access, and operational boundaries visible from the beginning.'], ['Built to evolve', 'Design for evaluation, learning, and change instead of a one-time demonstration.']].map(([title, text], index) => <article className="value-item" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section><section className="section approach-section"><SectionLabel>Our approach</SectionLabel><h2>Five steps from question<br />to <em>useful change.</em></h2><div className="approach-list">{steps.map((step) => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div></section><CTA title="Let’s start with the work that matters." /></main>
}

function InsightsPage() {
  const [category, setCategory] = useState('All topics')
  const [query, setQuery] = useState('')
  const categories = [...new Set(articles.map((article) => article.category))]
  const filtered = articles.filter((article) => (category === 'All topics' || article.category === category) && (!query.trim() || `${article.title} ${article.excerpt} ${article.category} ${article.paragraphs.join(' ')}`.toLowerCase().includes(query.trim().toLowerCase())))
  const featured = articles[0]
  return <main id="main"><PageHero eyebrow="Insights / Field notes" title="Clear thinking for the work ahead." description="Perspectives on choosing AI opportunities, designing responsible systems, and making change practical." label="Editorial / English" /><section className="section featured-article"><div className="featured-visual" aria-hidden="true"><span className="featured-orbit" /><span className="featured-dot" /><span className="featured-word">FIELD<br />NOTES</span></div><div><span className="article-category">Featured / {featured.category}</span><h2>{featured.title}</h2><p>{featured.excerpt}</p><ArrowLink to={`/insights/${featured.slug}`}>Read the insight</ArrowLink></div></section><section className="section page-content"><div className="filter-toolbar"><label className="filter-search"><Search size={17} /><span className="sr-only">Search insights</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by title or keyword" /></label><label className="select-wrap"><span>Topic</span><select value={category} onChange={(event) => setCategory(event.target.value)}><option>All topics</option>{categories.map((item) => <option key={item}>{item}</option>)}</select><ChevronDown size={15} /></label></div><p className="result-count">{filtered.length} {filtered.length === 1 ? 'article' : 'articles'}</p>{filtered.length ? <div className="article-grid">{filtered.map((article) => <ArticleCard key={article.slug} {...article} />)}</div> : <EmptySearch />}</section><CTA /></main>
}

function ArticlePage() {
  const { slug = '' } = useParams()
  const article = articles.find((item) => item.slug === slug)
  if (!article) return <NotFoundInline />
  return <main id="main"><div className="section breadcrumb-wrap"><Breadcrumbs current={article.title} parent={{ label: 'Insights', to: '/insights' }} /></div><article className="article-page"><header className="article-header"><span className="article-category">{article.category} / Illustrative editorial</span><h1>{article.title}</h1><p className="article-deck">{article.excerpt}</p><div className="article-meta article-meta-large">{new Date(`${article.publishedAt}T00:00:00`).toLocaleDateString('en', { month: 'long', day: 'numeric', year: 'numeric' })}<span>·</span>{article.readingMinutes} min read</div></header><div className="article-body">{article.paragraphs.map((paragraph, index) => <p key={paragraph} className={index === 0 ? 'lead-paragraph' : ''}>{paragraph}</p>)}<aside className="article-disclaimer"><Sparkles size={17} /><p>These insights are general editorial content, not advice for a specific business or regulatory environment.</p></aside><ArrowLink to="/insights">More insights</ArrowLink></div></article><section className="section related-section"><div className="section-heading-row"><div><SectionLabel>Keep exploring</SectionLabel><h2>More ideas for<br /><span>the work ahead.</span></h2></div></div><div className="article-grid">{articles.filter((item) => item.slug !== article.slug).slice(0, 2).map((item) => <ArticleCard key={item.slug} {...item} />)}</div></section><CTA /></main>
}

function ContactPage() {
  const [copied, setCopied] = useState(false)
  async function copyEmail() {
    if (!company.email) return
    await navigator.clipboard.writeText(company.email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }
  return (
    <main id="main" className="contact-page">
      <section className="contact-focus">
        <div className="contact-focus-inner">
          <span className="contact-kicker"><i /> GET IN TOUCH</span>
          <h1>Start with the work<br />you want to change.</h1>
          <p className="contact-focus-copy">Bring the challenge, the people it affects, and what better could look like. We can start with a thoughtful conversation.</p>
          <div className="contact-anchor-card">
            <div className="contact-anchor-copy">
              <span className="contact-mono">BUSINESS INQUIRY</span>
              {company.email ? <a href={`mailto:${company.email}`} className="contact-anchor-email">{company.email}<ArrowUpRight size={17} /></a> : <p className="configuration-note">A business email has not been configured yet. No contact details are being inferred or invented.</p>}
              <p className="contact-anchor-note">Share the workflow, teams involved, and constraints that matter. Avoid sending sensitive information before agreeing on an appropriate channel.</p>
            </div>
            {company.email && <button className="contact-copy-button" type="button" onClick={copyEmail}>{copied ? <Check size={16} /> : <Copy size={16} />}<span>{copied ? 'Copied' : 'Copy email address'}</span></button>}
          </div>
          {copied && <span role="status" className="copy-status contact-copy-status">Email copied to clipboard</span>}
        </div>
      </section>
      <section className="section contact-playbook">
        <div className="contact-section-intro">
          <SectionLabel>THE FIRST CONVERSATION</SectionLabel>
          <h2>Clear context.<br /><span>A practical next step.</span></h2>
          <p>No pitch deck required. A specific business challenge is enough to begin exploring where AI may help.</p>
        </div>
        <div className="contact-step-grid">
          <article className="contact-step"><span>PHASE 01</span><h3>Describe the work</h3><p>What is difficult today, who does it affect, and where does the process slow down?</p></article>
          <article className="contact-step"><span>PHASE 02</span><h3>Explore the fit</h3><p>Consider whether AI is appropriate, what information it would need, and where people stay in control.</p></article>
          <article className="contact-step"><span>PHASE 03</span><h3>Choose a next step</h3><p>Identify a useful way to learn more, with clear assumptions and no promised outcomes.</p></article>
        </div>
      </section>
      <section className="contact-principles">
        <div className="section contact-principles-inner">
          <div><span className="contact-mono">A USEFUL STARTING POINT</span><h2>Bring the problem,<br />not private data.</h2><p>This static site has no contact form. If an email is configured, the link opens your mail application; details are not submitted to this website.</p></div>
          <div className="contact-principles-aside"><Sparkles size={21} /><p>Keep the first exchange focused on the workflow, goals, and constraints. Share sensitive records only after appropriate handling arrangements are agreed.</p>{company.linkedin && <a href={company.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={15} /></a>}{company.office && <span className="contact-office">{company.office}</span>}</div>
        </div>
      </section>
    </main>
  )
}

function PrivacyPage() {
  return <main id="main"><PageHero eyebrow="Privacy / Website" title="Privacy, without the fine print theatrics." description="This static demonstration site is designed not to collect personal information through forms or analytics." label="Privacy overview" /><section className="section privacy-content"><div className="privacy-updated">Last reviewed: October 12, 2026</div><article><h2>Information this site collects</h2><p>This site does not include account registration, a contact form, newsletter signup, analytics, advertising pixels, or marketing cookies. If you follow a configured email link, your email application handles that interaction.</p></article><article><h2>Theme preference</h2><p>If you change the appearance theme, your preference is saved in your browser’s local storage so it can be remembered on later visits. It stays in your browser and is not sent to a server by this static site.</p></article><article><h2>External services</h2><p>Some visual or font resources may be served by their providers. Those providers may receive standard network information when a resource is requested. The production setup should self-host these resources where practical and review provider terms before deployment.</p></article><article><h2>Contact</h2><p>{company.email ? <>For a privacy question, email <a href={`mailto:${company.email}`}>{company.email}</a>.</> : 'A privacy contact address has not been configured. No contact information is inferred or invented.'}</p></article><p className="privacy-note">This page describes the current static demonstration experience and should be reviewed against the company’s actual practices before publication.</p></section></main>
}

function NotFoundInline() {
  return <main id="main" className="not-found"><span className="eyebrow">Not found</span><h1>This page took a different route.</h1><p>The content may have moved or the link may be out of date.</p><Link className="button button-dark" to="/">Back to the homepage <ArrowRight size={15} /></Link></main>
}

export { AboutPage, ArticlePage, ContactPage, HomePage, IndustriesPage, IndustryDetailPage, InsightsPage, PrivacyPage, RoboticsPage, ServiceDetailPage, ServicesPage, SolutionDetailPage, SolutionsPage }
