import React from "react";
import IMG1 from "../../assets/bookstore.png";
import IMG2 from "../../assets/todo.png";
import IMG3 from "../../assets/shelter.png";
import IMG4 from "../../assets/fake.png";
import IMG5 from "../../assets/news.png";
import IMG6 from "../../assets/math.png";

import "./portfolio.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion"

const Portfolio = () => {
  const [category, setCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const soloProjects = [
    {
      id: 1,
      title: "Bookstore",
      img: IMG1,
      category: "frontend",

      description:
        "BookStore app that allows users to store books and update progress",
      technologies: "React | Redux | Ruby on Rails",
      link: "https://melodic-boba-111583.netlify.app/",
      github: "https://github.com/Meri-MG/bookstore---react",
    },
    {
      id: 2,
      title: "FakeStore",
      img: IMG4,
      category: "frontend",

      description:
        "FakeStore app that provides information about available products and their details",
      technologies: "React | Redux",
      link: "https://fakestore-metrics.netlify.app/",
      github: "https://github.com/Meri-MG/Fakestore---react",
    },
    {
      id: 3,
      title: "To-Do-App",
      category: "frontend",

      img: IMG2,
      description: "User friendly app to plan your day and manage tasks",
      technologies: "JavaScript | Webpack",
      link: "https://meri-mg.github.io/To-Do-List/dist/",
      github: "https://github.com/Meri-MG/To-Do-List",
    },
    {
      id: 4,
      title: "Shelter",
      img: IMG3,
      category: "backend",
      description:
        "Fully responsive interactive website built based on Figma design",
      technologies: "JavaScript | CSS",
      link: "https://meri-mg.github.io/shelter/pages/main/index.html",
      github: "https://github.com/Meri-MG/shelter",
    },
    {
      id: 5,
      title: "World News",
      img: IMG5,
      category: "backend",

      description:
        "Fully responsive interactive website built based on Adobe XD design",
      technologies: "JavaScript | CSS",
      link: "https://meri-mg.github.io/Unilab-world-news/",
      github: "https://github.com/Meri-MG/Unilab-world-news",
    },
    {
      id: 6,
      title: "Math Resource",
      img: IMG6,
      category: "frontend",

      description:
        "Real-world group project which is still in progress and will provide educational platform for future young developers",
      technologies: "JavaScript | Scss | Python",
      link: "https://lukinoo.github.io/math-resource/",
      github: "https://github.com/lukinoo/math-resource",
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
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
          <div className="portfolio__filters">
          <button onClick={() => handleCategoryClick('all')} className={category === 'all' ? 'active' : ''}>All</button>
          <button onClick={() => handleCategoryClick('frontend')} className={category === 'frontend' ? 'active' : ''}>Frontend</button>
          <button onClick={() => handleCategoryClick('backend')} className={category === 'backend' ? 'active' : ''}>Backend</button>
        </div>
        <AnimatePresence>

      <motion.div   
        layout
        initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}className="container portfolio__container">
    

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
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </motion.div>
      </AnimatePresence>

    </section>
  );
};

export default Portfolio;
