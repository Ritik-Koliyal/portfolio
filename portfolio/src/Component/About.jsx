import React from 'react';
import '../Style/About.css';

const educationDetails = [
    {
        degree: 'Diploma, Information Technology',
        institution: 'Government Polytechnic College Lohaghat',
        year: '2020 - 2023'
    },
    {
        degree: 'Senior Secondary (XII), Science',
        institution: 'Vivekanand Vidhya Mandir Lohaghat',
        year: '2020'
    },
    {
        degree: 'Secondary (X)',
        institution: 'Vivekanand Vidhya Mandir Lohaghat',
        year: '2018'
    }
];

const trainingsDetails = [
    {
        title: 'Back-End Web Development',
        institution: 'Internshala Trainings, Online',
        duration: 'Mar 2024 - Jul 2024',
        description: 'Focused on backend development using the MERN stack. Proficient in creating RESTful APIs, CRUD operations, MongoDB integration.'
    },
    {
        title: 'Front-End Web Development',
        institution: 'Internshala Trainings, Online',
        duration: 'Jan 2024 - Mar 2024',
        description: 'Skilled in HTML, CSS, JavaScript, and modern frameworks. Developed responsive web applications.'
    },
    {
        title: 'Full Stack Web Development',
        institution: 'Internshala Trainings, Online',
        duration: 'Jan 2024 - Jul 2024',
        description: 'Completed training in MERN stack, user authentication, dynamic UIs with React, deployed apps to cloud platforms.'
    },
    {
        title: 'General Aptitude',
        institution: 'Internshala Trainings, Online',
        duration: 'Jan 2024 - Jul 2024',
        description: 'Certified in Aptitude evaluation, Reading Comprehension, Quantitative Aptitude, Logical Reasoning, and Data Interpretation.'
    }
];

const projectsDetails = [
    {
        title: 'Social Media App (Twitter clone)',
        duration: 'Mar 2024 - Jul 2024',
        description: 'Built a Twitter clone with user authentication, tweets management, profile updates, image uploads, following, and more.'
    },
    {
        title: 'E-Commerce App',
        duration: 'Feb 2024 - Mar 2024',
        description: 'Developed an eCommerce website for sellers to showcase products, user authentication included.',
        link: 'https://tourmaline-bienenstitch-a6c177.netlify.app/'
    }
    {
        title: 'Internship Project',
        duration: 'Feb 2024 - Mar 2024',
        description: 'Developed a Blog website using HTML CSS JAVASCRIPT and PHP mySQL DATABASE.',
        link: 'http://leadersboli.com/'
    }
];

const About = () => {
    return (
       
            <div className="about-container">
                <p className="about-title">About Me</p>
                <p className="about-intro">
                    Hi, I'm Ritik Koliyal, a dedicated web developer proficient in both front-end and back-end technologies. Experienced in building dynamic and responsive web applications.
                </p>
                <section className="about-section">
                    <p className="section-title">Education</p>
                    <ul className="education-list">
                        {educationDetails.map((edu, index) => (
                            <li key={index} className="education-item">
                                {edu.degree}, {edu.institution}, {edu.year}
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="about-section">
                    <p className="section-title">Trainings</p>
                    {trainingsDetails.map((training, index) => (
                        <div key={index} className="training-item">
                            <p>{training.title}</p>
                            <p>{training.institution}, {training.duration}</p>
                            <p>{training.description}</p>
                        </div>
                    ))}
                </section>
                <section className="about-section">
                    <p className="section-title">Projects</p>
                    {projectsDetails.map((project, index) => (
                        <div key={index} className="project-item">
                            <p>{project.title}</p>
                            <p>Duration:{project.duration}</p>
                            <p>{project.description}</p>
                            {project.link && (
                                <p><a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a></p>
                            )}
                        </div>
                    ))}
                </section>
            </div>
    );
};

export default About;
