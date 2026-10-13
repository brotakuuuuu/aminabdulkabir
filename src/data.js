export const RESUME_URL =
  'https://docs.google.com/document/d/1n4PC69suakP8NpI9fdsbBN06EU3uvBilCmt-78xaYVQ/edit'

export const EMAIL = 'min123kabir@gmail.com'

export const NAV = [
  { id: 'home', text: 'Home' },
  { id: 'about', text: 'About' },
  { id: 'skills', text: 'Skills' },
  { id: 'projects', text: 'Projects' },
  { id: 'contact', text: 'Contacts' },
]

const si = (name) => `https://cdn.jsdelivr.net/npm/simple-icons@13/icons/${name}.svg`
const dv = (path) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}.svg`

export const SOCIALS = [
  { name: 'LinkedIn', href: 'https://linkedin.com/in/amin-abdulkabir-806a97177', icon: dv('linkedin/linkedin-plain') },
  { name: 'GitHub', href: 'https://github.com/Nimroddddd/', icon: dv('github/github-original') },
  { name: 'WhatsApp', href: 'https://wa.me/2348101101326', icon: si('whatsapp') },
  { name: 'X', href: 'https://x.com/a_miinnnn', icon: si('x') },
  { name: 'Instagram', href: 'https://www.instagram.com/am1nnnnnnn/', icon: si('instagram') },
]

export const SKILLS = {
  Frontend: [
    { name: 'HTML', color: '#E44D26', icon: 'devicon-html5-plain' },
    { name: 'Javascript', color: '#f0db4f', icon: 'devicon-javascript-plain' },
    { name: 'React', color: '#61dafb', icon: 'devicon-react-original' },
    { name: 'CSS', color: '#2965f1', icon: 'devicon-css3-plain' },
    { name: 'Tailwind CSS', color: '#38bef8', icon: 'devicon-tailwindcss-original' },
    { name: 'Typescript', color: '#3178c6', icon: 'devicon-typescript-plain' },
    { name: 'VS Code', color: '#1F9CF0', icon: 'devicon-vscode-plain' },
    { name: 'Next JS', color: '#ffffff', icon: 'devicon-nextjs-plain' },
  ],
  Backend: [
    { name: 'Express', color: '#ffffff', icon: 'devicon-express-original' },
    { name: 'Node js', color: '#5fa04e', icon: 'devicon-nodejs-plain' },
    { name: 'NPM', color: '#cb3837', icon: 'devicon-npm-original-wordmark' },
    { name: 'PostgreSQL', color: '#4f8fc9', icon: 'devicon-postgresql-plain' },
    { name: 'Git', color: '#F34F29', icon: 'devicon-git-plain' },
    { name: 'Axios', color: '#8b63f0', icon: 'devicon-axios-plain' },
    { name: 'MySQL', color: '#3e8fb8', icon: 'devicon-mysql-plain' },
    { name: 'Postman', color: '#f37036', icon: 'devicon-postman-plain' },
    { name: 'MongoDB', color: '#4FAA41', icon: 'devicon-mongodb-plain' },
  ],
}

// Set `image` to '' to show an empty placeholder frame.
export const PROJECTS = [
  {
    name: 'Classy Haven Closet',
    image: '/projects/haven.png',
    description:
      'A Full-stack e-commerce platform for a fashion brand with product variant management, inventory tracking, order processing, and automated email notifications.',
    tools: ['React.js', 'Tailwind CSS', 'TanStack Query', 'Cloudinary', 'Express.js', 'PostgreSQL'],
    live: 'https://classyhaven.xyz',
  },
  {
    name: 'Mintech E-Commerce Website',
    image: '/projects/mintech.png',
    description:
      'A Fullstack e-commerce website that manages user authentication, cart functionality, checkout options and database persistence.',
    tools: ['React.js', 'Next.js', 'Express.js', 'PostgreSQL'],
    live: 'https://min-tech.netlify.app',
    code: 'https://github.com/Nimroddddd/mintech',
  },
  {
    name: 'Mental Health Provider Website',
    image: '/projects/psy.png',
    description:
      'A full-featured website built for a psychiatric care provider. Includes informational content, service listings, contact forms, and secure backend functionality',
    tools: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    live: 'https://healthwisepw.com',
  },
  {
    name: 'Medsite',
    image: '/projects/medsite.png',
    description: 'A professional website for a medical company startup.',
    tools: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    live: 'https://meddsite.netlify.app',
  },
  {
    name: 'PIA',
    image: '/projects/pia.png',
    description:
      'A Privacy Impact Assessment tool that helps organizations assess the privacy risks associated with their data processing activities.',
    tools: ['React.js', 'Express.js', 'MySQL'],
    live: 'https://pia.protecciodata.com',
  },
  {
    name: 'Questionnaire Platform',
    image: '/projects/kito.png',
    description: 'A Fullstack platform for creating, sharing and managing questionnaires.',
    tools: ['Express.js', 'Mongoose.js', 'React.js', 'Passport.js', 'Tailwind CSS'],
    live: 'https://kito-questionaire.vercel.app/',
    code: 'https://github.com/Nimroddddd/Kito-questionaire',
  },
]

export const EMAILJS = {
  publicKey: 'EyRqBxz1TukRBebUu',
  serviceId: 'gmail_service',
  templateId: 'gmail_template',
}
