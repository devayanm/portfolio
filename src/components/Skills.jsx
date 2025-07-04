import React, { useState, useRef, useEffect } from "react";
import styles from "./Skills.module.css";
import {
    SiJavascript, SiCplusplus, SiPython, SiRust,
    SiReact, SiRedux, SiVuedotjs, SiNextdotjs,
    SiNodedotjs, SiExpress, SiBootstrap, SiTailwindcss, SiMui,
    SiDocker, SiLinux, SiGit, SiGithub, SiVite, SiNpm,
    SiMongodb, SiMysql, SiPostgresql, SiRedis
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Sparkles } from "lucide-react";

const SKILL_CATEGORIES = [
    {
        name: "Programming",
        items: [
            { name: "Python", icon: <SiPython />, level: 90, desc: "Scripting, ML, backend, automation." },
            { name: "JavaScript", icon: <SiJavascript />, level: 85, desc: "Web, backend, and tooling." },
            { name: "C++", icon: <SiCplusplus />, level: 80, desc: "Competitive programming, systems." },
            { name: "Java", icon: <FaJava />, level: 75, desc: "OOP, Android, backend." },
            { name: "Rust", icon: <SiRust />, level: 60, desc: "Safe, fast system programming." },
        ],
    },
    {
        name: "Frontend",
        items: [
            { name: "React.js", icon: <SiReact />, level: 85, desc: "SPA, hooks, context, portals." },
            { name: "Redux", icon: <SiRedux />, level: 78, desc: "State management for large apps." },
            { name: "Vue.js", icon: <SiVuedotjs />, level: 70, desc: "Progressive UI framework." },
            { name: "Next.js", icon: <SiNextdotjs />, level: 72, desc: "React SSR, SSG, API routes." },
            { name: "Bootstrap", icon: <SiBootstrap />, level: 88, desc: "Responsive UI components." },
            { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 75, desc: "Utility-first CSS." },
            { name: "Material UI", icon: <SiMui />, level: 70, desc: "React UI library." },
            { name: "Vite.js", icon: <SiVite />, level: 78, desc: "Fast frontend tooling." },
        ],
    },
    {
        name: "Backend & Tools",
        items: [
            { name: "Node.js", icon: <SiNodedotjs />, level: 82, desc: "Backend, REST APIs, SSR." },
            { name: "Express.js", icon: <SiExpress />, level: 76, desc: "Minimal backend framework." },
            { name: "Docker", icon: <SiDocker />, level: 70, desc: "Containerization, DevOps." },
            { name: "Linux", icon: <SiLinux />, level: 80, desc: "Daily dev, scripting." },
            { name: "Git", icon: <SiGit />, level: 85, desc: "Version control, collaboration." },
            { name: "GitHub", icon: <SiGithub />, level: 90, desc: "Open source, CI/CD, projects." },
            { name: "NPM", icon: <SiNpm />, level: 82, desc: "JS package manager." },
        ],
    },
    {
        name: "Databases",
        items: [
            { name: "MongoDB", icon: <SiMongodb />, level: 80, desc: "NoSQL, flexible schemas." },
            { name: "MySQL", icon: <SiMysql />, level: 75, desc: "Relational DB, transactions." },
            { name: "PostgreSQL", icon: <SiPostgresql />, level: 70, desc: "Advanced SQL, queries." },
            { name: "Redis", icon: <SiRedis />, level: 65, desc: "In-memory cache, pub/sub." },
        ],
    },
];

export default function Skills() {
    const [activeTab, setActiveTab] = useState(SKILL_CATEGORIES[0].name);
    const sectionRef = useRef(null);

    // Animate section on scroll
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const observer = new window.IntersectionObserver(
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

    // 3D tilt effect for cards (on hover/focus only)
    useEffect(() => {
        const cards = document.querySelectorAll(`.${styles.skillCard}`);
        cards.forEach(card => {
            const handleMove = e => {
                const rect = card.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
                const y = ((e.clientY - rect.top) / rect.height - 0.5) * 14;
                card.style.transform = `scale(1.07) rotateY(${-x}deg) rotateX(${y}deg)`;
            };
            const handleLeave = () => {
                card.style.transform = "";
            };
            card.addEventListener("mousemove", handleMove);
            card.addEventListener("mouseleave", handleLeave);
            card.addEventListener("focus", handleLeave); // reset on focus for keyboard users
            card.addEventListener("blur", handleLeave);
            // Clean up
            return () => {
                card.removeEventListener("mousemove", handleMove);
                card.removeEventListener("mouseleave", handleLeave);
                card.removeEventListener("focus", handleLeave);
                card.removeEventListener("blur", handleLeave);
            };
        });
    }, [activeTab]);

    // Animate progress bar on mount
    useEffect(() => {
        const bars = document.querySelectorAll(`.${styles.progress}`);
        bars.forEach(bar => {
            bar.style.strokeDasharray = "0,100";
            setTimeout(() => {
                const dash = bar.getAttribute("data-dash");
                bar.style.strokeDasharray = `${dash},100`;
            }, 150);
        });
    }, [activeTab]);

    const aiSuggestion = (
        <div className={styles.aiSuggestion}>
            <Sparkles size={18} />
            <span>AI: Based on your interests, try learning <b>TypeScript</b> next!</span>
        </div>
    );

    return (
        <section id="skills" className={styles.skillsSection}>
            <div className={styles.gradientBg}></div>
            <h2 className={styles.heading}>My <span>Tech Stack</span></h2>
            <div className={styles.tabs} role="tablist">
                {SKILL_CATEGORIES.map(cat => (
                    <button
                        key={cat.name}
                        className={activeTab === cat.name ? styles.activeTab : ""}
                        onClick={() => setActiveTab(cat.name)}
                        tabIndex={0}
                        role="tab"
                        aria-selected={activeTab === cat.name}
                        aria-controls={`panel-${cat.name}`}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>
            <div className={styles.skillWrapper} ref={sectionRef}>
                {SKILL_CATEGORIES.filter(cat => cat.name === activeTab).map((group, i) => (
                    <div key={i} className={styles.cardGrid} id={`panel-${group.name}`} role="tabpanel">
                        {group.items.map((skill, idx) => (
                            <div
                                key={idx}
                                className={styles.skillCard}
                                tabIndex={0}
                                aria-label={`Show details for ${skill.name}`}
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
                                            data-dash={skill.level}
                                            strokeDasharray={`${skill.level}, 100`}
                                            d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                        />
                                    </svg>
                                    <div className={styles.innerIcon}>{skill.icon}</div>
                                </div>
                                <p className={styles.skillName}>{skill.name}</p>
                                <p className={styles.levelText}>{skill.level}%</p>
                                <div className={styles.skillDetails}>
                                    <div><b>Description:</b> {skill.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            {aiSuggestion}
        </section>
    );
}
