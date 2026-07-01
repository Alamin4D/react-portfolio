export interface Project {
  id: string;
  name: string;
  tagline: string;
  image: string;
  description: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
  challenges: string;
  improvements: string;
}

export const projects: Project[] = [
  {
    id: "Delish (Team Project)",
    name: "Delish — Food Delivery App",
    tagline: "Food Delivery App is a software development project focused on creating a digital platform for ordering and delivering food.",
    image: "/images/food-delivery.png",
    description:
      "Food Delivery App is a full-stack web application focused on creating a digital platform for ordering and delivering food. Users can browse restaurant menus, search and filter food items, add meals to a cart, place orders securely, and track deliveries in real time. It also includes an admin dashboard for managing restaurants, orders, customers, and delivery operations efficiently.",
    techStack: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe API",
      "Tailwind CSS",
    ],
    liveLink: "https://food-delivary-app-psi.vercel.app/",
    githubLink: "https://github.com/AlmasWD09/food-delivary-app",
    challenges:
      "Managing global cart & auth state across the app without prop-drilling was tricky at first, which I solved using Redux Toolkit slices. Handling Stripe's payment webhooks securely and keeping the product inventory in sync during concurrent orders was another major challenge that required careful backend transaction handling.",
    improvements:
      "Planning to add product recommendation using a simple ML-based similarity model, integrate order tracking with real-time notifications, and improve SEO with server-side rendering.",
  },
  {
    id: "Cloud Kitchen Billing App",
    name: "Cloud Kitchen Billing App",
    tagline: "A cloud kitchen management system with a user-friendly interface, real-time order tracking, and secure payment integration.",
    image: "/images/cloud-kitchen.png",
    description:
      "A cloud kitchen management system with a user-friendly interface, real-time order tracking, and secure payment integration.It supports real-time updates so every team member sees changes instantly.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Socket.io",
      "Tailwind CSS",
    ],
    liveLink: "https://cloud-kitchen-billing.vercel.app/",
    githubLink: "https://github.com/Alamin4D/cloud-kitchen-billing",
    challenges:
      "Implementing smooth drag-and-drop reordering while keeping the database order field consistent across simultaneous multi-user edits was the biggest challenge. I also had to design an efficient real-time sync system using Socket.io without overwhelming the server with events.",
    improvements:
      "Future plans include adding calendar view & Gantt charts, a mobile app version using React Native, and AI-based task prioritization suggestions.",
  },
  {
    id: "EduanUniversity",
    name: "EduanUniversity",
    tagline: "This is a fully-featured education management system where students, teachers, and administrative staff can work together seamlessly.",
    image: "/images/edu-site.png",
    description:
      "This is a fully-featured education management system where students, teachers, and administrative staff can work together seamlessly. It was built to sharpen my understanding of WebSockets, real-time data synchronization, and building responsive chat UIs that feel native on both desktop and mobile.",
    techStack: [
      "React",
      "Firebase",
      "Socket.io",
      "Node.js",
      "Express",
      "Tailwind CSS",
    ],
    liveLink: "https://scintillating-rabanadas-b8327e.netlify.app/",
    githubLink: "https://github.com/Alamin4D/battle-client-website",
    challenges:
      "Keeping the UI responsive while handling a constant stream of real-time messages, and building a reliable online/offline presence system, required a lot of iteration. Optimizing image/media uploads for slow networks was also a key challenge.",
    improvements:
      "I plan to add end-to-end encryption for private chats, voice/video calling using WebRTC, and a dedicated mobile app.",
  },
];
