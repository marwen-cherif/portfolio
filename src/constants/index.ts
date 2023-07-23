import {
  addstones,
  azure,
  backend,
  css,
  docker,
  frontend,
  graphql,
  html,
  javascript,
  jest,
  nextJs,
  nodejs,
  postgresql,
  prototyping,
  reactjs,
  redux,
  revers,
  styledComponents,
  talan,
  typescript,
  ux,
} from "../assets/index.ts";

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Prototyping",
    icon: prototyping,
  },
  {
    title: "Design System",
    icon: ux,
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
    name: "Next",
    icon: nextJs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "graphql",
    icon: graphql,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "Styled-components",
    icon: styledComponents,
  },
  {
    name: "Jest",
    icon: jest,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Azure",
    icon: azure,
  },
];

const experiences = [
  {
    title: "Fullstack web developer",
    company_name: "Talan",
    icon: talan,
    iconBg: "#EAEAEC",
    date: "Jul 2014 - Jan 2018",
  },
  {
    title: "RPA developer",
    company_name: "Addstones",
    icon: addstones,
    iconBg: "#EAEAEC",
    date: "Feb 2018 - Jun 2019",
  },
  {
    title: "Front-end developer",
    company_name: "ReversIO",
    icon: revers,
    iconBg: "#EAEAEC",
    date: "Jul 2019 - Jul 2023",
  },
  {
    title: "Front-end team lead",
    company_name: "ReversIO",
    icon: revers,
    iconBg: "#EAEAEC",
    date: "Jul 2023 - Present",
  },
];

export interface Project {
  id: string;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  repo: string;
  demo: string;
}

const projects: Project[] = [
  // {
  //   id: "project-1",
  //   name: "KomiKult",
  //   description: "A comic characters list app that displays Marvel characters.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: "/src/assets/projects/komikult.png",
  //   repo: "https://github.com/shaqdeff/KomiKult",
  //   demo: "https://shaqdeff.github.io/KomiKult/",
  // },
  // {
  //   id: "project-2",
  //   name: "Leaderboard",
  //   description:
  //     "A leaderboard list app that displays scores submitted by different players.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: "/src/assets/projects/leaderboard.png",
  //   repo: "https://github.com/shaqdeff/Leaderboard",
  //   demo: "https://shaqdeff.github.io/Leaderboard/",
  // },
  // {
  //   id: "project-3",
  //   name: "Math Magicians",
  //   description: "This is a single-page calculator app built with React",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: "/src/assets/projects/math-magicians.png",
  //   repo: "https://github.com/shaqdeff/Math-Magicians",
  //   demo: "https://inspiring-medovik-37d3b3.netlify.app/",
  // },
  // {
  //   id: "project-4",
  //   name: "Movie Metro",
  //   description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: "/src/assets/projects/movie-metro.png",
  //   repo: "https://github.com/shaqdeff/Movie-Metro",
  //   demo: "https://movie-metro.netlify.app/",
  // },
  // {
  //   id: "project-5",
  //   name: "Nyeusi Fest Site",
  //   description:
  //     "This is a demo concert website for a music festival called Nyeusi.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: "/src/assets/projects/nyeusi.png",
  //   repo: "https://github.com/shaqdeff/Nyeusi-Fest-Site",
  //   demo: "https://shaqdeff.github.io/Nyeusi-Fest-Site/",
  // },
];

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  projects && projects.length > 0
    ? {
        id: "projects",
        title: "Projects",
      }
    : undefined,
  {
    id: "contact",
    title: "Contact",
  },
].filter((x) => x !== undefined) as { id: string; title: string }[];

export { services, technologies, experiences, projects };
