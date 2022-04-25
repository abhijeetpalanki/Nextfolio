import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { SiBlender } from "react-icons/si";
import { IoLogoGameControllerB } from "react-icons/io";
import { BsCircleFill } from "react-icons/bs";
import { IService, ISkill, IProject } from "./type";
import { AiOutlineApi } from "react-icons/ai";

export const services: IService[] = [
  {
    title: "Front-End Web Design",
    about:
      "The design of the graphical user interface of a website, through the use of <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>, so that users can view and interact with that website.",
    Icon: RiComputerLine,
  },
  {
    title: "Back-End Development",
    about:
      "The server side of an application and everything that communicates between the database and the browser using <b>C#</b>, <b>.NET Technologies</b>, and <b>SQL Server</b>.",
    Icon: FaServer,
  },
  {
    title: "API Development",
    about:
      "Develop robust REST API using <b>ASP.NET Web API</b>, also integrate using <b>React Fetch API</b>, and <b>Angular HTTP Client Module</b> ",
    Icon: AiOutlineApi,
  },
  {
    title: "3D Animations",
    about:
      "Create three-dimensional models, animations, motion graphics and visual effects to be used in various creative projects such as video games using <b> Blender</b>.",
    Icon: SiBlender,
  },
  {
    title: "Game Development",
    about:
      "Design and build games using <b> UNITY</b> which is a game engine that is used to produce beginner level 2D games.",
    Icon: IoLogoGameControllerB,
  },
];

export const languages: ISkill[] = [
  {
    name: "C#",
    level: "90%",
    Icon: BsCircleFill,
  },
  {
    name: "Javascript",
    level: "75%",
    Icon: BsCircleFill,
  },
  {
    name: "React",
    level: "75%",
    Icon: BsCircleFill,
  },
  {
    name: "Bootstrap",
    level: "90%",
    Icon: BsCircleFill,
  },
  {
    name: "Web API",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "ASP.NET MVC",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "SQL Server",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Vue JS",
    level: "60%",
    Icon: BsCircleFill,
  },
];

export const tools: ISkill[] = [
  {
    name: "Blender",
    level: "50%",
    Icon: BsCircleFill,
  },
  {
    name: "Illustrator",
    level: "45%",
    Icon: BsCircleFill,
  },
  {
    name: "Photoshop",
    level: "40%",
    Icon: BsCircleFill,
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "Effects",
    description:
      "CSS 3D transforms with depth and visually interesting elements on the page using CSS effects and animations.",
    image_path: "/images/effects.png",
    deployed_url: "https://abhijeetpalanki-3d-effects.netlify.app/",
    github_url: "https://github.com/abhijeetpalanki/3D-Effects",
    category: ["react"],
    key_techs: ["React", "CSS", "Material UI"],
  },
  {
    id: 2,
    name: "Code Pen",
    description:
      "CodePen is a clone for testing and showcasing user-created HTML, CSS and JavaScript code snippets.",
    image_path: "/images/codepen.png",
    deployed_url: "https://abhijeetpalanki-codepen.netlify.app/",
    github_url: "https://github.com/abhijeetpalanki/codepen",
    category: ["react"],
    key_techs: ["React", "Code Mirror", "Font Awesome", "CSS"],
  },
  {
    id: 3,
    name: "Beat Maker",
    description: "Create quality beats easily with just one tap and have fun.",
    image_path: "/images/beatmaker.png",
    deployed_url: "https://abhijeetpalanki-beatmaker.netlify.app/",
    github_url: "https://github.com/abhijeetpalanki/Beat-Maker",
    category: ["javascript"],
    key_techs: ["Javascript", "CSS"],
  },
  {
    id: 4,
    name: "Pin Circle",
    description:
      "How many circles you can pass through? How many dots can you shoot and pin in speeding circle?",
    image_path: "/images/game.png",
    deployed_url: "",
    github_url: "https://github.com/abhijeetpalanki/Pin-IT-Game",
    category: ["unity"],
    key_techs: ["Unity", "C#", "Inno Setup"],
  },
  {
    id: 5,
    name: "2048",
    description:
      "2048 is a clone for single-player sliding tile puzzle video game.",
    image_path: "/images/2048.png",
    deployed_url: "https://abhijeetpalanki-2048.netlify.app/",
    github_url: "https://github.com/abhijeetpalanki/2048",
    category: ["react"],
    key_techs: ["React", "CSS"],
  },
  {
    id: 6,
    name: "Budget Calculator",
    description:
      "Budget Calculator evaluates the components of a personal budget and highlights which specific areas need improvement.",
    image_path: "/images/ngbudget.png",
    deployed_url: "https://abhijeetpalanki-ngbudget.netlify.app/",
    github_url: "https://github.com/abhijeetpalanki/Budget-Calc",
    category: ["angular"],
    key_techs: ["Angular", "SCSS"],
  },
  {
    id: 7,
    name: "Tic Tac Toe",
    description:
      "A game in which two players seek in alternate turns to complete a row, a column, or a diagonal with either three O's or three X's drawn in the spaces of a grid of nine squares; noughts and crosses.",
    image_path: "/images/xoxo.png",
    deployed_url: "https://abhijeetpalanki-xoxo.netlify.app/",
    github_url: "https://github.com/abhijeetpalanki/xoxo",
    category: ["react"],
    key_techs: ["React", "CSS"],
  },
  {
    id: 8,
    name: "React Flix",
    description:
      "An online database of information related to films, television series, and streaming content online.",
    image_path: "/images/flix.png",
    deployed_url: "https://abhijeetpalanki-react-flix.netlify.app/",
    github_url: "https://github.com/ajpalanki/React-FLIX",
    category: ["react"],
    key_techs: ["React", "Prop-Types", "CSS", "React-Router"],
  },
  {
    id: 9,
    name: "Wordictionary",
    description:
      "An electronic resource that lists the words of a language and gives their meaning, or gives the equivalent words in a different language, also providing information about pronunciation, origin, and usage.",
    image_path: "/images/wordictionary.png",
    deployed_url: "https://abhijeetpalanki-wordictionary.netlify.app/",
    github_url: "https://github.com/abhijeetpalanki/wordictionary",
    category: ["react"],
    key_techs: ["React", "Axios", "CSS"],
  },
  {
    id: 10,
    name: "InQUIZitive",
    description:
      "Answer tricky questions and test your knowledge in various random categories.",
    image_path: "/images/quiz.png",
    deployed_url: "https://abhijeetpalanki-inquizitive.netlify.app/",
    github_url: "https://github.com/ajpalanki/INQUIZITIVE",
    category: ["react"],
    key_techs: ["React", "Materialize-CSS", "Axios", "React-Router"],
  },
  {
    id: 11,
    name: "Space Hunt",
    description:
      "Space Hunt is a shooter game in the style of sci fi with endless gameplay.",
    image_path: "/images/game.png",
    deployed_url: "",
    github_url: "https://github.com/abhijeetpalanki/Space-Hunt-Game",
    category: ["unity"],
    key_techs: ["Unity", "C#", "Inno Setup"],
  },
  {
    id: 12,
    name: "Entertainment Hub",
    description:
      "Entertainment Hub provides information about millions of films and television programs as well as their cast and crew.",
    image_path: "/images/hub.png",
    deployed_url: "https://abhijeetpalanki-entertainment-hub.netlify.app/",
    github_url: "https://github.com/abhijeetpalanki/Entertainment-Hub",
    category: ["react"],
    key_techs: ["React", "Axios", "CSS", "React-Router"],
  },
];
