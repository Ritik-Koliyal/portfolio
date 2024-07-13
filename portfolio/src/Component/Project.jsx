
import React, { useState } from 'react';
import '../Style/Project.css';
import image from '../Images/port.avif';
import img2 from '../Images/Screenshot 2024-07-13 155140.png';

const projects = [
  {
    img: image,
    name: 'E-commerce',
    description: 'This is a detailed description for E-commerce. It is designed to give a brief overview of the project, its features, and its goals.',
  },
  {
    img: img2,
    name: 'E-commerce',
    description: 'This is a detailed description for E-commerce. It is designed to give a brief overview of the project, its features, and its goals.',
  },
  {
    img: image,
    name: 'E-commerce',
    description: 'This is a detailed description for E-commerce. It is designed to give a brief overview of the project, its features, and its goals.',
  },

];

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  const nextSlide = () => {
    setAnimationClass('card-exit');
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
      setAnimationClass('card-enter');
    }, 300);
  };

  const prevSlide = () => {
    setAnimationClass('card-exit');
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? projects.length - 1 : prevIndex - 1
      );
      setAnimationClass('card-enter');
    }, 300);
  };

  return (
    <div className="project">
      <div className="project-container">
        <p>Projects</p>
        <div className="carousel">
          <button className="prev" onClick={prevSlide}>
            &#10094;
          </button>
          <div className="cards">
            <a href="https://tourmaline-bienenstitch-a6c177.netlify.app/ " target='blank'>
            {projects.slice(currentIndex, currentIndex + 1).map((project, index) => (
              <div key={index} className={`card ${animationClass}`}>
                <img src={project.img} alt={project.name} />
                <div className="card-title">{project.name}</div>
                <div className="card-content">
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
            </a>
          </div>
          <button className="next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
