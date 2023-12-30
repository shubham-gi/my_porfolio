import carrent from "../assets/carrent.png";
import inotebook from '../assets/inotebook.png'
import gymSite from '../assets/gymSite.png'
const projects = [
  {
    id: 1,
    photo: inotebook,
    title: "iNotebook",
    description:
      "Web-based platform that allows users to search, store, and manage their short notes. Using ReactJs, NodeJs, ExpressJs, and for database mongoDB.",
    hastags: ["#react", "#mongodb", "#bootstrap"],
    github: "https://github.com/shubham-gi?tab=repositories",
  },
  {
    id: 2,
    photo: gymSite,
    title: "Gym Website",
    description:
      "A website where both trainer and the gym enthusiasts can meet. Virtual sessions can be organnized. Payment, authentication etc. will be added on later stage.",
    hastags: ["#react", "#mongodb", "#tailwind"],
    github: "https://github.com/shubham-gi/gymWebsite",
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
