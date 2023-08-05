import { useState } from "react";
import { Link } from "react-scroll";
import HomeIcon from "./HomeIcon";
import ProjectsIcon from "./ProjectsIcon";
import SkillsIcon from "./SkillsIcon";
import AboutIcon from "./AboutIcon";
import LightBulbIcon from "./LightBulbIcon";

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
      <div className="flex items-center bg-dark-trans-white dark:bg-dark-trans-black px-6 py-2 rounded-b-lg">
        <div className="mr-16">
          <img
            src="images/logoPink.png"
            alt="Britanny Portfolio Website Logo"
            className="w-12 inline dark:hidden"
            height="140"
            width="102"
          />
          <img
            src="images/logoYellow.png"
            alt="Britanny Portfolio Website Logo"
            className="w-12 hidden dark:inline"
            height="140"
            width="102"
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
        className="absolute flex align-middle border border-teal dark:border-white border-2 rounded-full right-4 p-1"
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        <button id="theme-toggle" type="button" onClick={toggleTheme}>
          <div className="flex align-middle light-icon">
            <LightBulbIcon />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navigation;
