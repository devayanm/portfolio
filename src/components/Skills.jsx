// src/components/Skills.jsx
import styles from './Skills.module.css';
import { useEffect, useRef } from 'react';
import {
    SiJavascript,
    SiCplusplus,
    SiPython,
    SiRust,
    SiReact,
    SiRedux,
    SiVuedotjs,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiBootstrap,
    SiTailwindcss,
    SiMui,
    SiDocker,
    SiLinux,
    SiGit,
    SiGithub,
    SiVite,
    SiNpm,
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiRedis
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export default function Skills() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                sectionRef.current.classList.add(styles.show);
            }
        }, { threshold: 0.2 });

        observer.observe(sectionRef.current);
    }, []);

    const skills = [
        {
            category: "Programming Languages",
            items: [
                { name: "Python", icon: <SiPython />, level: 90 },
                { name: "JavaScript", icon: <SiJavascript />, level: 85 },
                { name: "C++", icon: <SiCplusplus />, level: 80 },
                { name: "Java", icon: <FaJava />, level: 75 },
                { name: "Rust", icon: <SiRust />, level: 60 },
            ],
        },
        {
            category: "Technologies",
            items: [
                { name: "React.js", icon: <SiReact />, level: 85 },
                { name: "Redux", icon: <SiRedux />, level: 78 },
                { name: "Vue.js", icon: <SiVuedotjs />, level: 70 },
                { name: "Next.js", icon: <SiNextdotjs />, level: 72 },
                { name: "Node.js", icon: <SiNodedotjs />, level: 82 },
                { name: "Express.js", icon: <SiExpress />, level: 76 },
                { name: "Bootstrap", icon: <SiBootstrap />, level: 88 },
                { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 75 },
                { name: "Material UI", icon: <SiMui />, level: 70 },
            ],
        },
        {
            category: "Tools",
            items: [
                { name: "Docker", icon: <SiDocker />, level: 70 },
                { name: "Linux", icon: <SiLinux />, level: 80 },
                { name: "Git", icon: <SiGit />, level: 85 },
                { name: "GitHub", icon: <SiGithub />, level: 90 },
                { name: "Vite.js", icon: <SiVite />, level: 78 },
                { name: "NPM", icon: <SiNpm />, level: 82 },
            ],
        },
        {
            category: "Databases",
            items: [
                { name: "MongoDB", icon: <SiMongodb />, level: 80 },
                { name: "MySQL", icon: <SiMysql />, level: 75 },
                { name: "PostgreSQL", icon: <SiPostgresql />, level: 70 },
                { name: "Redis", icon: <SiRedis />, level: 65 },
            ],
        },
    ];

    return (
        <section id="skills" className={styles.skillsSection}>
            <div className="container">
                <h2 className={`text-center fw-bold mb-5 ${styles.heading}`}>My Tech Stack</h2>
                <div className={styles.skillWrapper} ref={sectionRef}>
                    {skills.map((group, idx) => (
                        <div key={idx} className={styles.categoryGroup}>
                            <h5 className={styles.categoryTitle}>{group.category}</h5>
                            <div className={styles.cardRow}>
                                {group.items.map((skill, index) => (
                                    <div key={index} className={styles.skillCard}>
                                        <div className={styles.skillTop}>
                                            <div className={styles.skillIcon}>{skill.icon}</div>
                                            <div className={styles.skillName}>{skill.name}</div>
                                            <div className={styles.levelText}>{skill.level}%</div>
                                        </div>
                                        <div className={styles.progressBar}>
                                            <div
                                                className={styles.progressFill}
                                                style={{ width: `${skill.level}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
