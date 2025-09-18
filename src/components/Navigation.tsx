import { Link } from "react-scroll";
import HomeIcon from "./HomeIcon";
import ProjectsIcon from "./ProjectsIcon";
import SkillsIcon from "./SkillsIcon";
import AboutIcon from "./AboutIcon";

const Navigation = () => {
  const toggleTheme = () => {
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  };
  return (
    <div className="fixed left-0 top-0 w-full z-40 navigation rounded-b-lg">
      <div className="flex items-center bg-white dark:bg-teal bg-opacity-40 dark:bg-opacity-10 backdrop-blur-xl px-6 py-2 rounded-b-lg">
        <div className="mr-16">
          <img
            src="images/logoPink.png"
            alt="Britanny Portfolio Website Logo"
            className="w-12 inline dark:hidden"
          />
          <img
            src="images/logoYellow.png"
            alt="Britanny Portfolio Website Logo"
            className="w-12 hidden dark:inline"
          />
        </div>
        <div>
          <ul className="grid grid-cols-4 navigation-content gap-12">
            <li>
              <Link activeClass="active" smooth spy to="welcome">
                <div className="home-icon">
                  <HomeIcon />
                </div>
                <span className="cursor-pointer text-teal dark:text-white hover:text-dark-pink dark:hover:text-pink">
                  home
                </span>
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="skills">
                <div className="skills-icon">
                  <SkillsIcon />
                </div>
                <span className="cursor-pointer text-teal dark:text-white hover:text-dark-pink dark:hover:text-pink">
                  skills
                </span>
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="projects">
                <div className="projects-icon">
                  <ProjectsIcon />
                </div>
                <span className="cursor-pointer text-teal dark:text-white hover:text-dark-pink dark:hover:text-pink">
                  projects
                </span>
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="about">
                <div className="me-icon">
                  <AboutIcon />
                </div>
                <span className="cursor-pointer text-teal dark:text-white hover:text-dark-pink dark:hover:text-pink">
                  about
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        id="toggle-button"
        className="absolute hover:scale-110 right-4 top-0 py-3">
        <button id="theme-toggle" type="button" onClick={toggleTheme}>
          <div className="inline dark:hidden">
            <div id="dark-toggle"></div>
          </div>
          <div className="hidden dark:inline">
            <div id="light-toggle"></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navigation;
