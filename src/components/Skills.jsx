// src/components/Skills.jsx
import { useEffect, useRef } from 'react';
import styles from './Skills.module.css';

import {
    SiJavascript, SiCplusplus, SiPython, SiRust,
    SiReact, SiRedux, SiVuedotjs, SiNextdotjs,
    SiNodedotjs, SiExpress, SiBootstrap, SiTailwindcss, SiMui,
    SiDocker, SiLinux, SiGit, SiGithub, SiVite, SiNpm,
    SiMongodb, SiMysql, SiPostgresql, SiRedis
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export default function Skills() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add(styles.show);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(el);
        return () => observer.disconnect();
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
            <h2 className={styles.heading}>My Tech Stack</h2>
            <div className={styles.skillWrapper} ref={sectionRef}>
                {skills.map((group, i) => (
                    <div key={i} className={styles.categoryGroup}>
                        <h3 className={styles.categoryTitle}>{group.category}</h3>
                        <div className={styles.cardGrid}>
                            {group.items.map((skill, index) => (
                                <div
                                    key={index}
                                    className={styles.skillCard}
                                    style={{ '--level': skill.level }}
                                >
                                    <div className={styles.circularProgress}>
                                        <svg viewBox="0 0 36 36" className={styles.circularSvg}>
                                            <path
                                                className={styles.bg}
                                                d="M18 2.0845
                                                    a 15.9155 15.9155 0 0 1 0 31.831
                                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                            />
                                            <path
                                                className={styles.progress}
                                                strokeDasharray={`${skill.level}, 100`}
                                                d="M18 2.0845
                                                    a 15.9155 15.9155 0 0 1 0 31.831
                                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                            />
                                        </svg>
                                        <div className={styles.innerIcon}>
                                            {skill.icon}
                                        </div>
                                    </div>
                                    <p className={styles.skillName}>{skill.name}</p>
                                    <p className={styles.levelText}>{skill.level}%</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
