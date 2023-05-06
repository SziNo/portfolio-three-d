import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  next,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  kulkertech,
  owl,
  dh,
  cover,
  threejs,
  github,
  linkedin,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'tech',
    title: 'Tech',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Web Development',
    icon: web,
  },
  {
    title: 'Responsive Design',
    icon: mobile,
  },
  {
    title: 'JavaScript Frameworks',
    icon: backend,
  },
  {
    title: 'Version Control',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'next',
    icon: next,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
]

const experiences = [
  {
    title: 'Student',
    company_name: 'BZSH Foreign Trade Technical School',
    icon: kulkertech,
    iconBg: '#E6DEDD',
    date: 'Sep 2021 - May 2022',
    points: [
      'This was the turning point where I made a firm decision and took my first steps towards pursuing a career as a developer.',
      'During the first half of the term, we studied Python, C#, SQL and worked with Android Studio. We also learned HTML and CSS and created presentations using PowerPoint.',
      'In the second half of the term, our focus shifted to ASP.NET, JavaScript and Angular. We formed teams of 2 or 3 people and worked on a RESTful project.',
      'The term concluded with a test, a programming exam, and the presentation of our Node, Express, Mongoose, MongoDB, EJS, Bootstrap project.',
    ],
  },
  {
    title: 'Student',
    company_name: 'EPAM Systems / Codecool',
    icon: owl,
    iconBg: '#E6DEDD',
    date: 'May 2022 - Nov 2022',
    points: [
      'During the EPAM Junior Frontend Program, I was introduced to the basics of frontend development and important topics in JavaScript, with a focus on theoretical concepts.',
      'The program also emphasized the importance of data structures and algorithms (DSA), a topic I had previously overlooked. While I spent a lot of time studying these topics, I also began learning React on Udemy.',
      'After successfully completing the EPAM Program, I was accepted into the Career Starter Kit Program at Codecool.',
      'During this period, I shifted my focus from theory to practice and began building React applications for my first portfolio. This ultimately led to landing my first job in tech.',
    ],
  },
  {
    title: 'Junior Frontend Software Engineer',
    company_name: 'Docler Holding (ByBorg), Livejasmin Team',
    icon: dh,
    iconBg: '#E6DEDD',
    date: 'Nov 2022 - Apr 2023',
    points: [
      'Developing and debugging mainly using React, Backbone.js, SASS and other related technologies.',
      'Collaborating with cross-functional teams including Designers, Web Content Translators, GA Specialists and Testers.',
      'Implementing responsive design and ensuring cross-browser compatibility, usually using the Xcode simulator for iOS testing.',
      'Participating in code reviews and getting acquainted with JIRA, BitBucket, Confluence.',
    ],
  },
]

const projects = [
  {
    name: 'Helpdesk App',
    description:
      'A user-friendly full-stack Helpdesk web application for managing Apple product support tickets. Features include user registration/login, ticket creation, note addition and ticket closure.',
    tags: [
      {
        name: 'mern',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongoose',
        color: 'green-text-gradient',
      },
      {
        name: 'redux-toolkit',
        color: 'pink-text-gradient',
      },
      {
        name: 'jwt',
        color: 'orange-text-gradient',
      },
    ],
    image: cover,
    github_link: 'https://github.com/SziNo/helpdesk-mern-app',
    demo_link: 'https://helpdesk-mern.onrender.com/',
  },
  {
    name: 'Shirtify',
    description:
      'Shirtify is a t-shirt designer app that lets you create custom designs with ease. With its 3D implementation using React and Three.js, you can upload images, choose colors and apply your design as a logo or to the entire shirt.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'three',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'framer-motion',
        color: 'orange-text-gradient',
      },
    ],
    image: cover,
    github_link: 'https://github.com/SziNo/Shirtify/tree/master/client',
    demo_link: 'https://shirtify.vercel.app/',
  },
  {
    name: 'Sumz',
    description:
      'This project utilizes a GPT-4 API to automatically generate concise and informative summaries of webpages from their URLs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'rtk-query',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: cover,
    github_link: 'https://github.com/SziNo/gpt-4-summarizer',
    demo_link: 'https://gpt-4-summarizer.vercel.app/',
  },
  {
    name: 'Metaverse',
    description:
      'This project, similar to my hoobank project, focuses on aesthetics rather than functionality, with an emphasis on a fancy and neat appearance.',
    tags: [
      {
        name: 'next',
        color: 'blue-text-gradient',
      },
      {
        name: 'framer-motion',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: cover,
    github_link: 'https://github.com/SziNo/metaverse-next13',
    demo_link: 'https://metaverse-next13-phi.vercel.app/',
  },
  {
    name: 'Real Estate App',
    description:
      'This project allows users to sign in with Google authentication, update profile, post/manage advertisements, integrated Leaflet map, contact Landlord and password reminder.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: cover,
    github_link: 'https://github.com/SziNo/realEstateAppWithFirebase',
    demo_link: 'https://real-estate-app-with-firebase.vercel.app/',
  },
  {
    name: 'HooBank',
    description:
      'By utilizing design tools such as Figma, the focus is on creating a seamless and intuitive user experience rather than on implementing complex functionalities.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'figma',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: cover,
    github_link: 'https://github.com/SziNo/hoobank',
    demo_link: 'https://hoobank-alpha.vercel.app/',
  },
]

const socials = [
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/norbert-szikora-9172b8250/',
    image: linkedin,
  },
  {
    name: 'github',
    url: 'https://github.com/SziNo',
    image: github,
  },
]

export { services, technologies, experiences, projects, socials }
