import cc from "../assets/projects/cc.png";
import ck from "../assets/projects/ck.png";
import lo from "../assets/projects/lo.png";
import mjj from "../assets/projects/mjj.png";
import ms from "../assets/projects/ms.png";
import ri from "../assets/projects/ri.png";
import ss from "../assets/projects/ss.png";
import vg from "../assets/projects/vg.png";

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
      "Completed the introductory course to learn about the basics of programming via HTML, C and Python and venturing deeper via languages/frameworks such as Javascript, SQL and React",
    ],
  },
  {
    id: 2,
    title: "BeSquare Graduate Trainee Programme",
    company_name: "Deriv",
    date: "March 2023 - July 2023",
    points: [
      "Involved in the frontend development, mobile development, backend development, quality assurance and product design modules.",
      "Delved into the tools and knowledge needed for the different modules as a prospective employee and worked in teams with people from various backgrounds to develop complete products.",
      "Awarded winner for the mobile development hackathon and product design competition as well as runner-up for the frontend development hackathon.",
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
    title: "Frontend Developer",
    company_name: "Deriv",
    date: "August 2023 - Present",
    points: [
      "Tasked in handling cashier and payments related maintenance and improvements. I worked mainly with React and Typescript to implement new features and user stories of the web application while solving bugs to maintain the existing legacy codebase and optimize performance.",
      "Collaborated globally with members from varying departments such as backend, product design and quality assurance for the desktop and responsive redesign of the web application and new monorepo code architecture.",
      "Main developer in Wallets squad responsible for increasing the Jest unit test code coverage to currently ca 60% and assisting the quality assurance automation team with the Cypress.io E2E test for the squad.",
      "Merged more than 130 pulls in 3 separate Github repositories in under 8 months.",
      "Awarded Stars of the Month for April 2024.",
    ],
  },
];

export const projects = [
  {
    theme: "btn-back-red",
    iconUrl: mjj,
    name: "MyJejak [WIP]",
    description:
      "MyJejak is a project I'm currently working on to display realtime data of public transort and routing destinations. It is a mobile app written in Typescript and React Native with Go and Supabase being used for the backend. MyJejak uses realtime GTFS data to display public transport current locations, routes, schedules and more to ensure user get's efficient and reliable data for trip planning and delay notifications. The app design is also done to ensure best user experience by incorporating various features such as route favourites, full transport schedules, dark mode, notification carousel, smart searching and more.",
    link: "https://my-jejak-poc.pages.dev/",
  },
  {
    theme: "btn-back-green",
    iconUrl: cc,
    name: "CommonCents",
    description:
      "CommonCents is a comprehensive Trading Information Hub designed to help beginners and anyone interested in trading learn more about trading through various features. This web application and mobile device application provide access to Trading News, Trading Guidelines, Trading Simulation, Market Overview, and a Forum. The project focuses on Stock Indices and Volatility Market, with a trading simulation that uses live data and virtual currency for options trading. Users can share a single account on both platforms, and they are ranked on a leaderboard based on their net worth, creating a gamified aspect to attract and engage users.",
    link: "https://commoncents.vercel.app/",
    sourceCode: "https://github.com/muhdlubega/DRC-CommonCents-WebApp",
  },
  {
    theme: "btn-back-green",
    iconUrl: ss,
    name: "ShopShwift",
    description:
      "ShopShwift is an interactive simple e-commerce website with a vivid and appealing user interface. This project is written in React Javascript and SCSS to imitate an actual e-commerce website with integrated mock API products. It simulates the behaviour of simple e-commerce website functions such as sorting and adding to cart using React Context.",
    link: "https://shopshwift.vercel.app/",
    sourceCode: "https://github.com/muhdlubega/e-commerce",
  },
  {
    theme: "btn-back-green",
    iconUrl: ms,
    name: "MgmtSys",
    description:
      "MgmtSys is a comprehensive management system dashboard featuring API integration, state management, data visualization, CRUD operations, performance optimization, and security measures and is written mainly in React Javascript and SCSS. It utilizes Firebase and Firestore as a database and authorization solution while also integrating data from the JSONPlaceholder API. The following documentation provides an overview of the project's features, dependencies, setup instructions, usage, deployment, and submission details.",
    link: "https://mgmtsys.vercel.app/",
    sourceCode: "https://github.com/muhdlubega/mgmt-sys-dashboard",
  },
  {
    theme: "btn-back-green",
    iconUrl: lo,
    name: "Lib.Org",
    description:
      "Lib.Org is a library organizer mobile app I made in a group of two for our mobile development hackathon in the Deriv BeSquare Graduate Programme. For the hackathon our goal was to utilize any open-source API to create an interactive mobile app in one week. Our team utilized mainly the Dart language and Flutter framework with various tools and widgets such as Firebase, Bloc, flutter_barcode_scanner and more to create this app using the Google Books API. This app allows user to perform various actions such as searching for book and e-book details, adding books to favourites and sorting them according to libraries, scanning barcode or entering existing ISBN number of physical books to be added into the organizer, toggling light or dark mode and more.",
    sourceCode: "https://github.com/muhdlubega/library-organizer",
  },
  {
    theme: "btn-back-green",
    iconUrl: vg,
    name: "Visual Gamer",
    description:
      "Visual Gamer is a game database website I made in a group of five for our hackathon in the Deriv BeSquare Graduate Programme. For the hackathon our goal was to utilize any open-source API to create an interactive website in less than a week. Our team utilized various frameworks and tools such as React, Firebase, Typescript, SCSS and more to create this website using the RAWG API.",
    link: "https://visualgamer.vercel.app/",
    sourceCode: "https://github.com/muhdlubega/ctrlc-ctrlv-hackathon",
  },
  {
    theme: "btn-back-green",
    iconUrl: ck,
    name: "CryptoKing",
    description:
      "A cryptocurrency watcher website I made for self-study. For this project, I worked with various libraries such as react-alice-carousel and react-chartjs alongside React, CSS, and Firebase to interact with the CoinGecko API. This project was made as a basis for understanding REST API calls and groundwork for WebSocket calls.",
    link: "https://thecryptoking.vercel.app/",
    sourceCode: "https://github.com/muhdlubega/crypto-king",
  },
  {
    theme: "btn-back-green",
    iconUrl: ri,
    name: "Recommend.me",
    description:
      "Recommend.me is a TV Show database I made as my final project for the Harvard CS50 online course. For this project, I worked with the TMDB API to display data about TV shows through frameworks and tools such as React, JavaScript, and CSS. This was my introductory project to React, where I tried to familiarize myself with React Hooks.",
    link: "https://recommendme-livid.vercel.app/",
    sourceCode: "https://github.com/muhdlubega/recommendme",
  },
];
