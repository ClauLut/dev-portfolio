import "./App.css";
import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Mail, Sun, Moon, ArrowUp } from "lucide-react";
import Button from "./components/Button";
import Avatar from "./images/avatar.png";
import LinkedIn from "./icons/linkedin.svg";
import ProjectCard from "./components/ProjectCard";

const projects = [];

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("light");

    if (theme === "light") {
      root.classList.add("light");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleMailButtonClick = () => {
    const email = "claudia.lutnik@gmx.at";
    window.location.href = `mailto:${email}`;
  };

  const sections = useMemo(() => {
    return ["home", "about", "projects", "contact"];
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="container">
      {/* HEADER */}
      <div className="header">
        <h1 onClick={() => scrollTo("home")}>
          {" "}
          clut.<span>dev</span>
        </h1>
        <Button
          onClick={toggleTheme}
          icon={theme === "light" ? <Moon /> : <Sun />}
        />
      </div>

      {/* HERO */}
      <motion.section
        id="home"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="hero">
          <div>
            <h2>
              Hi, I'm Claudia 👋
              <br />
              Frontend Developer with Focus on UI / UX
            </h2>
            <p>
              Creating intuitive digital experiences through modern frontend
              development and thoughtful design.
            </p>
          </div>
          <img
            src={Avatar}
            alt="avatar"
            width={300}
            height={300}
            style={{ borderRadius: "150px" }}
          />
        </div>
        <div className="navigation">
          <Button onClick={() => scrollTo("projects")} text="View Projects" />
          <Button
            onClick={() => scrollTo("contact")}
            text="Contact me"
            variant="secondary"
          />
        </div>
      </motion.section>

      {/* ABOUT */}
      <section id="about">
        <h3> About </h3>
        <p>
          I’m a frontend developer focused on modern web technologies with a
          strong passion for UI/UX design. I enjoy turning ideas into intuitive,
          performant, and visually engaging interfaces that provide real value
          to users. <br /> With a balance of technical expertise and design
          sensitivity, I work across both development and design processes to
          create seamless, user-centered experiences. I care about clean code,
          thoughtful interactions, and building products that are not only
          functional but also enjoyable to use. <br /> I’m always open to
          collaborating on meaningful projects, exploring new technologies, and
          continuously improving my craft.
        </p>
      </section>

      {/* SKILLS */}
      <section className="skills">
        <h3>Skills </h3>
        {["JavaScript", "TypeScript", "React", "Adobe XD", "Figma"].map(
          (skill, i) => (
            <motion.span key={i} whileHover={{ scale: 1.1 }}>
              {skill}
            </motion.span>
          ),
        )}
      </section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        className="contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <h3>Contact </h3>
        <p> Let's work together.</p>
        <div className="actions">
          <div className="socials">
            <Button
              onClick={handleMailButtonClick}
              icon={<Mail size={16} />}
              text="Email me"
              variant="gradient"
            />
            <a
              href="https://www.linkedin.com/in/claudia-lutnik-2a172722a/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              id="gradient"
            >
              <img src={LinkedIn} alt="linkedin" width={16} height={16} />
              LinkedIn
            </a>
          </div>

          <Button onClick={() => scrollTo("home")} icon={<ArrowUp />} />
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="copyright">
        © {new Date().getFullYear()} clut.dev
      </footer>
    </div>
  );
}
