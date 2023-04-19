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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    crm,
    jobit,
    Pokedex,
    threejs,
    Ecommer
  } from "../assets";
  
  export const navLinks = [
    {
      id: "MyStory",
      title: "My story",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
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
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data arquitect",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Intern in the mainteinence management department ",
      company_name: "Destilerias Unidas S.A",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "In charge of carrying out the monthly maintenance plan.",
        "Responsible for the maintenance management KPI of the packaging area.",
        "-In charge of making CAD blueprints for projects in the packaging area."
      ],
    },
    {
      title: "Production Manager",
      company_name: "K lors C.A",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Sep 2019 - Sep 2020",
      points: [
        "Desing and develop new products.",
        "Speak to clients for better understanding of their needs.",
        "Estimate cost of production.",
      ],
    },
    {
      title: "Planning Director",
      company_name: "K lors C.A",
      icon: shopify,
      iconBg: "#383E56",
      date: "Sep 2020 - Jan 2023",
      points: [
        "I was in charge of the develop of the strategic plans for the company.",
        "I lead the activities that maked the expansion of the company to Mexico",
      ],
    },

  ];
  
  
const projects = [
  {
    name: "ECOMMERCE",
    description:
      "Web-based platform that allows users to search,purchase, and manage they order from a store,I made all the Frontend and the Backend of the project.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Boostrap",
        color: "pink-text-gradient",
      },
    ],
    image: Ecommer,
    source_code_link: "https://github.com/",
  },
  {
    name: "CRM for a Factory",
    description:
      "Web application that enables users to create job tickets, manage inventory, control the workflow,and show graphs of the data.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Node.ss",
        color: "pink-text-gradient",
      },
    ],
    image: crm,
    source_code_link: "https://github.com/",
  },
  {
    name: "Pokedex",
    description:
      "A website that use and API, for showing a list Pokemon with his dat, and filter them by category,  ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Apirest",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Pokedex,
    source_code_link: "https://github.com/gustavos05/pokeNew/tree/main/EntregablePokedex",
  },
];


  export { services, technologies, experiences, projects };