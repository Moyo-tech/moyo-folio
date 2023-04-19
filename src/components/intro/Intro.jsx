import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/moyo.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>Hey there! I'm Moyo a frontend developer <span style={{color: "#64ffda"}}>(I like to go under UI Engineering because I design and build )</span> who loves crafting solid and scalable products with killer user experiences. My passion lies in building web applications that not only look great, but perform exceptionally well too.
<br></br><br></br>

Right now, I'm open to frontend internship roles and would love to gain more hands-on experience in the industry. There's nothing quite like the thrill of taking a project from concept to completion, and I'm excited to continue building my skills and learning from experienced developers. Whether you're looking for a quick one-off project or something more long-term, I'm your go-to guy for all things frontend. So let's chat and see what we can create together!</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default Intro