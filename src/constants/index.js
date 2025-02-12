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
    python,
    java,
    kotlin,
    sql,
    c,
    r,
    kafka,
    spark,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meituan,
    uw_madison,
    lg,
    carrent,
    jobit,
    tripguide,
    vuejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id:"project",
      title: "Project",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
  ];
  
  const technologies = [
    {
      name: "Python",
      category: "Backend",
      icon: python,
    },
    {
      name: "Java",
      category: "Backend",
      icon: java,
    },
    {
      name: "Kotlin",
      category: "Backend",
      icon: kotlin,
    },
    {
      name: "SQL",
      category: "Backend",
      icon: sql,
    },
    // {
    //   name: "C",
    //   category: "Backend",
    //   icon: c,
    // },
    {
      name: "R",
      category: "Backend",
      icon: r,
    },
    {
      name: "JavaScript",
      category: "Frontend",
      icon: javascript,
    },
    {
      name: "React JS",
      category: "Frontend",
      icon: reactjs,
    },
    {
      name: "Vue JS",
      category: "Frontend",
      icon: vuejs,
    },
    // {
    //   name: "TypeScript",
    //   category: "Frontend",
    //   icon: typescript,
    // },
    {
      name: "HTML 5",
      category: "Frontend",
      icon: html,
    },
    {
      name: "CSS 3",
      category: "Frontend",
      icon: css,
    },
    // {
    //   name: "Tailwind CSS",
    //   category: "Frontend",
    //   icon: tailwind,
    // },
    {
      name: "Git",
      category: "DevOps",
      icon: git,
    },
    {
      name: "Figma",
      category: "DevOps",
      icon: figma,
    },
    {
      name: "Docker",
      category: "DevOps",
      icon: docker,
    },
    {
      name: "Spark",
      category: "Big Data Processing Framework",
      icon: spark,
    },
    {
      name: "Kafka",
      category: "Big Data Processing Framework",
      icon: kafka,
    },
    
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "LG Electronics",
      icon: lg,
      iconBg: "#383E56",
      date: "Jul 2022 - Aug 2022",
      points: [
        "Developed and implemented operational display interface modules using C/C++, validating their performance and stability through over 1000 test cases and debugging processes to ensure high reliability.",
        "Gained in-depth expertise in On-Screen Display (OSD) and Extended Display Identification Data (EDID) concepts through comprehensive source code analysis.",
        "Acquired a strong proficiency in display screen production protocols, mastering industry-specific terminology standards.",
        "Collaborated with cross-functional teams to enhance overall display system integration and performance.",
      ],
    },
    {
      title: "Undergraduate Research Assistant",
      company_name: "MadAbility Lab",
      icon: uw_madison,
      iconBg: "white",
      date: "Dec 2023 - Aug 2024",
      points: [
        "Developed and evaluated an AR navigation system using HoloLens, implementing customizable overlays and instructions to assist low vision users with indoor navigation",
        "Conducted comprehensive user studies with low vision participants, collecting and analyzing both quantitative and qualitative data through structured testing protocols and a detailed codebook.",
        "Led iterative system improvements through HCI research methods, including user feedback analysis and continuous design refinements, resulting in enhanced navigation accuracy and user satisfaction",
      ],
    },
    {
      title: "Frontend Developer Intern",
      company_name: "Meituan",
      icon: meituan,
      iconBg: "#383E56",
      date: "Jul 2024 - Sep 2024",
      points: [
        "Enhanced SaaS Membership Module: Delivered new features including export alert records and enabling batch/individual modifications of card-issuing stores, resulting in an 80% reduction in processing time.",
        "Refactored Membership Agreement & Gift Card Store List: Restructured the codebase using Alibaba Formily and Limo frameworks, reducing system complexity by 25% and addressing legacy front-end issues.",
        "Optimized UI & Form Functionality: Refined the time selector and query parameter backfill, leading to a 40% increase in form completion rates in the membership management system.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "BadgerChatroom",
      description:
        "A web-based chatboard that allow badgers to login, logout, create and delete posts across various chatrooms, providing a convenient and efficient platform for communication inside the college.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "Postman",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Junru281/BadgerChatroom",
    },
    {
      name: "AI-Game-Teeko-Player",
      description:
        'An AI opponent named "Samaritan" employs the Minimax algorithm to evaluate potential moves, offering users a challenging and strategic gameplay experience in the game of Teeko. ',
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Junru281/AI-Game-TeeKo-Player-",
    },
    {
      name: "Interactive Criminal Database Menu",
      description:
        "A straightforward menu-driven interface for managing criminal records, featuring functionalities such as data loading, search capabilities, graphical poster generation, analytics presentation, and fraud detection. ",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "JavaFX",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Junru281/Criminal-Database-Menu",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };