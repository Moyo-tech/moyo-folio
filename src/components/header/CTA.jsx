import React from 'react';
import CV from '../../assets/moyo-cv.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={"https://drive.google.com/file/d/1kB0MtjlWoBM4RWweHUCvme-F2KN9tjY4/view?usp=sharing"} target= "_blank" className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
