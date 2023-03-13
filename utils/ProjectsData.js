import covid from "../public/Images/covid.png";
import starwars from "../public/Images/starwars.jpg";
import shopp from "../public/Images/shopp.gif";
import Realestate from "../public/Images/Realestate.jpg";
import Tiktak from "../public/Images/Capture.jpg";
import netflix from "../public/Images/netflix.jpg";
import quiz from "../public/Images/quiz.png";
import invoice from "../public/Images/invoice.png";
import event from "../public/Images/event.png";
import crypto from "../public/Images/cryptotracker.png";

const PROJECTS_DATA = [
  {
    title: "Starwars Casts",
    about:
      "This is an application built with Nextjs, React e.t.c. that displays the list of starwars casts, It generates the data asynchronously from swapi.dev API with some advanced filtering functionalities.",
    description:
      "This is an application built with Nextjs, React e.t.c. that displays the list of starwars casts, It generates the data asynchronously from swapi.dev API with some advanced filtering functionalities.",
    link: "https://starwars-casts.web.app/",
    github: "https://github.com/Adekunle27/Starwars-Cast",
    imageUrl: starwars,
    type: "projects",
    technologies: ["Typescript", "Rollup", "React", "Nextjs"],
  },

  {
    title: "Netflix Clone",
    description: "A Clone of Netflix using React, Context API...",
    github: "https://github.com/Adekunle27/Netflix-clone",
    about:
      "A Clone of Netflix using React, Context API which fetches data from TMDB API and It also has a login page which authenticates users with Firebase Authentication. It also has a payment page which uses Stripe API for payment.",
    link: "https://netflixclone-56432.web.app/",
    imageUrl: netflix,
    type: "projects",
    technologies: ["React", "Redux Saga", "Javascript", "Firebase"],
  },
  {
    title: "Shopp",
    description: "An E-commerce Application For Buying Cotton Products.",
    github: "https://github.com/Adekunle27/shopp",
    about:
      "Shoprrr is an e-commerce platform catered towards giving the best and fast experience for customers to buy cotton products, we call it a frictionless process from start to finish.",
    link: "https://shoprrr.netlify.com",
    imageUrl: shopp,
    type: "projects",
    technologies: ["React", "Redux Saga", "Javascript", "Firebase"],
  },
  {
    title: "Quizly",
    description: "A fun Quiz Application with different option.",
    github: "https://github.com/Adekunle27/Quizly",
    about:
      "This is a quiz application built with React and TailwindCSS. You can select the category of questions you want to answer, the number of questions and the difficulty level of the questions. It also has a theme toggler which is enabled by TailwindCSS.  ",
    link: "https://quizly-psi.vercel.app/",
    imageUrl: quiz,
    type: "projects",
    technologies: ["React", "Redux Saga", "Javascript", "Firebase"],
  },
  {
    title: "Covid-19 Tracker",
    description:
      "This Project tracks the various COVID Cases recorded in the countries of the world",
    link: "https://corona-vir-tracker.netlify.app/",
    github: "https://github.com/Adekunle27/Covid-Tracker",
    about:
      "This Project tracks the various COVID Cases recorded in the countries of the world, The Technology used in this projects are React, Hooks, Charts.JS, Material UI and many more.",
    imageUrl: covid,
    type: "projects",
    technologies: ["React", "ChartJS", "Material UI", "Javascript"],
  },
  {
    title: "Cryptocurrency Tracker",
    description:
      "This application is built with ReactJs, ChartJS, Material UI to track the price and other",
    link: "https://crypto-hunter.netlify.app/",
    github: "https://github.com/Adekunle27/Crypto-Tracker",
    about:
      "This application is built with ReactJs, ChartJS, Material UI to track the price and other information about the different cryptocurrencies.",
    imageUrl: crypto,
    type: "projects",
    technologies: ["React", "ChartJS", "Material UI", "Javascript"],
  },
  {
    title: "Real Estate",
    description:
      "A Real estate app which has different functionality present in a Real estate website or app, It fetches data from Rapid API and displayed on the UI",
    about:
      "This is a Real estate app which has different functionality present in a Real estate website or app, It fetches data from Rapid API and displayed on the UI",
    link: "https://realtor.vercel.app/",
    github: "https://github.com/Adekunle27/Real-Estate",
    imageUrl: Realestate,
    type: "projects",
    technologies: ["React", "Redux", "Ant Design"],
  },
  {
    title: "Invoice Generator",
    description:
      "An Invoice creator project built with React. Add itemized items, configure quantity, prices, tax rates and discounts.",
    about:
      "An Invoice creator project built with React. Add itemized items, configure quantity, prices, tax rates and discounts. Download Invoice as PDFs to your device. Uses jspdf-react to capture the data from the modal and covert it from canvas -> pdf.",
    link: "https://invoice-generator-react.netlify.app/",
    github: "https://github.com/Adekunle27/Invoice-Generator",
    imageUrl: invoice,
    type: "projects",
    technologies: ["React", "Redux", "Ant Design"],
  },
  {
    title: "Tic-Tac-Toe Game",
    description:
      "This is a Game application built with React,  It has a simple UI and it can be played with the exception of playing against an algorithm or against a friend.",
    about:
      "This is a Game application built with React,  It has a simple UI and it can be played with the exception of playing against an algorithm or against a friend.",
    link: "https://my-ttt.netlify.app/",
    github: "https://github.com/Adekunle27/Tic-tac-toe",
    imageUrl: Tiktak,
    type: "projects",
    technologies: ["React", "Context API", "Ant Design"],
  },
  {
    title: "DJ Events",
    description:
      "This is an event management website built with Nextjs to list DJ and other musical events happening around.",
    about:
      "This is an event management website built with Nextjs to list DJ and other musical events happening around.",
    link: "https://djeventsfrontend.vercel.app/",
    github: "https://github.com/Adekunle27/Dj-Events",
    imageUrl: event,
    type: "projects",
    technologies: ["React", "Context API", "Ant Design"],
  },

  {
    title: "Truegiven",
    description: "Addressing current and future workforce needs.",
    about:
      "True Given helps people gain more control of their finances by connecting people to organizations providing direct and immediate assistance to families and individuals who desperately require a modest helping hand.",
    link: "https://truegiven.com",
    imageUrl:
      "https://i.ibb.co/LnCz8Vx/Screen-Shot-2019-11-23-at-2-24-07-PM.png",
    type: "others",
    technologies: ["HTML", "CSS", "Javascript", "Compiled HTML"],
  },
  {
    title: "Freespace (WIP)",
    description: "100% Anonymously tell the world your mind.",
    about:
      "Freespace can be utilized as your own safe place where you can freely un-conceal your thoughts and emotions without any apprehensions. ",
    link: "https://freespaace.com",
    imageUrl: "https://i.ibb.co/q5ZDjLd/image.png",
    type: "others",
    technologies: ["React", "Redux", "Javascript", "Firebase"],
  },
  {
    title: "Liveizy",
    description: "Manage all your properties in one place.",
    about:
      "We reduce the cost of living and help you meet your most important living expectations by increasing easy access to all the necessary resources needed to improve living standards.",
    link: "https://liveizy.com",
    imageUrl:
      "https://i.ibb.co/PxwbV5m/Screen-Shot-2019-11-24-at-11-36-52-PM-1.png",
    type: "others",
    technologies: ["HTML", "11ty", "Javascript", "CSS & Sass"],
  },
  {
    title: "EmptyCarafes",
    description: "Experience remorse writing at its amazing peak.",
    about:
      "Empty Carafes is a content platform which allows readers to engage in a wide range of dynamic and innovative ideas expressed through different art forms.",
    link: "https://emptycarafes.io",
    imageUrl: "https://i.ibb.co/0CLmWNj/Dribbble-shot-HD-ss-1.png",
    type: "others",
    technologies: ["HTML", "11ty", "Javascript", "CSS & Sass", "A11y"],
  },

  {
    title: "70Shops",
    description:
      "Helps business owners create an eCommerce platform for their businesses.",
    about:
      "We are introducing a set of tools that will help grow the merchants' businesses in Africa especially. Our tools will be able to effectively manage the general operations of these merchants and provide them with analytical data to help streamline the growth of their businesses.",
    link: "https://70shops.com",
    imageUrl:
      "https://i.ibb.co/q939Wxd/Screen-Shot-2019-11-23-at-2-27-08-PM.png",
    type: "others",
    technologies: ["HTML", "11ty", "Javascript", "CSS & Sass", "A11y"],
  },
];

export default PROJECTS_DATA;
