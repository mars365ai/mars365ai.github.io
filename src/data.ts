export type Service = {
  slug: string
  title: string
  eyebrow: string
  summary: string
  businessValue: string
  challenge: string
  approach: string
  capabilities: string[]
  benefits: string[]
  icon: 'strategy' | 'agents' | 'generative' | 'development' | 'microsoft' | 'engineering' | 'robotics'
}

export type Solution = {
  slug: string
  title: string
  category: string
  challenge: string
  approach: string
  capabilities: string[]
  outcomes: string[]
  industries: string[]
}

export type Industry = {
  slug: string
  name: string
  description: string
  challenges: string[]
  opportunities: string[]
  solutions: string[]
}

export type Article = {
  slug: string
  title: string
  category: string
  publishedAt: string
  readingMinutes: number
  excerpt: string
  paragraphs: string[]
}

export const company = {
  name: 'Mars365 AI',
  tagline: 'Intelligence, put to work.',
  email: '',
  linkedin: '',
  office: '',
  confirmedTechnologies: [] as string[],
}

export const services: Service[] = [
  {
    slug: 'ai-strategy-consulting', title: 'AI strategy & consulting', eyebrow: '01 / Find the signal',
    summary: 'Find the valuable problems first. Build an AI roadmap around the work, people, and outcomes that matter.',
    businessValue: 'Turn broad AI ambition into a sequence of clear, testable decisions.',
    challenge: 'AI ideas often arrive faster than organizations can assess them. Teams need a grounded way to separate useful opportunities from noise, understand readiness, and set responsible boundaries.',
    approach: 'Start with business goals and the day-to-day work behind them. Map opportunities against value, feasibility, risk, and readiness, then shape a roadmap that can be tested in manageable steps.',
    capabilities: ['AI opportunity discovery', 'Readiness and risk assessment', 'Adoption roadmaps', 'Responsible AI governance'],
    benefits: ['Prioritized opportunities', 'Shared decision criteria', 'A practical path from pilot to adoption'], icon: 'strategy',
  },
  {
    slug: 'ai-agents-automation', title: 'AI agents & automation', eyebrow: '02 / Move work forward',
    summary: 'Design agentic workflows that handle repeatable steps while keeping people in control of consequential decisions.',
    businessValue: 'Reduce coordination overhead and give teams more room for judgment-heavy work.',
    challenge: 'Important processes can be slowed by repetitive handoffs, fragmented systems, and manual follow-up. Unbounded automation can create new operational and governance risks.',
    approach: 'Model the workflow before choosing the agent pattern. Set permissions, human review points, escalation paths, and evaluation criteria around the actual process.',
    capabilities: ['Task-specific AI agents', 'Human-in-the-loop workflows', 'Multi-step orchestration', 'Agent evaluation and monitoring'],
    benefits: ['Fewer repetitive handoffs', 'Clearer exception handling', 'Automation with defined oversight'], icon: 'agents',
  },
  {
    slug: 'generative-ai-solutions', title: 'Generative AI solutions', eyebrow: '03 / Make knowledge useful',
    summary: 'Connect people to trusted organizational knowledge with assistants designed around context, access, and evidence.',
    businessValue: 'Make information easier to find, understand, and apply in daily work.',
    challenge: 'Policies, procedures, and expertise are spread across documents and platforms. A fluent answer is not enough if people cannot see where it came from or whether they can access its source.',
    approach: 'Ground generation in approved sources, preserve existing permissions, show citations, and make uncertainty visible. Evaluate the experience against real questions and failure cases.',
    capabilities: ['Enterprise knowledge assistants', 'Retrieval-augmented generation', 'Document intelligence', 'AI-powered search'],
    benefits: ['Less time spent searching', 'Answers linked to source material', 'A clearer route to organizational knowledge'], icon: 'generative',
  },
  {
    slug: 'custom-ai-development', title: 'Custom AI development', eyebrow: '04 / Build what fits',
    summary: 'Create AI-enabled applications around the systems, constraints, and user journeys that make your business distinct.',
    businessValue: 'Fit AI into the work people already do instead of adding another disconnected tool.',
    challenge: 'Off-the-shelf software can miss a specialized workflow, while custom applications need to be secure, maintainable, and useful beyond a demo.',
    approach: 'Define the user journey and system boundaries first. Build a focused vertical slice, validate it with representative users, and design for observability and change.',
    capabilities: ['AI-powered web applications', 'LLM integrations', 'Workflow-specific copilots', 'Product discovery and prototyping'],
    benefits: ['Experiences tailored to real workflows', 'Clearer integration boundaries', 'A foundation designed to evolve'], icon: 'development',
  },
  {
    slug: 'microsoft-ai-solutions', title: 'Microsoft AI solutions', eyebrow: '05 / Extend the workplace',
    summary: 'Explore Microsoft AI patterns across Microsoft 365, Azure, and Power Platform where they fit your needs and environment.',
    businessValue: 'Connect AI opportunities to the collaboration and cloud platforms your organization already uses.',
    challenge: 'Organizations need to understand where Microsoft AI tools fit, how data and permissions flow, and what changes are needed before broad adoption.',
    approach: 'Assess the existing Microsoft environment and target workflow, then define a bounded implementation and adoption path that can be evaluated before expansion.',
    capabilities: ['Microsoft Copilot planning', 'Copilot Studio concepts', 'Azure AI solution design', 'Microsoft 365 workflow integration'],
    benefits: ['Platform-aware solution options', 'Better visibility into data boundaries', 'A measured approach to adoption'], icon: 'microsoft',
  },
  {
    slug: 'ai-engineering-architecture', title: 'AI engineering & architecture', eyebrow: '06 / Make it dependable',
    summary: 'Design the foundations that help AI applications remain observable, secure, and maintainable as they grow.',
    businessValue: 'Replace fragile experiments with systems that can be operated and improved responsibly.',
    challenge: 'AI systems introduce changing models, probabilistic outputs, sensitive data paths, and new dependencies that conventional application patterns may not fully address.',
    approach: 'Make model and data boundaries explicit. Plan for evaluation, observability, access control, cost visibility, and graceful failure from the start.',
    capabilities: ['AI reference architecture', 'LLM orchestration patterns', 'Evaluation and observability', 'Security and cost controls'],
    benefits: ['More visible system behavior', 'Clearer operational ownership', 'A stronger basis for iterative improvement'], icon: 'engineering',
  },
  {
    slug: 'robotics-training', title: 'Robotics training for young people', eyebrow: '07 / Build in the physical world',
    summary: 'Introduce young people to robotics through hands-on projects that connect mechanical design, electronics, programming, and responsible testing.',
    businessValue: 'Give young learners a practical path to explore robotics and physical AI.',
    challenge: 'Robotics can feel inaccessible when hardware, code, and theory are taught separately. Learners need a clear way to connect the parts and build confidence through age-appropriate projects.',
    approach: 'Progress from ideas and simple mechanisms to sensors, code, and integrated prototypes. Keep practice supervised, adapt to learners’ experience, and treat testing and reflection as part of building.',
    capabilities: ['Robotics and mechanical foundations', 'Sensors, electronics, and control', 'Programming and autonomous behavior', 'Project-based prototyping and testing'],
    benefits: ['A connected introduction to robotics concepts', 'Opportunities to learn through making', 'A foundation for further study in engineering and AI'], icon: 'robotics',
  },
]

export const solutions: Solution[] = [
  {
    slug: 'enterprise-knowledge-assistant', title: 'Enterprise knowledge assistant', category: 'Knowledge',
    challenge: 'People lose time looking for current answers across policy libraries, shared drives, and internal knowledge bases.',
    approach: 'A grounded assistant retrieves from approved sources, respects permissions, and links each response back to its evidence.',
    capabilities: ['Permission-aware retrieval', 'Source citations', 'Feedback and evaluation loop'],
    outcomes: ['Faster discovery of relevant information', 'More transparent answers', 'Clearer ownership of source content'],
    industries: ['professional-services', 'financial-services', 'healthcare', 'public-sector'],
  },
  {
    slug: 'intelligent-document-processing', title: 'Intelligent document processing', category: 'Operations',
    challenge: 'Teams manually review high volumes of forms and documents to locate fields, classify content, and route exceptions.',
    approach: 'An AI-assisted pipeline extracts and classifies information, validates it against defined rules, and routes uncertain cases for human review.',
    capabilities: ['Document classification', 'Field extraction', 'Confidence thresholds and review queues'],
    outcomes: ['Less repetitive document handling', 'More consistent routing', 'Human attention focused on exceptions'],
    industries: ['financial-services', 'healthcare', 'manufacturing', 'logistics'],
  },
  {
    slug: 'ai-customer-support-agent', title: 'AI customer support agent', category: 'Customer experience',
    challenge: 'Support teams balance repeated questions with nuanced cases that require context, empathy, and careful escalation.',
    approach: 'A support assistant drafts grounded responses for routine queries and gives agents relevant context, while routing uncertain or sensitive requests to people.',
    capabilities: ['Knowledge-grounded response drafts', 'Conversation summarization', 'Escalation rules'],
    outcomes: ['More consistent access to support knowledge', 'Less time spent compiling context', 'Clear human ownership of sensitive cases'],
    industries: ['retail-ecommerce', 'technology', 'financial-services', 'professional-services'],
  },
  {
    slug: 'autonomous-workflow-automation', title: 'Autonomous workflow automation', category: 'Operations',
    challenge: 'Cross-team processes can stall when every handoff, status check, and follow-up depends on manual coordination.',
    approach: 'A bounded agent workflow gathers context, prepares next steps, and advances approved tasks with clear permission limits and human checkpoints.',
    capabilities: ['Workflow state awareness', 'Approved system actions', 'Escalation and audit trail'],
    outcomes: ['Fewer manual status checks', 'More predictable handoffs', 'Visible review points for consequential steps'],
    industries: ['manufacturing', 'logistics', 'professional-services', 'public-sector'],
  },
  {
    slug: 'enterprise-copilot', title: 'Enterprise copilot', category: 'Workplace',
    challenge: 'Teams want AI assistance in their everyday tools without weakening the access and governance rules around company information.',
    approach: 'A workplace copilot concept connects selected tasks and knowledge sources to an assistant experience with explicit access boundaries and rollout measures.',
    capabilities: ['Use-case selection', 'Knowledge source mapping', 'Adoption and governance planning'],
    outcomes: ['A more focused adoption path', 'Clearer data access expectations', 'Practical measures for ongoing review'],
    industries: ['financial-services', 'professional-services', 'technology', 'public-sector'],
  },
  {
    slug: 'ai-powered-business-intelligence', title: 'AI-powered business intelligence', category: 'Decision support',
    challenge: 'Decision-makers need help exploring business information, but generic generated summaries can obscure definitions and uncertainty.',
    approach: 'A natural-language analysis layer works from governed metrics and clearly distinguishes retrieved facts from generated interpretation.',
    capabilities: ['Metric and glossary grounding', 'Natural-language exploration', 'Traceable summaries'],
    outcomes: ['More accessible exploration of information', 'Consistent metric definitions', 'Clearer separation of data and interpretation'],
    industries: ['retail-ecommerce', 'manufacturing', 'financial-services', 'logistics'],
  },
]

export const industries: Industry[] = [
  {
    slug: 'financial-services', name: 'Financial services', description: 'Explore responsible ways to make financial knowledge, operations, and service workflows more accessible.',
    challenges: ['Complex documentation and policy', 'High-volume operational review', 'Careful handling of sensitive information'],
    opportunities: ['Knowledge discovery with source evidence', 'Document review assistance', 'Human-supervised service workflows'],
    solutions: ['enterprise-knowledge-assistant', 'intelligent-document-processing', 'ai-customer-support-agent'],
  },
  {
    slug: 'healthcare', name: 'Healthcare', description: 'Consider AI opportunities that support information access and administrative work while keeping people accountable.',
    challenges: ['Information spread across documents', 'Administrative burden', 'Strict privacy and review needs'],
    opportunities: ['Policy and procedure discovery', 'Document classification assistance', 'Workflow coordination support'],
    solutions: ['enterprise-knowledge-assistant', 'intelligent-document-processing'],
  },
  {
    slug: 'manufacturing', name: 'Manufacturing', description: 'Connect operational knowledge and process information to the teams responsible for keeping work moving.',
    challenges: ['Operational knowledge held in many formats', 'Manual document and quality workflows', 'Coordination across sites and systems'],
    opportunities: ['Procedure knowledge assistants', 'Document triage', 'Exception-aware workflow automation'],
    solutions: ['intelligent-document-processing', 'autonomous-workflow-automation', 'ai-powered-business-intelligence'],
  },
  {
    slug: 'retail-ecommerce', name: 'Retail & e-commerce', description: 'Investigate practical AI support for customer questions, product knowledge, and information-led decisions.',
    challenges: ['Repeated customer questions', 'Changing product information', 'Signals spread across business systems'],
    opportunities: ['Grounded customer support', 'Internal product knowledge search', 'Natural-language business exploration'],
    solutions: ['ai-customer-support-agent', 'enterprise-knowledge-assistant', 'ai-powered-business-intelligence'],
  },
  {
    slug: 'professional-services', name: 'Professional services', description: 'Help knowledge-intensive teams find trusted information and reduce friction in repeatable work.',
    challenges: ['Expertise distributed across teams', 'Repeated research and document review', 'Manual project coordination'],
    opportunities: ['Permission-aware knowledge search', 'Document intelligence', 'Bounded workflow assistance'],
    solutions: ['enterprise-knowledge-assistant', 'intelligent-document-processing', 'autonomous-workflow-automation'],
  },
  {
    slug: 'technology', name: 'Technology', description: 'Design AI capabilities that fit evolving products, support operations, and engineering environments.',
    challenges: ['Fast-changing product knowledge', 'Support volume and context gathering', 'Operational complexity across tools'],
    opportunities: ['AI-assisted support', 'Product knowledge copilots', 'Observable AI application foundations'],
    solutions: ['ai-customer-support-agent', 'enterprise-copilot', 'ai-powered-business-intelligence'],
  },
  {
    slug: 'logistics', name: 'Logistics', description: 'Look for ways AI could help coordinate information and surface exceptions across complex operations.',
    challenges: ['Many handoffs and status updates', 'Unstructured shipment and service documents', 'Time-sensitive exception handling'],
    opportunities: ['Document extraction with review', 'Workflow status assistance', 'Operational information exploration'],
    solutions: ['intelligent-document-processing', 'autonomous-workflow-automation', 'ai-powered-business-intelligence'],
  },
  {
    slug: 'public-sector', name: 'Public sector', description: 'Explore transparent, accessible AI support for public information and administrative processes.',
    challenges: ['Large public-facing information libraries', 'Complex policy and procedure', 'Accountability and accessibility needs'],
    opportunities: ['Cited information assistance', 'Document triage support', 'Human-reviewed workflow automation'],
    solutions: ['enterprise-knowledge-assistant', 'autonomous-workflow-automation', 'enterprise-copilot'],
  },
]

export const articles: Article[] = [
  {
    slug: 'choosing-an-ai-use-case', title: 'A better first question than “Where can we use AI?”', category: 'AI strategy',
    publishedAt: '2026-09-14', readingMinutes: 5,
    excerpt: 'Start with the work people need to get done. A practical way to find AI opportunities worth testing.',
    paragraphs: [
      'When an organization starts exploring AI, the first conversation often becomes a tour of tools. A more useful starting point is the work itself: where do people lose time, wait for information, or repeat a judgment that could be supported?',
      'Describe the task in enough detail to see its inputs, decisions, exceptions, and consequences. Then ask what would improve for the person doing the work and for the people affected by it. This keeps the opportunity connected to a real outcome instead of a technology demonstration.',
      'A candidate use case should also be testable. Identify a bounded workflow, representative examples, a human owner, and a way to compare the assisted result with the current process. Include cases where the system should stop, ask for help, or explain that it does not know.',
      'The goal is not to prove that AI belongs everywhere. It is to learn where it can help, what constraints matter, and whether the improvement justifies the cost and change involved.',
    ],
  },
  {
    slug: 'designing-grounded-knowledge-assistants', title: 'What makes an enterprise answer trustworthy?', category: 'Generative AI',
    publishedAt: '2026-08-21', readingMinutes: 6,
    excerpt: 'Grounded answers need more than a language model. They need source quality, access boundaries, and honest uncertainty.',
    paragraphs: [
      'A knowledge assistant is only as useful as the information it can safely retrieve. Before tuning prompts, map the sources people trust, how current they are, and who is allowed to see each one.',
      'Answers should make their evidence inspectable. Link to the source material, preserve the access rules that already govern it, and distinguish retrieved facts from generated explanation. A polished response without provenance can create confidence without accountability.',
      'Evaluation should include ordinary questions and difficult ones: outdated sources, conflicting guidance, missing information, and requests outside a user’s permissions. The assistant should be able to say when evidence is weak and route people to an appropriate next step.',
      'Trust is not a single model setting. It is a property of the full experience: content stewardship, retrieval, permissions, interface cues, feedback, and the people responsible for improving it.',
    ],
  },
  {
    slug: 'human-oversight-for-ai-agents', title: 'Give AI agents boundaries before giving them tools', category: 'AI agents',
    publishedAt: '2026-07-30', readingMinutes: 5,
    excerpt: 'Useful agent workflows make permissions, approvals, and failure paths part of the design from day one.',
    paragraphs: [
      'An agent that can act across systems needs a clear operating envelope. Define which information it can access, which actions it can prepare, which actions it can perform, and which decisions always belong to a person.',
      'Start with the smallest useful capability. A workflow might gather context and draft a recommendation before it is allowed to make a change. This gives teams a chance to observe behavior and understand edge cases before increasing autonomy.',
      'Plan for failure as carefully as success. When information is missing, tools disagree, or an action cannot be completed, the system should preserve context, explain the issue, and provide a safe route to human review.',
      'Measure quality across the full workflow: successful completion, appropriate escalation, policy compliance, latency, and cost. Boundaries are not a brake on useful automation; they are what make it operable.',
    ],
  },
]

export const navigation = [
  { label: 'Services', href: '/services' },
  { label: 'Robotics', href: '/services/robotics-training' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
]

export const categoryOptions = [...new Set(solutions.map((solution) => solution.category))]
