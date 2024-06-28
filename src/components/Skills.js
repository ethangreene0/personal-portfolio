import React, { useState, useEffect } from 'react';
import meter1 from "../assets/img/web-dev.png";
import meter2 from "../assets/img/sof-dev.png";
import meter3 from "../assets/img/data-structure.png";
import meter4 from "../assets/img/algo.png";
import meter5 from "../assets/img/op-system.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import colorSharp2 from "../assets/img/color-sharp2.png";


export const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  let timeoutId = null;

  const handleMouseEnter = (index) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setHoveredSkill(index);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setHoveredSkill(null);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const skills = [
    {
      img: meter1,
      title: "Web Development",
      description: "Building responsive and interactive websites using HTML, CSS, JavaScript, and various frameworks like React and Angular."
    },
    {
      img: meter2,
      title: "Software Development",
      description: "Designing and developing software applications using languages like Java, Python, and C++."
    },
    {
      img: meter3,
      title: "Data Structures",
      description: "Understanding and implementing various data structures such as arrays, linked lists, stacks, queues, trees, and graphs."
    },
    {
      img: meter4,
      title: "Algorithms",
      description: "Analyzing and solving problems using algorithms, focusing on optimization and efficiency."
    },
    {
      img: meter5,
      title: "Operating Systems",
      description: "Knowledge of operating system concepts including memory management, process scheduling, and file systems."
    }
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Place holder</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skills.map((skill, index) => (
                  <div
                    className="item"
                    key={index}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="skill-imgbx">
                      <img src={skill.img} alt={skill.title} />
                      <div className={`overlay ${hoveredSkill === index ? 'show' : ''}`}>
                        <h4>{skill.title}</h4>
                        <p>{skill.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
