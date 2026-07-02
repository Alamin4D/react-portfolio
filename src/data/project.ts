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
  keyFeatures: string[];
  improvements: string;
}

export const projects: Project[] = [
  {
    id: "Delish (Team Project)",
    name: "Delish — Food Delivery App",

    tagline:
      "A modern food delivery platform that enables users to discover restaurants, order meals, and track deliveries seamlessly.",

    image: "/images/food-delivery.png",

    description:
      "Delish is a full-stack food delivery web application that provides a seamless online food ordering experience. Users can browse restaurants, search and filter menu items, add meals to their cart, complete secure online payments, and track orders in real time. The platform also features an admin dashboard for managing restaurants, customers, orders, and delivery operations efficiently.",

    techStack: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe API",
      "Tailwind CSS",
    ],

    liveLink: "https://food-delivary-app-psi.vercel.app/",
    githubLink: "https://github.com/AlmasWD09/food-delivary-app",

    keyFeatures: [
      "Weather-based food recommendations that suggest suitable menu items based on the user's current weather conditions.",
      "Secure online payment integration with Stripe for fast and reliable transactions.",
      "Voice-enabled restaurant search for a faster and hands-free user experience.",
      "Browse restaurants and discover menu items with advanced search and category filtering.",
      "Shopping cart functionality with a smooth and secure checkout process.",
      "Real-time order tracking and complete order history management.",
      "Admin dashboard for managing restaurants, customers, orders, and delivery operations."
    ],

    challenges:
      "One of the main challenges was managing global authentication and cart state without prop drilling, which was solved using Redux Toolkit. Another challenge was integrating Stripe securely, handling payment workflows, and ensuring inventory consistency during concurrent order processing on the backend.",

    improvements:
      "Future enhancements include AI-powered personalized food recommendations, real-time delivery notifications using WebSockets, location-based delivery tracking, restaurant analytics dashboard, and improved SEO through server-side rendering."
  },
  {
    id: "Cloud Kitchen Billing App",
    name: "Cloud Kitchen Billing App",
    tagline:
      "A modern cloud kitchen management system for streamlining orders, billing, and kitchen operations.",

    image: "/images/cloud-kitchen.png",

    description:
      "Cloud Kitchen Billing App is a full-stack restaurant management system designed to simplify billing, order processing, and kitchen operations. It enables staff to manage orders in real time, generate invoices instantly, track sales, and monitor business performance through an intuitive dashboard. Built with Next.js, Prisma, PostgreSQL, and Socket.io, the application ensures fast performance, secure data management, and seamless real-time synchronization.",

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

    keyFeatures: [
      "Real-time order management with instant status updates using Socket.io.",
      "Fast and accurate invoice generation with automated billing.",
      "Role-based authentication and secure access control for staff and administrators.",
      "Menu, inventory, and kitchen management powered by Prisma and PostgreSQL.",
      "Interactive dashboard for monitoring orders, sales, and business performance.",
      "Comprehensive sales reports and order history for business insights.",
      "Responsive and user-friendly interface optimized for desktop and tablet devices."
    ],

    challenges:
      "One of the biggest challenges was implementing real-time synchronization while maintaining data consistency across multiple users. Managing concurrent order updates efficiently with Socket.io and ensuring reliable database operations using Prisma required careful backend architecture and event handling.",

    improvements:
      "Future enhancements include barcode/QR code support, online payment integration, receipt printing, advanced analytics and reporting, multi-branch management, and a dedicated mobile application for restaurant staff."
  },
  {
    id: "EduanUniversity",
    name: "EduanUniversity",

    tagline:
      "A comprehensive education management system that connects students, teachers, and administrators on a single platform.",

    image: "/images/edu-site.png",

    description:
      "EduanUniversity is a full-stack education management system designed to simplify academic operations for students, teachers, and administrators. The platform provides course management, student enrollment, assignment submission, communication tools, and administrative controls through a modern, responsive interface. It focuses on delivering an efficient and seamless learning experience.",

    techStack: [
      "React",
      "Firebase",
      "Socket.io",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
    ],

    liveLink: "https://scintillating-rabanadas-b8327e.netlify.app/",
    githubLink: "https://github.com/Alamin4D/battle-client-website",

    keyFeatures: [
      "Role-based authentication for students, teachers, and administrators.",
      "Course enrollment and course management system.",
      "Assignment submission and progress tracking.",
      "Real-time notifications and communication using Socket.io.",
      "Student dashboard for viewing courses, assignments, and academic progress.",
      "Teacher dashboard for managing classes, assignments, and student performance.",
      "Responsive and user-friendly interface optimized for desktop and mobile devices."
    ],

    challenges:
      "One of the biggest challenges was implementing real-time communication while maintaining a responsive user experience. Managing role-based access control, synchronizing academic data across multiple users, and designing scalable backend APIs required careful planning and implementation.",

    improvements:
      "Future enhancements include online examination and grading, video conferencing integration, attendance tracking with QR codes, AI-powered learning recommendations, and a dedicated mobile application."
  }
];
