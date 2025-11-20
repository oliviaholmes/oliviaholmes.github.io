// Personal portfolio configuration

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Olivia Holmes",
    firstName: "Olivia",
    title: "Software Engineer",
    tagline: "Building tech that matters",
    email: "oliviaxholmesx@gmail.com",
    location: "Belfast, UK",
    profileImage: "/profile.jpg",
  },

  // About Me Section
  about: {
    bio: [
      "I'm a passionate Software Engineer at EverQuote, working in a full-stack team with a front-end focus. I recently graduated with First Class Honours in Computer Science from Queen's University Belfast, where I served as president of the Computing Society.",
      "When I'm not coding, I love adventure! My recent trip to Bali included quad biking through waterfalls, snorkelling off islands, and zip lining through rice fields. I also enjoy volunteering with Christian organizations, running camps and youth programs where I organize activities and write talks."
    ],
    skills: [
      "React",
      "TypeScript", 
      "Next.js",
      "Tailwind CSS",
      "AWS",
      "Serverless",
      "SST",
      "Go"
    ]
  },

  // Work Experience
  experience: [
    {
      title: "Software Engineer",
      company: "EverQuote, Belfast",
      period: "June 2024 - Present",
      description: "Working in an agile full-stack team with front-end focus using React and TypeScript. Building components with Tailwind, working with AWS serverless architecture, and meeting business needs through sprints. Visited Boston office for business alignment meetings.",
      skills: ["React", "TypeScript", "Tailwind CSS", "AWS", "Serverless", "Agile", "Jira"]
    },
    {
      title: "Software Engineer Intern",
      company: "EverQuote, Belfast", 
      period: "July 2022 - June 2023",
      description: "Full-time placement working on security, front-end and full-stack tickets including cloud technologies. Built reusable React components using Tailwind and worked with API frameworks across domain websites. Gained experience with component libraries.",
      skills: ["React", "TypeScript", "AWS", "Component Libraries", "API Development"]
    },
    {
      title: "Systems Design Engineer",
      company: "Sensata Technologies, Antrim",
      period: "June 2021 - September 2021", 
      description: "Worked in daily standups testing Hubs and Range Extenders under pressure for weekly shipments. Problem-solved hardware issues and learned the full TPMS system stack from sensors to mobile app. Gained experience with Linux commands.",
      skills: ["Linux", "Hardware Testing", "System Architecture", "Problem Solving"]
    }
  ],

  // Volunteer Experience
  volunteer: [
    {
      title: "President/Secretary/Events Team",
      organization: "Queen's Computing Society",
      period: "Oct 2020 - 2024",
      description: "Organised and managed diverse events including company workshops, online game nights, open days, photo competitions, and hackathons. Coordinated with companies for sponsorships and meetings, developing strong communication and leadership skills whilst building community within the computing department.",
      skills: ["Event Management", "Leadership", "Communication", "Sponsorship Coordination", "Team Collaboration"]
    },
    {
      title: "Sunday School & Youth Leader",
      organization: "Local Church Community",
      period: "Sept 2016 - Ongoing",
      description: "Volunteer leader organising and leading engaging activities, games, talks, and creative sessions for children and youth. Collaborated effectively in team environments whilst strengthening relationships between families and building a supportive community atmosphere.",
      skills: ["Team Leadership", "Activity Planning", "Community Building", "Public Speaking", "Mentoring"]
    },
    {
      title: "Summer Camp & Holiday Bible Club Leader",
      organization: "Scripture Union Northern Ireland (SUNI), Baptist Youth, Carrickmacross Baptist",
      period: "2017 - Ongoing",
      description: "Led and organised activities for children's camps and holiday programmes. Provided care and support for children who might feel homesick or unwell, ensuring every child felt included and engaged in all planned activities whilst building meaningful relationships.",
      skills: ["Child Care", "Activity Coordination", "Relationship Building", "Problem Solving", "Inclusive Leadership"]
    }
  ],

  // Projects (currently placeholder - update when you have projects to showcase)
  projects: [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with modern technologies for optimal performance.",
      image: "/project1.jpg", // Add project images to /public folder
      technologies: ["Next.js", "React", "Stripe", "Prisma", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and advanced filtering capabilities.",
      image: "/project2.jpg",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    },
    // Add more projects here when ready
  ],

  // Stats/Metrics
  stats: [
    { number: "2+", label: "Years Experience" },
    { number: "Cross-functional", label: "Team Player" },
    { number: "40+", label: "Hours/Week Learning" },
    { number: "First Class", label: "Honours Degree" }
  ],

  // Social Links
  social: {
    linkedin: "https://www.linkedin.com/in/olivia-holmes-5812261b4/",
    github: "https://github.com/oliviaholmes",
    twitter: "", // Add if you have one
    website: "", // Add if you have a personal website
  },

  // Contact Information
  contact: {
    description: "I'm always open to discussing new opportunities, creative projects, or just having a friendly chat about technology and development.",
    socialCards: [
      {
        icon: "📧",
        label: "Email",
        value: "oliviaxholmesx@gmail.com",
        link: "mailto:oliviaxholmesx@gmail.com"
      },
      {
        icon: "💼", 
        label: "LinkedIn",
        value: "https://www.linkedin.com/in/olivia-holmes-5812261b4/",
        link: "https://www.linkedin.com/in/olivia-holmes-5812261b4/"
      },
      {
        icon: "💻",
        label: "GitHub", 
        value: "https://github.com/oliviaholmes",
        link: "https://github.com/oliviaholmes"
      }
    ]
  },

  // Navigation
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Volunteer", href: "#volunteer" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ],

  // Site Metadata
  meta: {
    title: "Olivia Holmes - Software Engineer",
    description: "Software Engineer at EverQuote with expertise in React, TypeScript, and AWS. Building tech that matters.",
    url: "https://oliviaholmes.github.io",
    image: "/profile.jpg"
  }
}

export type PortfolioConfig = typeof portfolioConfig