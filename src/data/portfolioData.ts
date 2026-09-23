export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  typeBadge: string;
  isRealClient: boolean;
  isPlaceholder?: boolean;
  link?: string;
  image: string;
  role: string;
  tools: string[];
  timeline: string;
  workflow?: string[];
  challenge: string;
  approach: string;
  interfaceHighlights: string[];
  implementationNotes: string[];
  result: string;
  learning: string;
  exploredPoints?: string[];
  figmaStructure?: {
    problem: string;
    userFlow: string[];
    wireframes: string;
    visualSystem: {
      typography: string;
      color: string;
      spacing: string;
      components: string;
      grid: string;
    };
    hiFi: string;
    prototype: string;
    reflection: string;
  };
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: { name: string; note?: string }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Mayank Kalra',
    role: 'UI/UX Designer × Frontend Developer',
    secondaryRole: 'AI-Assisted Product Builder',
    location: 'Delhi, India',
    email: 'mayankkalra03atwork@gmail.com',
    linkedin: 'https://www.linkedin.com/in/mayank-kalra-274812354/',
    github: 'https://github.com/CMD-Mayank',
    portfolioUrl: 'https://mayank-kalra.netlify.app/',
    availability: 'AVAILABLE FOR INTERNSHIPS',
    headline: 'Designing interfaces. Building products. Using AI to move faster.',
    subHeadline: 'I design thoughtful digital experiences and turn them into responsive, functional products.',
    locationStatement: 'Based in Delhi, India — building at the intersection of design, frontend development and AI.',
    coreIdea: 'Mayank doesn\'t just design interfaces. He understands the interface, the product, the implementation, and what happens after the design.',
  },

  projects: [
    {
      id: 'aiims-haridwar',
      number: '01',
      title: 'AIIMS Haridwar',
      category: 'CLIENT WEBSITE / UI DESIGN / FRONTEND / DEPLOYMENT',
      tagline: 'A real client website designed around institutional requirements, information accessibility and responsive web presentation.',
      typeBadge: 'REAL CLIENT PROJECT',
      isRealClient: true,
      link: 'https://aiimsharidwar.com/',
      image: '/images/regenerated_image_1790163915284.png',
      role: 'UI Designer & Frontend Developer',
      tools: ['Figma', 'HTML5', 'CSS3', 'JavaScript', 'Responsive Engine', 'DNS & SSL Hosting'],
      timeline: 'Completed & Live in Production',
      workflow: [
        'CLIENT REQUIREMENTS',
        'INFORMATION STRUCTURE',
        'INTERFACE DESIGN',
        'RESPONSIVE IMPLEMENTATION',
        'DEPLOYMENT',
        'CLIENT FEEDBACK'
      ],
      challenge:
        'Translating complex institutional and academic health institute requirements into a structured, clear, and reassuring digital home for prospective students, faculty, and patients.',
      approach:
        'Structured the site hierarchy around primary user intents: academic admissions, institutional departments, faculty credentials, and quick enquiry routes.',
      interfaceHighlights: [
        'Clear institutional hierarchy with frictionless access to academic admissions and notices',
        'Mobile-first responsive navigation accommodating dense department indexes without clutter',
        'Accessible typography and contrast standards suitable for diverse visitor age groups',
        'Direct contact and admission enquiry workflows reducing administrative friction'
      ],
      implementationNotes: [
        'Built with clean, lightweight semantic markup for fast page loads across varying network speeds',
        'Cross-browser responsive styling tested across desktop, tablet, and mobile viewports',
        'Handled end-to-end production deployment: custom domain mapping, DNS routing, and SSL certificate installation'
      ],
      result:
        'Successfully delivered and deployed live at aiimsharidwar.com, meeting institutional client expectations and providing an accessible public presence.',
      learning:
        'Managing client revisions directly taught me how design proposals must align with real-world institutional constraints and strict domain delivery deadlines.'
    },
    {
      id: 'shraya-streams',
      number: '02',
      title: 'Shraya Streams',
      category: 'PRODUCT UI / UX / FRONTEND',
      tagline: 'A streaming-style digital product concept focused on content discovery, visual hierarchy and an engaging browsing experience.',
      typeBadge: 'PRODUCT UI / UX CONCEPT',
      isRealClient: false,
      link: 'https://shrayastreams.netlify.app/',
      image: '/images/regenerated_image_1790163936270.png',
      role: 'Product Designer & Frontend Engineer',
      tools: ['UI Prototyping', 'Modern CSS', 'JavaScript', 'Responsive Architecture'],
      timeline: 'Concept & Functional Build',
      challenge:
        'Designing a high-retention streaming interface that balances large cinematic media showcases with intuitive horizontal and vertical content discovery.',
      approach:
        'Prioritized dark-canvas visual ergonomics, clean card typography, and clear focal anchors so users effortlessly navigate genres without visual fatigue.',
      exploredPoints: [
        'Visual hierarchy between featured hero spotlights and content category rows',
        'Content discovery patterns with responsive scroll interactions and card hover states',
        'Navigation compactness for both desktop widescreen and mobile viewports',
        'Consistent typography and card aspect ratios preventing layout jumps',
        'Micro-interactions indicating active playback states and watchlist curation'
      ],
      interfaceHighlights: [
        'Cinematic hero spotlight showcasing featured content with prominent actions',
        'Rhythmic row structure allowing rapid lateral browsing across curated themes',
        'Refined hover card animations that convey depth without disrupting adjacent layout flow',
        'Adaptive navigation bar that remains discreet during media immersion'
      ],
      implementationNotes: [
        'Engineered responsive grid and flex layouts with strict overflow control',
        'Used compositor-friendly CSS transforms for fluid hover states',
        'Deployed to Netlify with responsive testing across breakpoints'
      ],
      result:
        'A cohesive digital streaming product prototype demonstrating strong visual hierarchy and modern media interface patterns.',
      learning:
        'High-density media interfaces demand strict mathematical card sizing and conservative contrast so imagery takes center stage.'
    },
    {
      id: 'shraya-ai',
      number: '03',
      title: 'Shraya.ai',
      category: 'AI PRODUCT / PRODUCT DESIGN / FRONTEND',
      tagline: 'An AI-focused product exploring how intelligent systems can be presented through approachable, user-facing digital experiences.',
      typeBadge: 'AI PRODUCT EXPERIENCE',
      isRealClient: false,
      link: 'https://shraya.netlify.app/',
      image: '/images/regenerated_image_1790163942781.png',
      role: 'Product Designer & Frontend Developer',
      tools: ['UI/UX Design', 'Modern Frontend', 'Prompt UX', 'Responsive Systems'],
      timeline: 'AI Product Concept',
      challenge:
        'AI tools often intimidate non-technical users with raw text boxes and ambiguous capabilities. The challenge was making an intelligent system feel intuitive, clear, and actionable from the first second.',
      approach:
        'Designed an interface that frames AI as a collaborative partner rather than a black-box command line, featuring contextual prompts, clean structured outputs, and transparent state cues.',
      interfaceHighlights: [
        'Approachable input canvas with intent-based prompt starters',
        'Clear distinction between user queries, system states, and structured generated outputs',
        'Minimalist typography that treats generated content with editorial clarity',
        'Responsive layout scaling effortlessly from mobile chats to desktop multi-column panels'
      ],
      implementationNotes: [
        'Built interactive state management for message flow and query status indicators',
        'Styled responsive message containers with clean typographic hierarchy',
        'Configured automated deployment and continuous preview on Netlify'
      ],
      result:
        'An accessible AI product interface demonstrating how thoughtful UX bridges the gap between machine intelligence and everyday human productivity.',
      learning:
        'The interface is responsible for making AI understandable. Clear feedback, latency cues, and suggestion affordances matter just as much as model intelligence.'
    },
    {
      id: 'design-exploration',
      number: '04',
      title: 'Design Exploration',
      category: 'UI/UX / FIGMA / PROTOTYPING',
      tagline: 'A comprehensive, structured UI/UX architecture case study placeholder built for deep component systems, user journeys, and iterative prototyping.',
      typeBadge: 'REAL CASE STUDY TO BE ADDED',
      isRealClient: false,
      isPlaceholder: true,
      image: '/images/design_exploration_preview_1790162618305.jpg',
      role: 'UI/UX Designer',
      tools: ['Figma', 'Wireframing', 'Component Tokens', 'Interactive Prototyping'],
      timeline: 'Figma Case Study Template',
      challenge:
        'Structured framework dedicated to an upcoming end-to-end design case study, demonstrating rigorous problem discovery, low-fidelity wireframing, design system tokens, and interactive flows.',
      approach:
        'Maintains absolute authenticity: rather than fabricating fake user numbers or invented personas, this space provides the exact architectural blueprint that will be populated with my upcoming Figma project.',
      interfaceHighlights: [
        'Systematic user journey mapping from entry to key conversion actions',
        'Component token architecture: typography scale, spacing tokens, and color system',
        'Low-fidelity wireframe blueprints validating content hierarchy before styling',
        'High-fidelity interactive prototype states with edge-case specifications'
      ],
      implementationNotes: [
        'Designed to be swapped seamlessly with exported Figma components and prototype links',
        'Strictly adheres to honest portfolio guidelines with zero fabricated metrics'
      ],
      result:
        'Clear architectural template prepared for incoming Figma case study documentation.',
      learning:
        'Transparently framing upcoming work builds far greater recruiter trust than fabricated user research or fake vanity metrics.',
      figmaStructure: {
        problem: 'Structured interface problem definition addressing specific user friction and business requirements.',
        userFlow: ['Entry', 'Discovery', 'Decision', 'Action'],
        wireframes: 'Low-fidelity layout explorations establishing content hierarchy without visual decoration.',
        visualSystem: {
          typography: 'Scale from Display to Caption with strict rem hierarchy',
          color: '60-30-10 palette with accessible WCAG AA contrast compliance',
          spacing: 'Consistent 8pt spatial grid system',
          components: 'Variants, hover/pressed/focused states, and auto-layout tokens',
          grid: 'Responsive 12-column desktop grid collapsing to 4-column mobile'
        },
        hiFi: 'Final polished interface screens rendered with pixel-level precision.',
        prototype: 'Interactive flow validating micro-interactions and screen transitions.',
        reflection: 'Documenting what changed between initial low-fidelity concept and final high-fidelity delivery.'
      }
    }
  ] as Project[],

  builderStages: [
    {
      number: '01',
      title: 'DESIGN',
      summary: 'Understanding the problem, structure, hierarchy and visual language.',
      details:
        'I do not jump into aesthetic styling blindly. I break down the information architecture, user intents, and visual hierarchy first. I consider edge cases, empty states, and content length variability so screens do not break in production.'
    },
    {
      number: '02',
      title: 'BUILD',
      summary: 'Turning the interface into responsive, functional frontend experiences.',
      details:
        'Design does not end in Figma. I write semantic, clean markup and responsive CSS/Tailwind, ensuring layouts behave predictably across viewports. Having a developer mindset ensures every design choice is feasible to build.'
    },
    {
      number: '03',
      title: 'TEST',
      summary: 'Checking responsiveness, interaction, usability and visual consistency.',
      details:
        'I inspect real device viewports, touch targets, contrast ratios, and loading states. When an interface is interacted with, does it feel immediate and resilient? Testing bridges the gap between static mockups and living software.'
    },
    {
      number: '04',
      title: 'SHIP',
      summary: 'Deploying the product and improving it through feedback.',
      details:
        'From DNS records and SSL to hosting and client feedback loops, I take ownership through deployment. Once live, client input and user reality inform the next iteration cycle.'
    }
  ],

  aiWorkflow: {
    headline: 'AI IS MY LEVERAGE.',
    subheadline:
      'I use AI to accelerate exploration, development and iteration — while keeping product direction, design decisions and final execution intentional.',
    quote: 'AI helps me move faster. It doesn\'t make the product decisions for me.',
    steps: [
      { step: '01', name: 'IDEA', desc: 'Define problem scope and product objectives.' },
      { step: '02', name: 'AI EXPLORATION', desc: 'Rapidly stress-test user scenarios and explore layout paradigms.' },
      { step: '03', name: 'DESIGN', desc: 'Curate typography, spatial hierarchy, and visual consistency manually.' },
      { step: '04', name: 'PROTOTYPE', desc: 'Generate rapid code scaffolds and interactive testbeds.' },
      { step: '05', name: 'IMPLEMENTATION', desc: 'Engineer robust, production-grade frontend logic and components.' },
      { step: '06', name: 'ITERATION', desc: 'Refine based on client feedback and real device behavior.' }
    ]
  },

  skills: [
    {
      title: 'DESIGN',
      subtitle: 'Crafting intentional experiences',
      skills: [
        { name: 'UI/UX Design', note: 'Primary focus' },
        { name: 'Responsive Layouts', note: 'Desktop to mobile' },
        { name: 'Visual Hierarchy', note: 'Typographic & spatial discipline' },
        { name: 'Wireframing', note: 'Low to mid-fidelity' },
        { name: 'Prototyping', note: 'Interactive states' },
        { name: 'Figma', note: 'Developing hands-on proficiency' }
      ]
    },
    {
      title: 'FRONTEND',
      subtitle: 'Building the presentation layer',
      skills: [
        { name: 'HTML5', note: 'Semantic markup' },
        { name: 'CSS3 / Modern CSS', note: 'Flex, Grid, Animation' },
        { name: 'JavaScript (ES6+)', note: 'DOM & asynchronous logic' },
        { name: 'React', note: 'Component architecture & hooks' },
        { name: 'Three.js / WebGL', note: '3D spatial interactive graphics' },
        { name: 'Tailwind CSS', note: 'Utility-first styling' }
      ]
    },
    {
      title: 'BACKEND / DEV',
      subtitle: 'Engineering fundamentals',
      skills: [
        { name: 'Node.js', note: 'Server runtimes' },
        { name: 'Express', note: 'REST APIs & routing' },
        { name: 'REST APIs', note: 'Client-server integration' },
        { name: 'SQL', note: 'Relational data fundamentals' },
        { name: 'Java', note: 'Core academic coursework' }
      ]
    },
    {
      title: 'TOOLS & WORKFLOW',
      subtitle: 'Everyday developer stack',
      skills: [
        { name: 'Figma', note: 'Interface design' },
        { name: 'Git & GitHub', note: 'Version control & repos' },
        { name: 'VS Code', note: 'Primary editor' },
        { name: 'Postman', note: 'API testing' },
        { name: 'DNS & Deployment', note: 'Domain, SSL, Netlify' }
      ]
    },
    {
      title: 'AI / PRODUCT',
      subtitle: 'Modern builder leverage',
      skills: [
        { name: 'AI-assisted product dev', note: 'Accelerating builds' },
        { name: 'AI interfaces & UX', note: 'Prompting & output UX' },
        { name: 'AI workflow experimentation', note: 'Iterative refinement' },
        { name: 'Rapid prototyping', note: 'Concept to functional build' }
      ]
    }
  ] as SkillCategory[],

  process: [
    {
      step: '01',
      title: 'UNDERSTAND',
      items: ['Requirements analysis', 'Project context', 'Target users', 'Technical constraints']
    },
    {
      step: '02',
      title: 'STRUCTURE',
      items: ['Information architecture', 'User flow diagrams', 'Content hierarchy', 'Navigation taxonomy']
    },
    {
      step: '03',
      title: 'DESIGN',
      items: ['Low-fidelity wireframes', 'Visual design system', 'Component library', 'Responsive breakpoints']
    },
    {
      step: '04',
      title: 'BUILD',
      items: ['Frontend architecture', 'Interactive micro-states', 'Responsive implementation', 'Accessibility audit']
    },
    {
      step: '05',
      title: 'ITERATE',
      items: ['Client review sessions', 'Cross-browser testing', 'Visual fine-tuning', 'Usability checks']
    },
    {
      step: '06',
      title: 'SHIP',
      items: ['Production deployment', 'Domain & SSL config', 'Final polish', 'Continuous improvement']
    }
  ],

  experience: {
    role: 'Freelance Web Developer',
    period: '2026 — Present',
    type: 'Client & Independent Practice',
    description:
      'Building responsive business websites from client requirements, implementing UI revisions based on feedback, and handling deployment, domains, hosting and SSL.',
    highlights: [
      'Client Communication: Gathering institutional/business goals and translating them into project milestones',
      'UI Implementation: Translating layout concepts into clean, accessible web pages',
      'Responsive Development: Rigorous mobile and tablet testing across modern viewports',
      'Production Deployment: End-to-end DNS configuration, domain management, SSL security, and hosting setup',
      'Iterative Revision: Incorporating direct stakeholder feedback for production launch'
    ]
  },

  education: {
    institution: 'JIMS Rohini',
    university: 'Guru Gobind Singh Indraprastha University (GGSIPU)',
    degree: 'Bachelor of Computer Applications (BCA)',
    timeline: 'Expected Graduation: 2028',
    location: 'Delhi, India',
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Database Management Systems',
      'Web Engineering & Internet Technologies'
    ]
  }
};
