import { DetailedExperience, ExperienceItem } from "./interfaces";

export const skills: string[] = [
  "Javascript",
  "Typescript",
  "ReactJs",
  "Redux",
  "Redux toolkit",
  "Redux-thunk",
  "Redux Saga",
  "VueJs",
  "Vuex",
  "GraphQL",
  "NextJs",
  "HTML5 & CSS3",
  "SASS",
  "Tailwind CSS",
  "MUI",
  "C++",
  "NodeJs",
  "ExpressJs",
  "Java",
  "Git",
  "Storybook",
  "Algorithm & Data Structures",
  "Compitetive Programming",
  "Operation System",
  "DBMS",
  "OOPs",
  "System Design",
  "RESTful APIs",
  "MYSQL",
  "MongoDB",
];

export const projects = [
  {
    year: "2022-Present",
    name: "Speed",
    company: "Openxcell - AI Development Company",
    url: "https://www.tryspeed.com",
    tech: [
      "JavaScript",
      "TypeScript",
      "ReactJs",
      "Postgre SQL",
      "redux",
      "redux-thunk",
      "redux-toolkit",
      "NextJs",
      "NodeJs",
      "ExpressJs",
    ],
    description:
      "Speed Bitcoin Lightning Wallet is a mobile and web application that aims to provide a simple, fast, and secure way to send, receive, and manage Bitcoin and USDT payments, potentially including features like shopping for e-gift cards and earning rewards.",
  },
  {
    year: "2021-2022 ",
    name: "Augmentiv",
    company: "Krishaweb Technologies",
    url: "https://www.augmentiv.io/",
    tech: ["JavaScript", "TypeScript", "ReactJs", "redux", "redux-thunk"],
    description:
      "Augmentiv is the smartest all-in-one tutoring management and scale up platform designed for ambitious educators running their own, part-time or full-time, independent tutoring practice. Successful tutors around the world use Augmentiv to re-focus on their teaching and student outcomes.",
  },
  {
    year: "2021-2022",
    name: "News Cosmos",
    company: "Krishaweb Technologies",
    url: "https://www.newscosmos.com",
    tech: [
      "JavaScript",
      "TypeScript",
      "ReactJs",
      "redux",
      "GraphQL",
      "redux-thunk",
    ],
    description:
      "News Cosmos is a trusted platform for news discussion and where you can create or join business and personal communities. It is a place where you can share your thoughts and ideas with like-minded people.",
  },
  {
    year: "2021-2021",
    name: "Beyondlabbz Gases",
    company: "Zeus Learning",
    url: "https://www.beyondlabz.com/",
    tech: ["Javascript", "VueJs", "Vuex", "PixiJs"],
    description:
      "Virtual Labs, Real Science. Hundreds of Biology, Chemistry and Physics experiments. Curriculum aligned worksheet activities. Students can really discover chemistry and see how things react (or don't) and even perform classic experiments we currently only talk about Calorimetry.",
  },
];

export const certificates = [
  {
    title: "Namste React JS Course Completion Certificate",
    fileName: "namaste-react.jpg",
  },
  {
    title: "Hacerrank Problem Solving Certificate",
    fileName: "hackerrank_problem_solving_certificate.jpg",
  },
];

export const detailExperiences: DetailedExperience[] = [
  {
    period: "June 2022 — Present",
    company: "Speed",
    logo: "https://sanyam-jain16.github.io/portfolio/images/experiences/speed-img.svg",
    role: "Software Engineer",
    companyUrl: "https://www.tryspeed.com/",
    description: [
      "<b>Working on a product Speed</b> which is a Bitcoin payment application where merchants can accept payment as a lightning and on-chain payment, payout, create checkout-link, checkout-session, withdrawal, payment links, etc.",
      "Responsible for implementing enhancements and bug fixes while maintaining codebase consistency and <b>optimizing to microfronted</b> for large production data.",
    ],
    technologies: [
      "ReactJs",
      "Redux",
      "NextJs",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
      "MySQL",
      "Typescript",
      "Javascript",
      "Storybook",
      "MUI",
      "SASS",
    ],
    responsibilities: [
      "Revamped the entire admin panel to enhance usability and performance. Implemented complex data filtering for efficient search and developed key features, including loopout via Boltz, transfer, and promo code functionality.",
      "Managed standard and restricted keys, implemented comprehensive logging systems, and streamlined user onboarding processes for enhanced security and user experience on the website.",
      "Headed the design, development, and implementation of a Bitcoin payout system which includes auto and manual payouts using React, ensuring seamless transfer of bitcoins to predefined wallet addresses.",
    ],
    challenges: [
      {
        title: "Performance Optimization",
        description:
          "The application was experiencing slow response times with large transactions, affecting user experience.",
        solution:
          "Processed automation features that surpassed the transaction efficiency by 40%, reducing manual transaction time by 50%.",
      },
      {
        title: "Issue Resolution",
        description: "Faced complex issues with showing amount.",
        solution:
          "Implemented a common function to show the amount in different fiat currencies(INR, USD, etc), BTC and SATS, etc.",
      },
    ],
    achievements: [
      "Created an NPM library for one-click payment integration, increasing developer integration efficiency by 25% for speed checkout.",
      "Created a web wallet application sigle handedly for BTC, ETH, and USDT, enhancing user experience and increasing transaction volume by 30%.",
    ],
  },
  {
    period: "May 2021 — May 2022",
    company: "Krishaweb Technologies",
    logo: "https://sanyam-jain16.github.io/portfolio/images/experiences/krishaweb-logo.jpg",
    role: "Frontend Developer",
    companyUrl: "https://www.krishaweb.com/",
    description: [
      "Contributed to the Augmentiv e-learning project by developing live classes, resources, and assignment features for tutors and students.",
      "<b> Follow agile methodologies, standups, scrum meetings and requirements analysis </b> for key projects, managing project timelines, and mentoring junior developers, resulting in a 25% reduction in feature delivery time.",
      "<b>News or blog posting platform optimization</b>: and bug fixes.",
      "<b>Handle Social logins</b>: Upgraded functionality for a login to platform via social login Facebook and Google, boosting user engagement by 25% and improving platform adoption and user experience.",
    ],
    technologies: [
      "ReactJs",
      "Redux",
      "Redux-Saga",
      "Javascript",
      "Graphql",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    responsibilities: [
      "Implemented the cart functionality, tailored to meet specific client requirements, resulting in a 30% increase in checkout efficiency.",
      "Developed a feature enabling the creation of communities and the addition of students to these communities, optimizing user engagement by 40%.",
      "Augmented an NPM library for an interactive whiteboard, enabling features such as writing, colour options, and erasing capabilities,enhancing user interaction efficiency by 25%.",
      "Seamlessly integrated the whiteboard library into classroom sessions for teachers, facilitating class extension and management, video on/off, mute/unmute, improving teaching efficiency by 50%.",
    ],
    challenges: [
      {
        title: "Performance Optimization",
        description:
          "The application was experiencing slow response times with less optimized code, affecting user experience.",
        solution:
          "Implemented common functions and components, and reuse them, resulting in a 40% improvement in response times.",
      },
      {
        title: "Library Integration",
        description: "Faced complex issues with NPM library.",
        solution:
          "Implemented and upgrade the library as per the client requirement in which have faced a lot of issues with that so solve them with research and analysis.",
      },
    ],
    achievements: [
      "Augmented an NPM library for an interactive whiteboard, enabling features such as writing, colour options, and erasing capabilities,enhancing user interaction efficiency by 25%.",
      "Successfully migrated a multilingual in a project to use them according to the user location.",
    ],
  },
  {
    period: "January 2021 — April 2021",
    company: "Zeus Learning",
    logo: "https://sanyam-jain16.github.io/portfolio/images/experiences/zeus-img.png",
    role: "Software Developer Intern",
    companyUrl: "http://zeuslearning.com/",
    description: [
      "<b>Led client communication and requirements analysis </b> for key projects, managing project timelines, and resulting in a 25% reduction in feature delivery time.",
      "<b>Core Developer of Chemistry gas lab project</b>: Impletement gas lab with pixijs and vuejs, which is a virtual lab for chemistry students to learn about gas laws and gas properties.",
    ],
    technologies: ["VueJs", "Vuex", "PixiJs", "Javascript", "HTML", "CSS"],
    responsibilities: [
      "Contributed to the BeyondLabz Gases e-learning product, developing interactive chemistry gas lab simulations for enhanced student learning.",
      "Designed and developed a pixel-perfect virtual chemistry gas lab, optimizing student and teacher experience in conducting gas experiments seamlessly.",
      "Managed client communications, ensuring transparency and client satisfaction by providing daily work updates and facilitating discussions in routine meetings",
    ],
    challenges: [
      {
        title: "Learn VueJs",
        description:
          "Need to learn the VueJs for the project and how to implement it.",
        solution:
          "Learn and impletmented VueJs for the project, which is a progressive JavaScript framework for building user interfaces.",
      },
      {
        title: "Learn PixiJs and canvas",
        description: "Need to learn the pixi and canvas for the project.",
        solution:
          "Learn and impletmented PixiJs and canvas for the project, which is a 2D rendering engine for creating interactive graphics and animations.",
      },
    ],
    achievements: [
      "Communication with clients and team members, ensuring transparency and client satisfaction by providing daily work updates and facilitating discussions in routine meetings.",
      "Successfully implemented a virtual chemistry gas lab, enhancing student learning and engagement in chemistry concepts.",
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    period: "June 2022 — Present",
    company: "Speed",
    logo: "https://sanyam-jain16.github.io/portfolio/images/experiences/speed-img.svg",
    role: "Software Engineer",
    companyUrl: "https://www.tryspeed.com/",
    description: [
      "<b>Working on a product Speed</b> which is a Bitcoin payment application where merchants can accept payment as a lightning and on-chain payment, payout, create checkout-link, checkout-session, withdrawal, payment links, etc.",
      "Responsible for implementing enhancements and bug fixes while maintaining codebase consistency and <b>optimizing to micro-fronted</b> for re-usable components.",
    ],
    technologies: [
      "ReactJs",
      "Redux",
      "NextJs",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
      "MySQL",
      "Typescript",
      "Javascript",
      "Storybook",
      "MUI",
      "SASS",
    ],
  },
  {
    period: "May 2021 — May 2022",
    company: "Krishaweb Technologies",
    logo: "https://sanyam-jain16.github.io/portfolio/images/experiences/krishaweb-logo.jpg",
    role: "Frontend Developer",
    companyUrl: "https://www.krishaweb.com/",
    description: [
      "Contributed to the Augmentiv e-learning project by developing live classes, resources, and assignment features for tutors and students.",
      "<b> Follow agile methodologies, standups, scrum meetings and requirements analysis </b> for key projects, managing project timelines, and mentoring junior developers, resulting in a 25% reduction in feature delivery time.",
      "<b>News or blog posting platform optimization</b>: and bug fixes.",
      "<b>Handle Social logins</b>: Upgraded functionality for a login to platform via social login Facebook and Google, boosting user engagement by 25% and improving platform adoption and user experience.",
    ],
    technologies: [
      "ReactJs",
      "Redux",
      "Redux-Saga",
      "Javascript",
      "Graphql",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
  },
  {
    period: "January 2021 — April 2021",
    company: "Zeus Learning",
    logo: "https://sanyam-jain16.github.io/portfolio/images/experiences/zeus-img.png",
    role: "Software Developer Intern",
    companyUrl: "http://zeuslearning.com/",
    description: [
      "<b>Led client communication and requirements analysis </b> for key projects, managing project timelines, and mentoring junior developers, resulting in a 25% reduction in feature delivery time.",
      "<b>Core Developer of RLDataCoach</b>: Developed a coaching algorithm that analyzes Rocket League gameplay, identifying 60+ in-game events per replay. Benchmarked over 20,000 replays to deliver personalized, rank-specific training recommendations.",
      "<b>E-commerce Platform Optimization</b>: Integrated payment services, campaign modules, and AWS solutions (Lambda, SQS, SNS, S3), driving a 30% increase in sales and improving operational efficiency by 40%",
      "<b>Social Media Platform Enhancement</b>: Upgraded functionality for a volunteer organization's platform, boosting user engagement by 25% and improving platform adoption and user experience.",
    ],
    technologies: ["VueJs", "Vuex", "PixiJs", "Javascript", "HTML", "CSS"],
  },
];

export const highlightedProjects = [
  {
    title: "Speed",
    description:
      "Speed Bitcoin Lightning Wallet is a mobile and web application that aims to provide a simple, fast, and secure way to send, receive, and manage Bitcoin and USDT payments, potentially including features like shopping for e-gift cards and earning rewards.",
    thumbnailFileName: "speed-img.svg",
    link: "https://tryspeed.com",
  },
  {
    title: "Augmentiv",
    description:
      "Augmentiv is the smartest all-in-one tutoring management and scale up platform designed for ambitious educators running their own, part-time or full-time, independent tutoring practice. Successful tutors around the world use Augmentiv to re-focus on their teaching and student outcomes.",
    thumbnailFileName: "augmentiv_logo.jpg",
    link: "https://www.augmentiv.io/",
  },
  {
    title: "News Cosmos",
    description:
      "News Cosmos is a trusted platform for news discussion and where you can create or join business and personal communities. It is a place where you can share your thoughts and ideas with like-minded people.",
    thumbnailFileName: "news-cosmos-logo.png",
    link: "https://newscosmos.com/",
  },
  {
    title: "Beyondlabz Gases",
    description:
      "Virtual Labs, Real Science. Hundreds of Biology, Chemistry and Physics experiments. Curriculum aligned worksheet activities. Students can really discover chemistry and see how things react (or don't) and even perform classic experiments we currently only talk about Calorimetry.",
    thumbnailFileName: "beyondLabz_logo.png",
    link: "https://www.beyondlabz.com/",
  },
];
