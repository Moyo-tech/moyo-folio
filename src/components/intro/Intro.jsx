import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/moyo.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
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
              <small>1+ year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
<p>Hello, I'm Moyo, a highly skilled Software Engineer with a passion for designing and building exceptional web applications. With expertise in various frontend technologies and frameworks such as HTML, CSS, JavaScript, React, Vue, and Angular, I specialize in delivering solid, scalable, and intuitive frontend solutions that enhance user experiences.
<br></br><br></br>
Currently, I am seeking a Software Engineer New Grad role to further hone my skills and gain more hands-on experience in the industry. My ability to transform complex designs into seamless and functional web applications has earned me a reputation as a go-to person for software solutions. Whether you're looking for a quick one-off project or something more long-term, I am confident that my skills and experience make me the ideal candidate to help bring your web applications to life. Let's connect and explore how we can work together to create exceptional digital experiences for your users. </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default Intro