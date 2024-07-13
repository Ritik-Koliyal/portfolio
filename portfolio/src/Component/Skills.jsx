import '../Style/Skills.css'

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "Git",
    "Tailwind CSS",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "MySQL",
];

const Skills = () => {
    return (
        <div className="skill-container">
            <p>Skills</p>
            <ul className="skills-list">
                {skills.map((skill, index) => (
                    <li key={index} className="skill-item">{skill}</li>
                ))}
            </ul>
        </div>
    );
}

export default Skills;
