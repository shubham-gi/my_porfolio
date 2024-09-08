import carrent from "../assets/carrent.png";
import inotebook from '../assets/inotebook.png'
import gymSite from '../assets/gymSite.png'
const projects = [
  {
    id: 1,
    photo: inotebook,
    title: "NoteMaker",
    description:
      "Web-based platform that allows users to search, store, and manage their short notes. Using ReactJs, NodeJs, ExpressJs, and for database PostGresSQL.",
    hastags: ["#react", "#mongodb", "#bootstrap"],
    github: "https://github.com/shubham-gi/notemaker",
  },
  {
    id: 2,
    photo: gymSite,
    title: "Meeting's App",
    description:
      "Developed a Web App for Notes management. Also made a chrome extension using ML model transformer and YouTube transcript API. This extension also allows users summarise the YouTube videos and save the summarised code in their account through a using the Web App.",
    hastags: ["#react", "#mongodb", "#tailwind"],
    github: "https://github.com/shubham-gi/meeting-app",
  },
  {
    id: 3,
    photo: carrent,
    title: "NewsApp",
    description:
      "A news website that allows users to get news by categories and let them search specific new. This site utilizes the NewsAPI from RapidApi.",
    hastags: ["#react", "#bootstrap"],
    github: "https://github.com/shubham-gi/newsApp",
  },
];
export { projects };
