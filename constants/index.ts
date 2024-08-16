import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

export const SkillData = [
  {
    name: "Python",
    Image: "/python.png",
    width: 80,
    height: 80,
  },
  {
    name: "Java",
    Image: "/java.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "HTML 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "CSS",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "Tailwind CSS",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "Django",
    Image: "/django.png",
    width: 80,
    height: 80,
  },
  {
    name: "PostgreSQL",
    Image: "/postges.png",
    width: 80,
    height: 80,
  },
  {
    name: "Git",
    Image: "/git.png",
    width: 80,
    height: 80,
  },
];

export const Socials = [
  {
    name: "Linkedin",
    src: "/linkedin.svg",
    href: "https://www.linkedin.com/in/gaidyusuf",
  },
  {
    name: "Github",
    src: "/github.svg",
    href: "https://github.com/GaidYusuf",
  },
];
export const Projects = [
  {
    title: "Netflix Clone Website",
    text: [
      "Developed a Netflix-clone web application using Python and the Django framework for the backend, and HTML, CSS, and JavaScript for the frontend.",
      "Designed a PostgreSQL database schema to manage movie data, user profiles, and personalised watchlists.",
      "Implemented features such as movie browsing, genre filtering, detailed views, and full-text search.",
    ],
    src: "/NetflixWebsite.png",
    languages: ["Python", "Django", "HTML", "CSS", "JavaScript", "PostgreSQL"],
  },
  {
    title: "Eye Controlled Mouse",
    text: [
      "Created a Python application that allows users to control a mouse using eye movements.",
      "Utilised OpenCV and Mediapipe for real-time image processing and facial landmark detection.",
      "Developed blink detection to simulate mouse clicks, improving accessibility for users.",
      "Ensured smooth operation by managing webcam input and integrating seamless cursor movement."
    ],
    src: "/EyeControlledMouse.avif",
    languages: ["Python"],
  },
  {
    title: "Islamic Website with Semantic Analysis of Quranic Verses",
    text: [
      "Developed a web application to help users understand Quranic verses through advanced Natural Language Processing (NLP).",
      "Built the backend using Python with Django and designed the frontend with HTML, CSS, and JavaScript, while using SQLite3 for data storage.",
      "Developed a feature that allows users to enter a verse and see similar verses for better exploration and understanding.",
      "Integrated additional features such as a digital Quran, prayer times, and an Islamic Calendar.",
      "Established a CI/CD pipeline to automate testing and deployment.",
    ],
    src: "/IslamicWebsite.png",
    languages: ["Python", "Django", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Similarity System using Distributional Semantic Model",
    text: [
      "Developed a prototype question-answering system using Java, leveraging a Distributional Semantic Model (DSM).",
      "Used semantic inference techniques to answer questions, such as identifying capitals (e.g., 'Beijing' for 'China') and finding related words (e.g., 'Computer' to 'Software').",
      "Applied semantic embedding methods to accurately match words and retrieve relevant information within the system.",
    ],
    src: "/SimilaritySystem.png",
    languages: ["Java"],
  },
];


export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
  },
]