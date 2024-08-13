const projectData = [
  {
    id: 1,
    title: "01-Simple Counter",
    description:
      "A basic counter application that allows users to increment and decrement a value. Additional features include a reset button and an input field to set the counter to a specific value. This project demonstrates the use of state management in React using hooks, as well as responsive design with Tailwind CSS.",
    link: "simple-counter",
    integration: [
      "React Hooks (useState)",
      "Tailwind CSS for styling",
      "Mange Buttons with state",
    ],
    concepts: [
      "Basic state management",
      "Responsive design",
      "Plus ,Minus ,Reset",
    ],
  },
  {
    id: 2,
    title: "02-To-Do App",
    description:
      "A comprehensive To-Do application built with React and Redux for state management. This app allows users to add, edit, delete, and toggle tasks as completed or incomplete. The application uses Redux for managing task state and persisting data to local storage. The interface includes task input, task list, and task statistics, all styled using Tailwind CSS for a modern and responsive design.",
    link: "to-do-list",
    integration: [
      "React for UI development",
      "Redux for state management",
      "Tailwind CSS for styling",
      "Local Storage for persistence",
    ],
    concepts: [
      "State management with Redux",
      "Local storage handling",
      "Responsive design with Tailwind CSS",
    ],
  },
  {
    id: 3,
    title: "03-Weather App",
    description:
      "A weather application that provides current weather information for any city. Users can search for weather details, which are displayed in a clean, responsive layout. The app features a search bar for city input, a header, weather details, and error handling. The interface is styled using Tailwind CSS for a modern look and feel.",
    link: "weather-app",
    integration: [
      "React for UI development",
      "Tailwind CSS for styling",
      "OpenWeatherMap API for weather data",
      "Responsive design",
    ],
    concepts: [
      "API integration",
      "Component-based architecture",
      "Responsive design with Tailwind CSS",
    ],
  },
  {
    id: 4,
    title: "04-Calculator",
    description:
      "A functional calculator built with React that performs basic arithmetic operations. It features a modern UI with responsive design using Tailwind CSS. Users can perform addition, subtraction, multiplication, division, and percentage calculations. The calculator supports keyboard inputs and displays results dynamically.",
    link: "calculator",
    integration: [
      "React for UI development",
      "Tailwind CSS for styling",
      "Responsive design",
    ],
    concepts: [
      "State management in React",
      "Event handling",
      "Dynamic UI updates",
      "Responsive design with Tailwind CSS",
    ],
  },
  {
    id: 5,
    title: "05-Expense Tracker",
    description:
      "An expense tracker application built with React and Tailwind CSS, designed to help users manage their income and expenses efficiently. It allows users to add, track, and delete transactions, maintaining a clear overview of their balance. The application distinguishes between income and expenses and provides a reset functionality for income.",
    link: "expense-tracker",
    integration: [
      "State management handled using the useReducer hook",
      "Form handling for adding income and expenses",
      "Context API for global state management",
      "Local storage for data persistence",
      "Tailwind CSS for responsive UI",
    ],
    concepts: [
      "React hooks (useState, useReducer, useContext)",
      "Context API",
      "Local storage",
      "Form handling",
      "Responsive design with Tailwind CSS",
    ],
  },
  {
    id: 6,
    title: "06-Movie Search App",
    description:
      "A React and Tailwind CSS app for movie search and details. Users can search for movies dynamically and view detailed information. The app is fully responsive, ensuring a seamless experience on any device. It integrates with a third-party API to fetch real-time data and includes features like error handling and loading indicators for a smooth user experience. using Tailwind CSS for consistent styling across different screen sizes.",
    link: "movies-app",
    integration: [
      "React Context API",
      "Movie API integration",
      "Tailwind CSS",
      "React Hooks (useState, useEffect)",
      "Local Storage (potential)",
    ],
    concepts: [
      "State management",
      "API fetching",
      "Dynamic search",
      "Responsive design",
      "Conditional rendering",
    ],
  },
  {
    id: 7,
    title: "07-Notes App",
    description:
      "A notes application that allows users to create, edit, and delete notes. This project demonstrates state management, form handling, and persistent storage using local storage.",
    link: "notes-app",
    integration: [
      "React Hooks (useState)",
      "Local Storage for data persistence",
      "Tailwind CSS for styling",
    ],
    concept: ["CRUD operations", "State management", "Responsive design"],
  },
  {
    id: 8,
    title: "08-Markdown Previewer",
    description:
      "A markdown previewer application that converts markdown text into HTML. This project showcases state management, form handling, and responsive design with Tailwind CSS.",
    link: "markdown-preview",
    integration: [
      "React Hooks (useState)",
      "Markdown-to-HTML converter library",
      "Tailwind CSS for styling",
    ],
    concept: ["Markdown rendering", "State management", "Responsive design"],
  },
  {
    id: 9,
    title: "09-Recipe App",
    description:
      "A recipe application that allows users to search for recipes and view details. This project demonstrates API integration, state management, and responsive design with Tailwind CSS.",
    link: "recipe-app",
    integration: [
      "React Hooks (useState, useEffect)",
      "Recipe API integration",
      "Tailwind CSS for styling",
    ],
    concept: [
      "API data fetching",
      "Dynamic recipe display",
      "Responsive design",
    ],
  },
  {
    id: 10,
    title: "10-Image Gallery",
    description:
      "An image gallery application that allows users to view and upload images. This project showcases state management, file handling, and responsive design with Tailwind CSS.",
    link: "image-gallery",
    integration: [
      "React Hooks (useState)",
      "File handling for uploads",
      "Tailwind CSS for styling",
    ],
    concept: [
      "Image upload and display",
      "State management",
      "Responsive design",
    ],
  },
  {
    id: 11,
    title: "11-Blog App",
    description:
      "A blog application that allows users to create, edit, and delete blog posts. This project demonstrates state management, form handling, and persistent storage using local storage.",
    link: "blog-app",
    integration: [
      "React Hooks (useState)",
      "Local Storage for data persistence",
      "Tailwind CSS for styling",
    ],
    concept: ["CRUD operations", "State management", "Responsive design"],
  },
  {
    id: 12,
    title: "12-Chat App",
    description:
      "A chat application that allows users to send and receive messages in real-time. This project showcases state management, WebSocket integration, and responsive design with Tailwind CSS.",
    link: "chat-app",
    integration: [
      "React Hooks (useState, useEffect)",
      "WebSocket for real-time messaging",
      "Tailwind CSS for styling",
    ],
    concept: ["Real-time messaging", "State management", "Responsive design"],
  },
  {
    id: 13,
    title: "13-E-commerce Store",
    description:
      "An e-commerce store application that allows users to browse products, add items to the cart, and place orders. This project demonstrates state management, API integration, and responsive design with Tailwind CSS.",
    link: "ecommerce-store",
    integration: [
      "React Hooks (useState, useEffect)",
      "E-commerce API integration",
      "Tailwind CSS for styling",
    ],
    concept: [
      "Product listing and cart management",
      "State management",
      "Responsive design",
    ],
  },
  {
    id: 14,
    title: "14-User Authentication",
    description:
      "A user authentication application that allows users to register, log in, and log out. This project showcases state management, form handling, and authentication with JWT.",
    link: "user-authentication",
    integration: [
      "React Hooks (useState)",
      "JWT for authentication",
      "Tailwind CSS for styling",
    ],
    concept: [
      "User registration and login",
      "State management",
      "Responsive design",
    ],
  },
  {
    id: 15,
    title: "15-Portfolio",
    description:
      "A portfolio application that allows users to showcase their projects and skills. This project demonstrates state management, form handling, and responsive design with Tailwind CSS.",
    link: "portfolio",
    integration: [
      "React Hooks (useState)",
      "Tailwind CSS for styling",
      "Responsive design",
    ],
    concept: ["Project showcase", "State management", "Responsive design"],
  },
  {
    id: 16,
    title: "16-Quiz App",
    description:
      "A quiz application that allows users to take quizzes and view their scores. This project showcases state management, form handling, and responsive design with Tailwind CSS.",
    link: "quiz-app",
    integration: [
      "React Hooks (useState)",
      "Quiz logic implementation",
      "Tailwind CSS for styling",
    ],
    concept: ["Quiz functionality", "State management", "Responsive design"],
  },
  {
    id: 17,
    title: "17-Form Validation",
    description:
      "A form validation application that demonstrates how to validate form inputs in real-time. This project showcases state management, form handling, and validation techniques.",
    link: "form-validation",
    integration: [
      "React Hooks (useState)",
      "Form validation library",
      "Tailwind CSS for styling",
    ],
    concept: [
      "Form validation techniques",
      "State management",
      "Responsive design",
    ],
  },
  {
    id: 18,
    title: "18-Drag and Drop",
    description:
      "A drag-and-drop application that allows users to drag and drop items within a list. This project demonstrates state management, event handling, and responsive design with Tailwind CSS.",
    link: "drag-and-drop",
    integration: [
      "React Hooks (useState)",
      "Drag-and-drop library",
      "Tailwind CSS for styling",
    ],
    concept: [
      "Drag-and-drop functionality",
      "State management",
      "Responsive design",
    ],
  },
  {
    id: 19,
    title: "19-Infinite Scrolling",
    description:
      "An infinite scrolling application that loads more content as the user scrolls down the page. This project showcases state management, API integration, and responsive design with Tailwind CSS.",
    link: "infinite-scrolling",
    integration: [
      "React Hooks (useState, useEffect)",
      "API integration for loading content",
      "Tailwind CSS for styling",
    ],
    concept: ["Infinite scrolling", "State management", "Responsive design"],
  },
  {
    id: 20,
    title: "20-Kanban Board",
    description:
      "A Kanban board application that allows users to manage tasks in different stages. This project demonstrates state management, drag-and-drop functionality, and responsive design with Tailwind CSS.",
    link: "kanban-board",
    integration: [
      "React Hooks (useState)",
      "Drag-and-drop library",
      "Tailwind CSS for styling",
    ],
    concept: [
      "Kanban task management",
      "Drag-and-drop functionality",
      "Responsive design",
    ],
  },
  {
    id: 21,
    title: "21-Music Player",
    description:
      "A music player application that allows users to play, pause, and skip tracks. This project showcases state management, audio handling, and responsive design with Tailwind CSS.",
    link: "music-player",
    integration: [
      "React Hooks (useState)",
      "Audio handling for playback",
      "Tailwind CSS for styling",
    ],
    concept: ["Audio playback", "State management", "Responsive design"],
  },
  {
    id: 22,
    title: "22-Social Media Dashboard",
    description:
      "A social media dashboard application that displays metrics and insights from various social media platforms. This project demonstrates state management, API integration, and responsive design with Tailwind CSS.",
    link: "social-media-dashboard",
    integration: [
      "React Hooks (useState, useEffect)",
      "Social media API integration",
      "Tailwind CSS for styling",
    ],
    concept: ["Data visualization", "API integration", "Responsive design"],
  },
  {
    id: 23,
    title: "23-Movie Recommendation System",
    description:
      "A movie recommendation system that suggests movies based on user preferences. This project showcases state management, API integration, and responsive design with Tailwind CSS.",
    link: "movie-recommendation",
    integration: [
      "React Hooks (useState, useEffect)",
      "Movie recommendation API integration",
      "Tailwind CSS for styling",
    ],
    concept: [
      "Movie recommendation algorithms",
      "State management",
      "Responsive design",
    ],
  },
  {
    id: 24,
    title: "24-Real-time Notifications",
    description:
      "A real-time notifications application that displays notifications as they are received. This project demonstrates state management, WebSocket integration, and responsive design with Tailwind CSS.",
    link: "real-time-notifications",
    integration: [
      "React Hooks (useState, useEffect)",
      "WebSocket for real-time notifications",
      "Tailwind CSS for styling",
    ],
    concept: ["Real-time updates", "State management", "Responsive design"],
  },
  {
    id: 25,
    title: "25-GraphQL Client",
    description:
      "A GraphQL client application that demonstrates how to fetch data from a GraphQL API. This project showcases state management, API integration, and responsive design with Tailwind CSS.",
    link: "graphql-client",
    integration: [
      "React Hooks (useState, useEffect)",
      "GraphQL API integration",
      "Tailwind CSS for styling",
    ],
    concept: ["GraphQL data fetching", "State management", "Responsive design"],
  },
  {
    id: 26,
    title: "26-Multi-step Form",
    description:
      "A multi-step form application that guides users through a series of steps to complete a process. This project demonstrates state management, form handling, and responsive design with Tailwind CSS.",
    link: "multi-step-form",
    integration: [
      "React Hooks (useState)",
      "Multi-step form logic",
      "Tailwind CSS for styling",
    ],
    concept: [
      "Multi-step form handling",
      "State management",
      "Responsive design",
    ],
  },
  {
    id: 27,
    title: "27-Context API Example",
    description:
      "A Context API example application that demonstrates how to manage state using the Context API. This project showcases state management, context usage, and responsive design with Tailwind CSS.",
    link: "context-api-example",
    integration: [
      "React Context API",
      "React Hooks (useContext, useState)",
      "Tailwind CSS for styling",
    ],
    concept: [
      "Context API for state management",
      "State management",
      "Responsive design",
    ],
  },
  {
    id: 28,
    title: "28-Higher-Order Components",
    description:
      "A higher-order components application that demonstrates how to enhance components using higher-order functions. This project showcases state management, component composition, and responsive design with Tailwind CSS.",
    link: "higher-order-components",
    integration: [
      "React Higher-Order Components",
      "React Hooks (useState)",
      "Tailwind CSS for styling",
    ],
    concept: [
      "Higher-order components",
      "Component composition",
      "Responsive design",
    ],
  },
  {
    id: 29,
    title: "29-Render Props",
    description:
      "A render props application that demonstrates how to share functionality between components using the render props pattern. This project showcases state management, component composition, and responsive design with Tailwind CSS.",
    link: "render-props",
    integration: [
      "React Render Props",
      "React Hooks (useState)",
      "Tailwind CSS for styling",
    ],
    concept: [
      "Render props pattern",
      "Component composition",
      "Responsive design",
    ],
  },
  {
    id: 30,
    title: "30-Responsive Navigation",
    description:
      "A responsive navigation application that demonstrates how to create a navigation menu that adapts to different screen sizes. This project showcases state management, responsive design, and Tailwind CSS.",
    link: "responsive-navigation",
    integration: [
      "React Hooks (useState)",
      "Responsive navigation logic",
      "Tailwind CSS for styling",
    ],
    concept: [
      "Responsive navigation menu",
      "State management",
      "Responsive design",
    ],
  },
];

export default projectData;
