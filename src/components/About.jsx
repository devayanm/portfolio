import React, { useState, useRef, useEffect } from "react";
import styles from "./About.module.css";
import profile from "../assets/profile1.jpg";
import {
    Briefcase,
    Rocket,
    Code2,
    Server,
    ShieldCheck,
    GitBranch,
    Settings2,
    Layers3,
} from "lucide-react";
import { SiMongodb, SiSolidity, SiLinux, SiDocker } from "react-icons/si";

const STATS = [
    { label: "Projects", value: 10, icon: <Rocket size={18} /> },
    { label: "Internships", value: 2, icon: <Briefcase size={18} /> },
    { label: "Learning", value: "∞", icon: <Layers3 size={18} /> },
];

const ROLES = [
    { year: "2024", title: "Full Stack Developer (Intern)", company: "PHICSIT (Soft Codehack)", tech: ["React", "Node.js", "MongoDB"] },
    { year: "2024", title: "Full Stack Developer (Intern)", company: "PHICSIT", tech: ["React", "Node.js", "MongoDB"] },
    { year: "2024 – Present", title: "Full Stack Developer", company: "PHICSIT (Nexfellow)", tech: ["React", "Node.js", "MongoDB"] },
];

const PROJECTS = [
    { year: "2024", title: "Team Lead & Developer", name: "PramaanPatra", tech: ["NFT", "Blockchain", "Certificate System"] },
    { year: "2024", title: "Team Lead & Developer", name: "AssetHub", tech: ["Solidity", "Ethereum", "Web3.js"] },
    { year: "2024", title: "Patent Filed", name: "Proximity-Based Safety App", tech: ["Smart Community", "Emergency System"] },
];

const BADGES = [
    { label: "React", icon: <Code2 size={16} /> },
    { label: "Node.js", icon: <Server size={16} /> },
    { label: "MongoDB", icon: <SiMongodb size={16} /> },
    { label: "Solidity", icon: <SiSolidity size={16} /> },
    { label: "Cybersecurity", icon: <ShieldCheck size={16} /> },
    { label: "Git & GitHub", icon: <GitBranch size={16} /> },
    { label: "Docker", icon: <SiDocker size={16} /> },
    { label: "Linux", icon: <SiLinux size={16} /> },
    { label: "DevOps", icon: <Settings2 size={16} /> },
];

export default function About() {
    const [filter, setFilter] = useState(null);
    const [statsInView, setStatsInView] = useState(false);
    const statsRef = useRef();
    const [timelineInView, setTimelineInView] = useState(false);
    const timelineRef = useRef();
    const profileRef = useRef();

    useEffect(() => {
        const node = profileRef.current;
        if (!node) return;
        const handleMove = (e) => {
            const rect = node.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
            node.style.transform = `rotateY(${-x}deg) rotateX(${y}deg) scale(1.04)`;
        };
        const handleTouch = (e) => {
            if (!e.touches.length) return;
            const touch = e.touches[0];
            const rect = node.getBoundingClientRect();
            const x = ((touch.clientX - rect.left) / rect.width - 0.5) * 20;
            const y = ((touch.clientY - rect.top) / rect.height - 0.5) * 20;
            node.style.transform = `rotateY(${-x}deg) rotateX(${y}deg) scale(1.04)`;
        };
        const reset = () => { node.style.transform = ""; };
        node.addEventListener("mousemove", handleMove);
        node.addEventListener("mouseleave", reset);
        node.addEventListener("touchmove", handleTouch);
        node.addEventListener("touchend", reset);
        return () => {
            node.removeEventListener("mousemove", handleMove);
            node.removeEventListener("mouseleave", reset);
            node.removeEventListener("touchmove", handleTouch);
            node.removeEventListener("touchend", reset);
        };
    }, []);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === statsRef.current && entry.isIntersecting) setStatsInView(true);
                    if (entry.target === timelineRef.current && entry.isIntersecting) setTimelineInView(true);
                });
            },
            { threshold: 0.3 }
        );
        if (statsRef.current) observer.observe(statsRef.current);
        if (timelineRef.current) observer.observe(timelineRef.current);
        return () => observer.disconnect();
    }, []);

    const filteredRoles = filter
        ? ROLES.filter((r) => r.tech.includes(filter))
        : ROLES;
    const filteredProjects = filter
        ? PROJECTS.filter((p) => p.tech.includes(filter))
        : PROJECTS;

    const useCountUp = (end, inView, duration = 1200) => {
        const [count, setCount] = useState(0);
        useEffect(() => {
            if (!inView || typeof end !== "number") {
                setCount(end);
                return;
            }
            let frame;
            const startTime = performance.now();
            const step = (now) => {
                const progress = Math.min((now - startTime) / duration, 1);
                setCount(Math.floor(progress * end));
                if (progress < 1) frame = requestAnimationFrame(step);
                else setCount(end);
            };
            frame = requestAnimationFrame(step);
            return () => cancelAnimationFrame(frame);
        }, [end, inView]);
        return typeof end === "number" ? count : end;
    };

    return (
        <section id="about" className={styles.aboutSection}>
            <div className={styles.gradientBg}></div>
            <div className={styles.container}>
                {/* Profile Card */}
                <div className={styles.profileCard} ref={profileRef} tabIndex={0}>
                    <div className={styles.profileBg}></div>
                    <div className={styles.avatarWrapper}>
                        <img src={profile} alt="Devayan Mandal" className={styles.avatar} />
                        <div className={styles.avatarGlow}></div>
                        <div className={`${styles.floatingIcon} ${styles.floatingIcon1}`}>
                            <Rocket size={24} color="#0d6efd" />
                        </div>
                        <div className={`${styles.floatingIcon} ${styles.floatingIcon2}`}>
                            <SiDocker size={20} color="#00dfd8" />
                        </div>
                        <div className={`${styles.floatingIcon} ${styles.floatingIcon3}`}>
                            <SiSolidity size={20} color="#222" />
                        </div>
                    </div>
                    <h4 className={styles.name}>Devayan Mandal</h4>
                    <p className={styles.role}>Full Stack & Blockchain Developer</p>
                    <div className={styles.stats} ref={statsRef}>
                        {STATS.map(({ label, value, icon }, i) => (
                            <div key={label} className={styles.statBox}>
                                <span className={styles.statNumber}>
                                    {useCountUp(value === "∞" ? 100 : value, statsInView)}
                                    {value === "∞" ? "∞" : ""}
                                </span>
                                <span className={styles.statLabel}>{icon} {label}</span>
                            </div>
                        ))}
                    </div>
                    <hr />
                    <div className={styles.profileBio}>
                        Passionate about building robust, scalable web apps, secure systems, and decentralized solutions. Always learning, always shipping!
                    </div>
                    <div className={styles.badgeCloud}>
                        {BADGES.map((badge) => (
                            <button
                                key={badge.label}
                                className={`${styles.techBadge} ${filter === badge.label ? styles.activeBadge : ""}`}
                                onClick={() => setFilter(filter === badge.label ? null : badge.label)}
                                aria-pressed={filter === badge.label}
                            >
                                {badge.icon} {badge.label}
                            </button>
                        ))}
                        {filter && (
                            <button className={styles.clearFilter} onClick={() => setFilter(null)}>
                                Clear Filter ✕
                            </button>
                        )}
                    </div>
                </div>

                {/* Timeline/Text Area */}
                <div className={styles.textArea} ref={timelineRef}>
                    <h2 className={styles.heading}>My Journey</h2>
                    <p className={styles.intro}>
                        Turning ideas into impact through full-stack development, open-source contributions, and blockchain innovations.
                    </p>
                    <div className={`${styles.timelineGroup} ${timelineInView ? styles.visible : ""}`}>
                        <h4 className={styles.subheading}><Briefcase className={styles.icon} /> Roles & Internships</h4>
                        {filteredRoles.length === 0 && (
                            <div className={styles.timelineItem}>
                                <span className={styles.timelineDot}></span>
                                <div className={styles.timelineContent}>No roles found for <b>{filter}</b></div>
                            </div>
                        )}
                        {filteredRoles.map((item, i) => (
                            <div key={i} className={styles.timelineItem}>
                                <span className={styles.timelineDot}></span>
                                <div className={styles.timelineContent}>
                                    <strong>{item.year}</strong> — <b>{item.title}</b> at <i>{item.company}</i>
                                    <div className={styles.tech}>{item.tech.join(", ")}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={`${styles.timelineGroup} ${timelineInView ? styles.visible : ""}`}>
                        <h4 className={styles.subheading}><Rocket className={styles.icon} /> Projects & Highlights</h4>
                        {filteredProjects.length === 0 && (
                            <div className={styles.timelineItem}>
                                <span className={styles.timelineDot}></span>
                                <div className={styles.timelineContent}>No projects found for <b>{filter}</b></div>
                            </div>
                        )}
                        {filteredProjects.map((item, i) => (
                            <div key={i} className={styles.timelineItem}>
                                <span className={styles.timelineDot}></span>
                                <div className={styles.timelineContent}>
                                    <strong>{item.year}</strong> — <b>{item.title}</b> on <i>{item.name}</i>
                                    <div className={styles.tech}>{item.tech.join(", ")}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
