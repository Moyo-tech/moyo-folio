import React from "react";
import IMG1 from "../../assets/social-media.png";
import IMG2 from "../../assets/skilled.png";
import IMG3 from "../../assets/interac.png";
import IMG4 from "../../assets/social-proof.jpg";
import IMG5 from "../../assets/edge.png";
import IMG6 from "../../assets/roomify.png";
import IMG7 from "../../assets/graspa.png";
import IMG8 from "../../assets/credence.png";
import IMG9 from "../../assets/hilto.png";

import "./portfolio.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Portfolio = () => {
  const [category, setCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const soloProjects = [
    {
      id: 7,
      title: "Graspa",
      img: IMG7,
      category: "Design",
      description:
        "Graspa is a cloud-based learning management system designed to provide students with an online learning environment that allows them to access educational content and resources",
      technologies: "UI Design | UI/UX Research",
      figmalink:
        "https://www.figma.com/proto/WbET2pgVnHu8t9J5KlBTK2/GRASPA-E-LEARNING-PLATFORM?page-id=0%3A1&node-id=48-2&viewport=227%2C229%2C0.03&scaling=scale-down&starting-point-node-id=48%3A2&show-proto-sidebar=1",

      uiresearch:
        "https://drive.google.com/file/d/1XLjKT29_EFT9DgnUNy5LmDDSE3Gg9IXK/view?usp=share_link",
    },
    {
      id: 8,
      title: "Credence",
      img: IMG8,
      category: "Mobile",

      description:
        "Credence is an eco-friendly mobile application that offers small businesses a platform to showcase their products and services, and facilitates sales through the generation of digital receipts instead of paper receipts.",
      technologies: "React Native | UI/UX Research | Mobile | Agile ",
      github: "https://github.com/Moyo-tech/Credence",
      figmalink:
        "https://www.figma.com/proto/Q8F1P3E4atctPsLj3hVpH9/CREDENCE?page-id=0%3A1&node-id=69-15&viewport=855%2C348%2C0.25&scaling=scale-down&starting-point-node-id=69%3A15&show-proto-sidebar=1",
    },
    {
      id: 9,
      title: "Hilto",
      img: IMG9,
      category: "Mobile",

      description:
        "The Hospital Booking App (Hilto) is a user-friendly platform designed to streamline the process of booking appointments with healthcare providers.",
      technologies: "Flutter | Mobile | Agile ",
      figmalink:
        "https://www.figma.com/file/6ehQVTaJVACpkkNMZaa2Dq/Patient?node-id=0%3A1&t=dVyv4A3vF5xYA0zq-1",
      github: "https://github.com/mzbhewtee/Mini_project2",
    },
    {
      id: 1,
      title: "Social Media Dashboard with Theme Switcher",
      img: IMG1,
      category: "Web",

      description:
        "View analytics for multiple social media platforms (Instagram, LinkedIn, Youtube, Twitter) on this dashboard. Enjoy dark and light modes with animations for a better experience.",
      technologies: "HTML | CSS | JS | Figma",
      link: "https://moonlit-biscochitos-c99e7f.netlify.app/",
      github: "https://github.com/Moyo-tech/social_media_dashboard",
    },
    {
      id: 2,
      title: "Skilled E-learning Platform Landing Page",
      img: IMG2,
      category: "Web",

      description:
        "Landing Page for the Skilled E-learning Platform, built from the UI/UX wireframe to create a seamless experience",
      technologies: "HTML | CSS | Figma | Boostrap",
      link: "https://neon-cassata-ef3438.netlify.app/",
      github: "https://github.moyo-tech/skilled_elearning_landing_page",
    },
    {
      id: 3,
      title: "Interactive Rating Component",
      category: "Web",

      img: IMG3,
      description:
        "User friendly app to for users to rate products and services",
      technologies: "JavaScript | HTML | CSS | Figma",
      link: "https://effervescent-churros-4169b2.netlify.app/",
      github: "https://github.com/Moyo-tech/Interactive-rating-project",
    },
    {
      id: 4,
      title: "Landing Page Social Proof",
      img: IMG4,
      category: "Web",
      description:
        "Fully responsive website that shows the testimonials of a business, built based on Figma design ",
      technologies: "CSS Grid | HTML ",
      link: "https://prismatic-palmier-e36078.netlify.app/",
      github: "https://github.com/Moyo-tech/frontend-social-proof-section",
    },
    {
      id: 5,
      title: "Edge-Ledger-Landing-Page",
      img: IMG5,
      category: "Web",

      description:
        "Fully responsive interactive website Landing Page for an Ecommerce business built based on Adobe XD design",
      technologies: "HTML | CSS",
      link: "https://gleaming-quokka-96d2cb.netlify.app/",
      github: "https://github.com/Moyo-tech/Edge-Ledger-Landing-Page",
    },
    {
      id: 6,
      title: "Roomify",
      img: IMG6,
      category: "Design",

      description:
        "Roomify - A mobile application that help users find roommates and rooms by creating a verified profile, setting preferences and listing advertisements.",
      technologies: "Figma | UI/UX Research",
      figmalink:
        "https://www.figma.com/proto/X0cYmzIshFlwQOr4luwBu4/ROOMIFY-HIGH-FIDELITY-APP?page-id=0%3A1&node-id=2-76&viewport=16%2C119%2C0.11&scaling=scale-down&starting-point-node-id=2%3A76&show-proto-sidebar=1",
      uiresearch:
        "https://drive.google.com/file/d/1FsD9LyBSXCzRbCIEH4zYf6W98hRcbIwx/view?usp=share_link",
    },
  ];
  const handleCategoryClick = (newCategory) => {
    setCategory(newCategory);
    if (newCategory === "all") {
      setFilteredProjects(soloProjects);
    } else {
      const filtered = soloProjects.filter(
        (pro) => pro.category === newCategory
      );
      setFilteredProjects(filtered);
    }
  };

  const projectsToShow = category === "all" ? soloProjects : filteredProjects;

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio__filters">
        <button
          onClick={() => handleCategoryClick("all")}
          className={category === "all" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => handleCategoryClick("Web")}
          className={category === "Web" ? "active" : ""}
        >
          Web
        </button>
        <button
          onClick={() => handleCategoryClick("Mobile")}
          className={category === "Mobile" ? "active" : ""}
        >
          Mobile
        </button>
        <button
          onClick={() => handleCategoryClick("Design")}
          className={category === "Design" ? "active" : ""}
        >
          Design
        </button>
      </div>
      <AnimatePresence>
        <motion.div
          layout
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="container portfolio__container"
        >
          {projectsToShow.map((pro) => (
            <article className="portfolio__item" key={pro.id}>
              <div className="portfolio__item-image">
                <img src={pro.img} alt={pro.title} />
              </div>
              <div className="portfolio__item-content">
                <h3>{pro.title}</h3>
                <p>{pro.description}</p>
                <p>{pro.technologies}</p>
              </div>
              <div className="portfolio__item-cta">
                {pro.hasOwnProperty("github") && (
                  <a
                    href={pro.github}
                    target="_blank"
                    className="btn"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                )}

                {pro.hasOwnProperty("uiresearch") && (
                  <a
                    href={pro.uiresearch}
                    target="_blank"
                    className="btn"
                    rel="noreferrer"
                  >
                    UI Research
                  </a>
                )}
                {pro.hasOwnProperty("figmalink") && (
                  <a
                    href={pro.figmalink}
                    target="_blank"
                    className="btn btn-primary"
                    rel="noreferrer"
                  >
                    Figma Link
                  </a>
                )}
                {pro.hasOwnProperty("link") && (
                  <a
                    href={pro.link}
                    target="_blank"
                    className="btn btn-primary"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
