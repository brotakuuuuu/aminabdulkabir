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

const icon = (name) => `/icons/${name}.svg`

export const SOCIALS = [
  { name: 'LinkedIn', href: 'https://linkedin.com/in/amin-abdulkabir-806a97177', icon: icon('linkedin-plain') },
  { name: 'GitHub', href: 'https://github.com/Nimroddddd/', icon: icon('github-original') },
  { name: 'WhatsApp', href: 'https://wa.me/2348101101326', icon: icon('whatsapp') },
  { name: 'X', href: 'https://x.com/a_miinnnn', icon: icon('x') },
  { name: 'Instagram', href: 'https://www.instagram.com/am1nnnnnnn/', icon: icon('instagram') },
]

export const SKILLS = {
  Frontend: [
    { name: 'HTML', color: '#E44D26', icon: icon('html5-plain') },
    { name: 'Javascript', color: '#f0db4f', icon: icon('javascript-plain') },
    { name: 'React', color: '#61dafb', icon: icon('react-original') },
    { name: 'CSS', color: '#2965f1', icon: icon('css3-plain') },
    { name: 'Tailwind CSS', color: '#38bef8', icon: icon('tailwindcss-original') },
    { name: 'Typescript', color: '#3178c6', icon: icon('typescript-plain') },
    { name: 'VS Code', color: '#1F9CF0', icon: icon('vscode-plain') },
    { name: 'Next JS', color: '#ffffff', icon: icon('nextjs-plain') },
  ],
  Backend: [
    { name: 'Express', color: '#ffffff', icon: icon('express-original') },
    { name: 'Node js', color: '#5fa04e', icon: icon('nodejs-plain') },
    { name: 'NPM', color: '#cb3837', icon: icon('npm-original-wordmark') },
    { name: 'PostgreSQL', color: '#4f8fc9', icon: icon('postgresql-plain') },
    { name: 'Git', color: '#F34F29', icon: icon('git-plain') },
    { name: 'Axios', color: '#8b63f0', icon: icon('axios-plain') },
    { name: 'MySQL', color: '#3e8fb8', icon: icon('mysql') },
    { name: 'Postman', color: '#f37036', icon: icon('postman-plain') },
    { name: 'MongoDB', color: '#4FAA41', icon: icon('mongodb-plain') },
  ],
}

// Set `image` to '' to show an empty placeholder frame.
export const PROJECTS = [
  {
    name: 'Classy Haven Closet',
    image: '/projects/haven.jpg',
    description:
      'A Full-stack e-commerce platform for a fashion brand with product variant management, inventory tracking, order processing, and automated email notifications.',
    tools: ['React.js', 'Tailwind CSS', 'TanStack Query', 'Cloudinary', 'Express.js', 'PostgreSQL'],
    live: 'https://classyhaven.xyz',
  },
  {
    name: 'Mintech E-Commerce Website',
    image: '/projects/mintech.jpg',
    description:
      'A Fullstack e-commerce website that manages user authentication, cart functionality, checkout options and database persistence.',
    tools: ['React.js', 'Next.js', 'Express.js', 'PostgreSQL'],
    live: 'https://min-tech.netlify.app',
    code: 'https://github.com/Nimroddddd/mintech',
  },
  {
    name: 'Mental Health Provider Website',
    image: '/projects/psy.jpg',
    description:
      'A full-featured website built for a psychiatric care provider. Includes informational content, service listings, contact forms, and secure backend functionality',
    tools: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    live: 'https://healthwisepw.com',
  },
  {
    name: 'Medsite',
    image: '/projects/medsite.jpg',
    description: 'A professional website for a medical company startup.',
    tools: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    live: 'https://meddsite.netlify.app',
  },
  {
    name: 'PIA',
    image: '/projects/pia.jpg',
    description:
      'A Privacy Impact Assessment tool that helps organizations assess the privacy risks associated with their data processing activities.',
    tools: ['React.js', 'Express.js', 'MySQL'],
    live: 'https://pia.protecciodata.com',
  },
  {
    name: 'Questionnaire Platform',
    image: '/projects/kito.jpg',
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
