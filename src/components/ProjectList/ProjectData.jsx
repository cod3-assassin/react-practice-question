const projectData = [
  {
    id: 1,
    title: "01-Simple Counter",
    description:
      "A basic counter application that allows users to increment and decrement a value. Additional features include a reset button and an input field to set the counter to a specific value. This project demonstrates the use of state management in React using hooks, as well as responsive design with Tailwind CSS.",
    link: "/simple-counter",
  },
  {
    id: 2,
    title: "02-To-Do List",
    description:
      "A to-do list application that enables users to add, edit, and remove tasks. Additional features include setting task due dates and priorities, as well as persistent storage using local storage. This project showcases dynamic list rendering, state management with hooks, and responsive design with Tailwind CSS.",
    link: "/to-do-list",
  },
  {
    id: 3,
    title: "03-Weather App",
    description:
      "A weather application that enables users to search for the current weather conditions in any city. This project showcases dynamic rendering of weather data fetched from an API, integration of React hooks for state management, and responsive design using Tailwind CSS.",
    link: "/weather-app",
  },
  {
    id: 4,
    title: "04-Calculator",
    description:
      "A calculator application that allows users to perform basic arithmetic operations. This project showcases state management, event handling, and responsive design with Tailwind CSS.",
    link: "/calculator",
  },
  {
    id: 5,
    title: "05-Expense Tracker",
    description:
      "An expense tracker application that helps users manage their income and expenses. This project demonstrates state management, form handling, and persistent storage using local storage.",
    link: "/expense-tracker",
  },
  {
    id: 6,
    title: "06-Movie Search App",
    description:
      "A movie search application that allows users to search for movies and view details. This project showcases API integration, state management, and responsive design with Tailwind CSS.",
    link: "/movies-app",
  },
  {
    id: 7,
    title: "07-Notes App",
    description:
      "A notes application that allows users to create, edit, and delete notes. This project demonstrates state management, form handling, and persistent storage using local storage.",
    link: "/notes-app",
  },
  {
    id: 8,
    title: "08-Markdown Previewer",
    description:
      "A markdown previewer application that converts markdown text into HTML. This project showcases state management, form handling, and responsive design with Tailwind CSS.",
    link: "/markdown-preview",
  },
  {
    id: 9,
    title: "09-Recipe App",
    description:
      "A recipe application that allows users to search for recipes and view details. This project demonstrates API integration, state management, and responsive design with Tailwind CSS.",
    link: "/recipe-app",
  },
  {
    id: 10,
    title: "10-Image Gallery",
    description:
      "An image gallery application that allows users to view and upload images. This project showcases state management, file handling, and responsive design with Tailwind CSS.",
    link: "/image-gallery",
  },
  {
    id: 11,
    title: "11-Blog App",
    description:
      "A blog application that allows users to create, edit, and delete blog posts. This project demonstrates state management, form handling, and persistent storage using local storage.",
    link: "/blog-app",
  },
  {
    id: 12,
    title: "12-Chat App",
    description:
      "A chat application that allows users to send and receive messages in real-time. This project showcases state management, WebSocket integration, and responsive design with Tailwind CSS.",
    link: "/chat-app",
  },
  {
    id: 13,
    title: "13-E-commerce Store",
    description:
      "An e-commerce store application that allows users to browse products, add items to the cart, and place orders. This project demonstrates state management, API integration, and responsive design with Tailwind CSS.",
    link: "/ecommerce-store",
  },
  {
    id: 14,
    title: "14-User Authentication",
    description:
      "A user authentication application that allows users to register, log in, and log out. This project showcases state management, form handling, and authentication with JWT.",
    link: "/user-authentication",
  },
  {
    id: 15,
    title: "15-Portfolio",
    description:
      "A portfolio application that allows users to showcase their projects and skills. This project demonstrates state management, form handling, and responsive design with Tailwind CSS.",
    link: "/portfolio",
  },
  {
    id: 16,
    title: "16-Quiz App",
    description:
      "A quiz application that allows users to take quizzes and view their scores. This project showcases state management, form handling, and responsive design with Tailwind CSS.",
    link: "/quiz-app",
  },
  {
    id: 17,
    title: "17-Form Validation",
    description:
      "A form validation application that demonstrates how to validate form inputs in real-time. This project showcases state management, form handling, and validation techniques.",
    link: "/form-validation",
  },
  {
    id: 18,
    title: "18-Drag and Drop",
    description:
      "A drag-and-drop application that allows users to drag and drop items within a list. This project demonstrates state management, event handling, and responsive design with Tailwind CSS.",
    link: "/drag-and-drop",
  },
  {
    id: 19,
    title: "19-Infinite Scrolling",
    description:
      "An infinite scrolling application that loads more content as the user scrolls down the page. This project showcases state management, API integration, and responsive design with Tailwind CSS.",
    link: "/infinite-scrolling",
  },
  {
    id: 20,
    title: "20-Kanban Board",
    description:
      "A Kanban board application that allows users to manage tasks in different stages. This project demonstrates state management, drag-and-drop functionality, and responsive design with Tailwind CSS.",
    link: "/kanban-board",
  },
  {
    id: 21,
    title: "21-Music Player",
    description:
      "A music player application that allows users to play, pause, and skip tracks. This project showcases state management, audio handling, and responsive design with Tailwind CSS.",
    link: "/music-player",
  },
  {
    id: 22,
    title: "22-Social Media Dashboard",
    description:
      "A social media dashboard application that displays metrics and insights from various social media platforms. This project demonstrates state management, API integration, and responsive design with Tailwind CSS.",
    link: "/social-media-dashboard",
  },
  {
    id: 23,
    title: "23-Movie Recommendation System",
    description:
      "A movie recommendation system that suggests movies based on user preferences. This project showcases state management, API integration, and responsive design with Tailwind CSS.",
    link: "/movie-recommendation",
  },
  {
    id: 24,
    title: "24-Real-time Notifications",
    description:
      "A real-time notifications application that displays notifications as they are received. This project demonstrates state management, WebSocket integration, and responsive design with Tailwind CSS.",
    link: "/real-time-notifications",
  },
  {
    id: 25,
    title: "25-GraphQL Client",
    description:
      "A GraphQL client application that demonstrates how to fetch data from a GraphQL API. This project showcases state management, API integration, and responsive design with Tailwind CSS.",
    link: "/graphql-client",
  },
  {
    id: 26,
    title: "26-Multi-step Form",
    description:
      "A multi-step form application that guides users through a series of steps to complete a process. This project demonstrates state management, form handling, and responsive design with Tailwind CSS.",
    link: "/multi-step-form",
  },
  {
    id: 27,
    title: "27-Context API Example",
    description:
      "A Context API example application that demonstrates how to manage state using the Context API. This project showcases state management, context usage, and responsive design with Tailwind CSS.",
    link: "/context-api-example",
  },
  {
    id: 28,
    title: "28-Higher-Order Components",
    description:
      "A higher-order components application that demonstrates how to enhance components using higher-order functions. This project showcases state management, component composition, and responsive design with Tailwind CSS.",
    link: "/higher-order-components",
  },
  {
    id: 29,
    title: "29-Render Props",
    description:
      "A render props application that demonstrates how to share functionality between components using the render props pattern. This project showcases state management, component composition, and responsive design with Tailwind CSS.",
    link: "/render-props",
  },
  {
    id: 30,
    title: "30-Responsive Navigation",
    description:
      "A responsive navigation application that demonstrates how to create a navigation menu that adapts to different screen sizes. This project showcases state management, responsive design, and Tailwind CSS.",
    link: "/responsive-navigation",
  },
];

export default projectData;
