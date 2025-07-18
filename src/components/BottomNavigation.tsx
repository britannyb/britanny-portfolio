import { Link } from "react-scroll";
import HomeIcon from "./HomeIcon";
import ProjectsIcon from "./ProjectsIcon";
import SkillsIcon from "./SkillsIcon";
import AboutIcon from "./AboutIcon";

const BottomNavigation = () => {
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
    <>
      <div className="fixed bg-white dark:bg-teal bg-opacity-50 dark:bg-opacity-10 backdrop-blur-xl rounded-br-lg absolute left-0 top-0 p-2 z-60">
        <div className="p-2">
          <img
            src="images/logoPink.png"
            alt="Britanny Portfolio Website Logo"
            className="w-10 inline dark:hidden"
          />
          <img
            src="images/logoYellow.png"
            alt="Britanny Portfolio Website Logo"
            className="w-10 hidden dark:inline"
          />
        </div>
        <div id="toggle-button">
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
      <div className="navigation fixed left-0 bottom-0 w-full z-40">
        <div className="bg-white dark:bg-teal bg-opacity-50 dark:bg-opacity-10 backdrop-blur-xl px-2 py-1">
          <div>
            <ul className="grid grid-cols-4 text-xsm navigation-content">
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
      </div>
    </>
  );
};

export default BottomNavigation;
