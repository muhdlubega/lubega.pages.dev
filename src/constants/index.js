import cc from "../assets/projects/cc.webp";
import ck from "../assets/projects/ck.webp";
import lo from "../assets/projects/lo.webp";
import ms from "../assets/projects/ms.webp";
import ri from "../assets/projects/ri.webp";
import ss from "../assets/projects/ss.webp";
import vg from "../assets/projects/vg.webp";
import mu from "../assets/projects/mu.webp";
import ba from "../assets/projects/ba.webp";
import ip from "../assets/projects/ip.webp";
import fa from "../assets/projects/fa.webp";
import mt from "../assets/projects/mt.webp";
import sa from "../assets/projects/sa.webp";

export const skills = [
  {
    name: "CSS",
    type: "Frontend",
  },
  {
    name: "Express",
    type: "Backend",
  },
  {
    name: "Git",
    type: "Version Control",
  },
];

export const experiences = [
  {
    id: 1,
    title: "CS50’s Introduction to Computer Science",
    company_name: "Harvard edX",
    date: "July 2022 - December 2022",
    points: [
      "Completed the introductory course to learn about the basics of programming via HTML, C and Python and venturing deeper via languages/frameworks such as Javascript, SQL and React.",
    ],
  },
  {
    id: 2,
    title: "BeSquare Graduate Trainee Programme",
    company_name: "Deriv",
    date: "March 2023 - July 2023",
    points: [
      "Gained comprehensive exposure to frontend, mobile, backend, QA, and UI/UX design modules. Worked collaboratively on multidisciplinary teams to deliver functional full-stack prototypes.",
      "Winner of the Mobile Development Hackathon and Product Design Competition; Runner-up in Frontend Hackathon.",
    ],
  },
  {
    id: 3,
    title: "GCPBoleh Season 6",
    company_name: "Google",
    date: "April 2024 - May 2024",
    points: [
      "Completed GCPBoleh Season 6, an online self-study program by Google Cloud for developers in Malaysia.",
      "Learned about the basics in utilizing Google Cloud, integrating tools like Terraform, Kubernetes, and PostgreSQL, and incorporating AI/ML through the Gemini API.",
      "Earned a total of 14 badges with 6 skill badges.",
    ],
  },
  {
    id: 4,
    title: "Javascript Foundations Professional Certificate",
    company_name: "Mozilla Developer Network",
    date: "June 2024",
    points: [
      "Awarded the professional certificate from Mozilla for JavaScript foundations in LinkedIn Learning after completing the learning path and scoring 98% in the assessment exam.",
    ],
  },
  {
    id: 6,
    title: "GCPBoleh Season 7",
    company_name: "Google",
    date: "August 2025",
    points: [
      "Completed GCPBoleh Season 7, an online self-study program by Google Cloud for developers in Malaysia.",
      "Delved into the basic skills in Generative AI, BigQuery, Vertex AI, TensorFlow, Cloud Security, and Infrastructure Modernization",
      "Earned a total of 8 badges with 5 skill badges.",
    ],
  },
  {
    id: 7,
    title: "Professional Certificate in Computer Science for Artificial Intelligence",
    company_name: "Harvard Online",
    date: "August 2022 - November 2022",
    points: ["Completed the CS50: Introduction to Computer Science and CS50’s Introduction to Artificial Intelligence with Python courses.",
      "Delved into the basics of artificial intelligence principles, how to use AI in Python programs and design intelligent systems.",
      "Awarded the professional cerificate upon completion of all the projects, courses and modules."
    ],
  },
  {
    id: 8,
    title: "Frontend Developer",
    company_name: "Deriv",
    date: "August 2023 - Present",
    points: [
      "Set up and maintain the spec-driven implementation of the AI rework of the entire Trader’s View platform, improving rollout speed by over 200%.",
      " Maintained and enhanced cashier and payment systems for global web applications built with React and TypeScript.",
      "Collaborated with backend, design, and QA teams across multiple regions to develop features and improve architecture in a large-scale monorepo environment.",
      "Increased unit test coverage to over 80% using Jest and supported Cypress.io E2E automation.",
      "Optimized wallet package performance, reducing bundle load size by 74% for faster, more efficient delivery.",
      "Implemented i18n and RTL support for 21 languages, significantly improving accessibility and user reach.",
      "Contributed to the company’s low-code platform redesign using Outsystems, improving maintainability and feature rollout speed.",
    ],
  },
];

export const projects = [
  {
    theme: "btn-back-green",
    iconUrl: mt,
    name: "MyTransit",
    description:
      "MyTransit is a modern web application for tracking real-time public transportation in Malaysia, built with React, TypeScript, and Mapbox. MyTransit provides live vehicle positions, route visualization, schedules, and directions for buses and trains across multiple operators. It also utilizes Mistral's mistral-large-latest model for chatbot utilities and routing suggestions, alongside Supabase for authentication and data storage.",
    link: "https://mytransit.vercel.app/",
    sourceCode: "https://github.com/muhdlubega/mytransit",
    buttontext: "Open Website"
  },
  {
    theme: "btn-back-green",
    iconUrl: sa,
    name: "Saksama",
    description:
      "Saksama is an AI-powered document processing platform designed for Malaysian SMEs, offering three specialized modules for halal compliance, accounting automation, and customs verification. It utilizes Mistral's Pixtral-12b vision model for OCR and document processing, alongside Supabase for data storage and authentication.",
    link: "https://saksama.live/",
    buttontext: "Open Website"
  },
  {
    theme: "btn-back-green",
    iconUrl: fa,
    name: "Facial Analyzer",
    description:
      "Facial Analyzer is a Next.js facial recognition application powered by Mistral's Pixtral-12b vision model that analyzes faces to predict ancestry origins and emotional expressions with accuracy percentages. Users can either select from a horizontal scrolling carousel of template faces or upload their own photos for analysis. The app features a clean, modern interface built with shadcn/ui components.",
    link: "https://ai-facial-analyzer.vercel.app/",
    sourceCode: "https://github.com/muhdlubega/facial-analyzer",
    buttontext: "Open Website"
  },
  {
    theme: "btn-back-green",
    iconUrl: ip,
    name: "IMG.prcess",
    description:
      "IMG.prcess is an AI-powered OCR document processing app that extracts structured data from document images using Mistral’s Pixtral-12b vision model. It provides confidence scores for each extracted field, supports exports to Excel and PDF, and maintains a searchable document history. Built with Next.js, TypeScript, and TailwindCSS. Data is stored and managed via Supabase with IP-based tracking, while exports are handled using xlsx and jsPDF libraries for seamless data output.",
    link: "https://imgprcess.vercel.app/",
    sourceCode: "https://github.com/muhdlubega/img.prcess",
    buttontext: "Open Website"
  },
  {
    theme: "btn-back-green",
    iconUrl: ms,
    name: "MgmtSys",
    description:
      "MgmtSys is a comprehensive management system dashboard featuring API integration, state management, data visualization, CRUD operations, performance optimization, and security measures and is written mainly in React Javascript and SCSS. It utilizes Firebase and Firestore as a database and authorization solution while also integrating data from the JSONPlaceholder API.",
    link: "https://mgmtsys.vercel.app/",
    sourceCode: "https://github.com/muhdlubega/mgmt-sys-dashboard",
    buttontext: "Open Website"
  },
  {
    theme: "btn-back-green",
    iconUrl: ba,
    name: "Beg.AI",
    description:
      "Beg.AI is a simple AI model comparison website which uses various AI models for text and image processing. Current models supported are Gemini's gemini-1.5-flash and Mistral's pixtral-12b-2409 models. The app is written in React Typescript and TailwindCSS for styling. It also utiziles Supabase for authentication and data/image storage purposes.",
    link: "https://beg-ai.vercel.app/",
    sourceCode: "https://github.com/muhdlubega/beg-ai",
    buttontext: "Open Website"
  },
  {
    theme: "btn-back-green",
    iconUrl: cc,
    name: "CommonCents",
    description:
      "CommonCents is a comprehensive Trading Information Hub designed to help beginners and anyone interested in trading learn more about trading through various features. This web application and mobile device application provide access to Trading News, Trading Guidelines, Trading Simulation, Market Overview, and a Forum. The project focuses on Stock Indices and Volatility Market, with a trading simulation that uses live data and virtual currency for options trading. Users can share a single account on both platforms, and they are ranked on a leaderboard based on their net worth, creating a gamified aspect to attract and engage users.",
    link: "https://commoncents.vercel.app/",
    sourceCode: "https://github.com/muhdlubega/DRC-CommonCents-WebApp",
    buttontext: "Open Website"
  },
  {
    theme: "btn-back-green",
    iconUrl: mu,
    name: "Muizzle.me",
    description:
      "Muizzle.me is a simple puzzle game designed for movie lovers where user can guess movie titles based on the screenshots of the movie displayed. Muizzle uses Cloudflare R2 bucket for image storage and local storage for user statistics. It is mainly writted in React Typescript and CSS for styling. It also has integrated Google Analytics and Google Adsense for analytical and monetization purposes.",
    link: "https://muizzle.pages.dev/",
    sourceCode: "https://github.com/muhdlubega/muizzle",
    buttontext: "Open Website"
  },
  {
    theme: "btn-back-green",
    iconUrl: ck,
    name: "CryptoKing",
    description:
      "A cryptocurrency watcher website I made for self-study. For this project, I worked with various libraries such as react-alice-carousel and react-chartjs alongside React, CSS, and Firebase to interact with the CoinGecko API. This project was made as a basis for understanding REST API calls and groundwork for WebSocket calls.",
    link: "https://thecryptoking.vercel.app/",
    sourceCode: "https://github.com/muhdlubega/crypto-king",
    buttontext: "Open Website"
  },
  {
    theme: "btn-back-green",
    iconUrl: lo,
    name: "Lib.Org",
    description:
      "Lib.Org is a library organizer mobile app I made in a group of two for our mobile development hackathon in the Deriv BeSquare Graduate Programme. For the hackathon our goal was to utilize any open-source API to create an interactive mobile app in one week. Our team utilized mainly the Dart language and Flutter framework with various tools and widgets such as Firebase, Bloc, flutter_barcode_scanner and more to create this app using the Google Books API. This app allows user to perform various actions such as searching for book and e-book details, adding books to favourites and sorting them according to libraries, scanning barcode or entering existing ISBN number of physical books to be added into the organizer, toggling light or dark mode and more.",
    sourceCode: "https://github.com/muhdlubega/library-organizer",
    buttontext: "Open Website"
  },
  {
    theme: "btn-back-green",
    iconUrl: ss,
    name: "ShopShwift",
    description:
      "ShopShwift is an interactive simple e-commerce website with a vivid and appealing user interface. This project is written in React Javascript and SCSS to imitate an actual e-commerce website with integrated mock API products. It simulates the behaviour of simple e-commerce website functions such as sorting and adding to cart using React Context.",
    link: "https://shopshwift.vercel.app/",
    sourceCode: "https://github.com/muhdlubega/e-commerce",
    buttontext: "Open Website"
  },
  {
    theme: "btn-back-green",
    iconUrl: vg,
    name: "Visual Gamer",
    description:
      "Visual Gamer is a game database website I made in a group of five for our hackathon in the Deriv BeSquare Graduate Programme. For the hackathon our goal was to utilize any open-source API to create an interactive website in less than a week. Our team utilized various frameworks and tools such as React, Firebase, Typescript, SCSS and more to create this website using the RAWG API.",
    link: "https://visualgamer.vercel.app/",
    sourceCode: "https://github.com/muhdlubega/ctrlc-ctrlv-hackathon",
    buttontext: "Open Website"
  },
  {
    theme: "btn-back-green",
    iconUrl: ri,
    name: "Recommend.me",
    description:
      "Recommend.me is a TV Show database I made as my final project for the Harvard CS50 online course. For this project, I worked with the TMDB API to display data about TV shows through frameworks and tools such as React, JavaScript, and CSS. This was my introductory project to React, where I tried to familiarize myself with React Hooks.",
    link: "https://recommendme-livid.vercel.app/",
    sourceCode: "https://github.com/muhdlubega/recommendme",
    buttontext: "Open Website"
  },
];
