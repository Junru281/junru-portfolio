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
    lg,
    AI_Teeko,
    badgerChatroom,
    criminalDatabase,
    vuejs,
    uw_madison_1,
  } from "../assets";
  import { styles } from "../styles";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "education",
      title: "Education",
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
        <>
        Developed and implemented operational display interface modules using C/C++, 
        validating their performance and stability through 
        <span className={`${styles.highlightText}`}> over 1000 test cases </span> and debugging processes to ensure high reliability.
        </>,
        <>
          Gained in-depth expertise in <span className={`${styles.highlightText}`}> On-Screen Display (OSD) </span> and <span className={`${styles.highlightText}`}> Extended Display Identification Data (EDID)</span> concepts through comprehensive source code analysis.
        </>,
        "Acquired a strong proficiency in display screen production protocols, mastering industry-specific terminology standards.",
        "Collaborated with cross-functional teams to enhance overall display system integration and performance.",
      ],
    },
    {
      title: "Undergraduate Research Assistant",
      company_name: "MadAbility Lab",
      icon: uw_madison_1,
      iconBg: "white",
      date: "Dec 2023 - Aug 2024",
      points: [
        <>
          Developed and evaluated <span className={`${styles.highlightText}`}>an AR navigation system</span> using <span className={`${styles.highlightText}`}>HoloLens</span>,
          implementing customizable overlays and instructions to assist<span className={`${styles.highlightText}`}> low vision users</span> with <span className={`${styles.highlightText}`}>indoor navigation</span>
        </>,
        <>
          Conducted <span className={`${styles.highlightText}`}>comprehensive user studies</span> with low vision participants, collecting and analyzing both <span className={`${styles.highlightText}`}>quantitative</span> and <span className={`${styles.highlightText}`}>qualitative</span> data through structured testing protocols and a detailed codebook.
        </>,
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
        <>
          <span className="font-bold">Delivered new features</span> for <span className={`${styles.highlightText}`}>SaaS Membership Module</span> including export alert records and enabling batch/individual modifications of card-issuing stores, resulting in an<span className={`${styles.highlightText}`}> 80% reduction</span> in processing time.
        </>,
        <>
          <span className="font-bold">Restructured the codebase</span> using <span className={`${styles.highlightText}`}>Alibaba Formily</span> and <span className={`${styles.highlightText}`}>Limo</span> frameworks for Membership Agreement & Gift Card Store List pages, <span className={`${styles.highlightText}`}>reducing system complexity by 25%</span> and addressing legacy front-end issues.
        </>,
        <>
          <span className="font-bold">Optimized Form UI and functionality </span> such as the time selector and <span className={`${styles.highlightText}`}>the query parameter backfill process</span>, leading to a <span className={`${styles.highlightText}`}>40% increase</span> in form completion rates.
        </>,
        <>
          <span className="font-bold">Collaborated with cross-functional teams</span> including designers, product managers, and other developers to create high-quality products.
        </>,
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
        <>
          A <span className={`${styles.highlightText}`}>web-based chatboard</span> that allow badgers to <span className={`${styles.highlightText}`}>login</span>, <span className={`${styles.highlightText}`}>logout</span>, <span className={`${styles.highlightText}`}>create</span> and <span className={`${styles.highlightText}`}>delete posts</span>  across various chatrooms, providing a convenient and efficient platform for communication inside the college.
        </>,
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
      image: badgerChatroom,
      source_code_link: "https://github.com/Junru281/BadgerChatroom",
    },
    {
      name: "AI-Game-Teeko-Player",
      description:
        <>
          An AI opponent named <span className={`${styles.highlightText}`}>Samaritan</span> employs the <span className={`${styles.highlightText}`}>Minimax</span> algorithm to evaluate potential moves, offering users a challenging and strategic gameplay experience in the game of <span className={`${styles.highlightText}`}>Teeko</span>.
        </>,
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
      ],
      image: AI_Teeko,
      source_code_link: "https://github.com/Junru281/AI-Game-TeeKo-Player-",
    },
    {
      name: "Interactive Criminal Database Menu",
      description:
        <>
          A straightforward <span className={`${styles.highlightText}`}>menu-driven interface</span> for managing criminal records, featuring functionalities such as data loading, <span className={`${styles.highlightText}`}>search </span>capabilities, <span className={`${styles.highlightText}`}> dynamic poster </span>generation, <span className={`${styles.highlightText}`}>analytics </span>presentation, and <span className={`${styles.highlightText}`}>fraud detection</span>.
        </>,
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
      image: criminalDatabase,
      source_code_link: "https://github.com/Junru281/Criminal-Database-Menu",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };