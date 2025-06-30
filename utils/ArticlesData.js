import mistake from "../public/Images/mistake.jpg";
import context from "../public/Images/react-context-api.jpg";
import css from "../public/Images/css.png";
import node from "../public/Images/node-socket.png";
import reactimg from "../public/Images/React.jpg";
import pipeline from "../public/Images/pipeline.png";
import microfrontend from "../public/Images/microfrontend.jpg";
import authentication from "../public/Images/authentication.jpg";
import opensource from "../public/Images/opensource.jpg";
import graphql from "../public/Images/graphql.png";

const ARTICLE_DATA = [
  {
    title: "Getting started with React Context API",
    description:
      "Quick Walkthrough · React Context API is a way to share data between components in a React application without having to pass props down through multiple levels of the component tree. This can be particularly useful for sharing data that is required by many components, such as the currently authenticated user or the application's theme. In this article, we will go over the basics of the React Context API and how to use it in a React application...",
    link: "https://abdulmalik.hashnode.dev/getting-started-with-react-context-api",
    imageUrl: context,
    type: "article",
  },
  {
    title:
      "Implementing Authentication and Authorization using Context API in Next.js",
    description:
      "In today's digital landscape, web applications require robust security measures to protect sensitive user data and ensure proper access control. Authentication and authorization are fundamental components of any secure web application. Authentication is the process of verifying a user's identity, ",
    link: "https://abdulmalik.hashnode.dev/implementing-authentication-and-authorization-using-context-api-in-nextjs-part-1",
    imageUrl: authentication,
    type: "article",
  },
  {
    title: "Revolutionize Your Workflow with Open Source Software - Must Read!",
    description:
      "Open source software (OSS) became a game-changer in my workflow, how I started contributing, the tools I now swear by, and how you, too, can transform your dev journey (and career) by embracing the open-source way.",
    link: "https://abdulmalik.hashnode.dev/revolutionize-your-workflow-with-open-source-software-must-read",
    imageUrl: opensource,
    type: "article",
  },
  {
    title:
      "Unleash the Power of GraphQL APIs: Create Stunning Frontends with Apollo Client",
    description:
      "As a frontend engineer, few things excite me more than creating fast, interactive UIs that talk to powerful backends. One of the most transformative experiences I’ve had in recent years was integrating GraphQL into my frontend workfl...",
    link: "https://abdulmalik.hashnode.dev/unleash-the-power-of-graphql-apis-create-stunning-frontends-with-apollo-client",
    imageUrl: graphql,
    type: "article",
  },
  {
    title: "Accessible Icon Buttons",
    description: "Freelance Front-End Web UI/UX Developer - Lebanon",
    link: "https://www.sarasoueidan.com/blog/accessible-icon-buttons/",
    imageUrl:
      "https://i.ibb.co/mFkMHPZ/Screen-Shot-2019-11-25-at-1-38-58-AM.png",
    type: "reading",
  },
  {
    title: "Continuous deployment of application using CI/CD.",
    description:
      "Continuous Deployment is a software development practice that involves automatically releasing every change made to a codebase to production. This is....",
    link: "https://abdulmalik.hashnode.dev/continuous-deployment-of-application-using-cicd",
    imageUrl: pipeline,
    type: "article",
  },
  {
    title: "Smoother & sharper shadows with layered box-shadows",
    description: "",
    link: "https://tobiasahlin.com/blog/layered-smooth-box-shadows/",
    imageUrl:
      "https://i.ibb.co/MSMpWQL/Screen-Shot-2019-11-25-at-1-49-51-AM.png",
    type: "reading",
  },
  {
    title: "Building a Chat App with Next.js, Node.js and Socket.io",
    description:
      "In this tutorial, we will be building a chat app using Next.js, a popular framework for building server-rendered React applications. This chat app...",
    link: "https://abdulmalik.hashnode.dev/building-a-chat-app-with-nextjs-nodejs-and-socketio",
    imageUrl: node,
    type: "article",
  },
  {
    title: "Don’t be a Junior Developer: The Roadmap",
    description: "Don’t be a Junior Developer: The Roadmap",
    link: "https://zerotomastery.io/blog/dont-be-a-junior-developer-the-roadmap",
    imageUrl: "https://i.ibb.co/t2wy0Qg/279547.jpg",
    type: "reading",
  },
  {
    title: "Go Beyond: A Story of Failure",
    description:
      "Today, I want to share my story in hopes that it might inspire others to achieve their dream jo...",
    link: "https://zerotomastery.io/blog/go-beyond-a-story-of-failure/",
    imageUrl: "https://i.ibb.co/g7Xj6Jt/fear-failure-blog-x2.png",
    type: "reading",
  },
  {
    title: "Some Very Common Mistakes to avoid when coding.",
    description:
      "Mistake 1. Bad Variable Names Variables are essential in programming. Use them as they are intended. It will not make your life easier but also make...",
    link: "https://abdulmalik.hashnode.dev/some-very-common-mistakes-to-avoid-when-coding",
    imageUrl: mistake,
    type: "article",
  },

  {
    title: "Optimizing your web app with Micro frontend architecture.",
    description:
      "In today's fast-paced world, the web has become an essential part of our lives. Web applications have come a long way from simple HTML pages to...",
    link: "https://abdulmalik.hashnode.dev/optimizing-your-web-app-with-micro-frontend-architecture",
    imageUrl: microfrontend,
    type: "article",
  },
  {
    title:
      "React: Advanced Techniques for crafting high-performance components.",
    description:
      "React is a popular JavaScript library used for building user interfaces and creating reusable components. While it's relatively easy to get started...",
    link: "https://abdulmalik.hashnode.dev/react-advanced-techniques-for-crafting-high-performance-components",
    imageUrl: reactimg,
    type: "article",
  },

  {
    title: "Architecting Large-scale Javascript Applications",
    description:
      "In the past we have worked with large javascript applications and frameworks and it...",
    link: "https://www.canva.com/design/DAEP8soDA7Y/LhN_G3Z6vbratkAlslugaQ/view?utm_content=DAEP8soDA7Y&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    imageUrl: "https://i.ibb.co/bscsh9q/image.png",
    type: "reading",
  },
  {
    title: "Minimalism in Programming",
    description:
      "I’m 32, and I’ve been programming actively for over 16 years at this...",
    link: "https://pointersgonewild.com/2018/02/18/minimalism-in-programming/",
    imageUrl: "https://i.ibb.co/59sw2qV/code-wallpapers-30652-6650776.png",
    type: "reading",
  },
  {
    title: "Reducing Motion to Improve Accessibility",
    description:
      "Hey friends! In this post, I am going to walk you through a newer medi...",
    link: "https://www.a11ywithlindsey.com/blog/reducing-motion-improve-accessibility",
    imageUrl:
      "https://i.ibb.co/Jm2f3rY/Dream-Host-Accessibility-Tips-750x498.jpg",
    type: "reading",
  },
  {
    title: "How CSS Position Sticky Really Works: Tips For Beginners.",
    description:
      "If you just started learning HTML/CSS, you can easily get caught by the outstanding improvements that we get every day, like flexbox or grid... or a...    ",
    link: "https://abdulmalik.hashnode.dev/how-css-position-sticky-really-works-tips-for-beginners",
    imageUrl: css,
    type: "article",
  },

  {
    title: "A Modern CSS Reset",
    description: "I think about and enjoy very boring CSS stuf...",
    link: "https://hankchizljaw.com/wrote/a-modern-css-reset/",
    imageUrl: "https://i.ibb.co/RPkXPLN/css-declaration-small.png",
    type: "reading",
  },
];

export default ARTICLE_DATA;
