import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/kellynl/',
      name: 'Kelly Ng Lun',
      role: 'Skill : Backend | People Leadership | Data',
      test : "I hired Moyo as an Assistant Venture Coach for the E-Lab program at ALU and Moyo went above and beyond to meet students and her team's expectation. Leveraging her advanced excel skills, she developed an attendance tracker almost overnight. Moyo has the ability to facilitate effectively, get a good command of the class and capture her audience's attention. She is an effective problem solver with a positive attitude and calm demeanour and works well in a fast-paced environment. I have no doubt that Moyo will exceed in whatever endeavour she pursues."
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/samuelweke/',
      name: 'Samuel Segun',
      role: 'Skill : Frontend | Design',
      test: "Moyo delivered her work perfectly well and kept to the deadline. She has good knowledge of HTML, CSS and JavaScript. I will definitely hire her again for future projects."
    },
   
   
  ];
  return (
    <section id="testmonials">
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <h5 className='client__name'>{test.role}</h5>

          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials