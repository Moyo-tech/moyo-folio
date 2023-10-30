import React from 'react';
import CV from '../../assets/moyo-cv.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={"https://drive.google.com/file/d/1a579A46VTIsaco13TlmMZn5BcvV7gzRb/view?usp=sharing"} target= "_blank" className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
