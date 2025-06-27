import React from 'react';
import styles from './About.module.css';
import profile from '../assets/profile1.jpg';
import {
    Briefcase,
    Layers3,
    ShieldCheck,
    Code2,
    Rocket,
    GitBranch,
    Server,
    Settings2
} from 'lucide-react';
import { SiMongodb, SiSolidity, SiLinux, SiDocker } from 'react-icons/si';

export default function About() {
    const roles = [
        { year: '2024', title: 'Full Stack Developer (Intern)', company: 'PHICSIT (Soft Codehack)', tech: 'React, Node.js, MongoDB' },
        { year: '2024', title: 'Full Stack Developer (Intern)', company: 'PHICSIT', tech: 'React, Node.js, MongoDB' },
        { year: '2024 – Present', title: 'Full Stack Developer', company: 'PHICSIT (Nexfellow)', tech: 'React, Node.js, MongoDB' },
    ];

    const projects = [
        { year: '2024', title: 'Team Lead & Developer', name: 'PramaanPatra', tech: 'NFT, Blockchain Certificate System' },
        { year: '2024', title: 'Team Lead & Developer', name: 'AssetHub', tech: 'Solidity, Ethereum, Web3.js' },
        { year: '2024', title: 'Patent Filed', name: 'Proximity-Based Safety App', tech: 'Smart Community Emergency System' },
    ];

    return (
        <section id="about" className={styles.aboutSection}>
            <div className={styles.container}>

                {/* Profile Overview */}
                <div className={styles.profileCard}>
                    <div className={styles.glow}></div>
                    <img src={profile} alt="Devayan Mandal" className={styles.avatar} />
                    <h4 className={styles.name}>Devayan Mandal</h4>
                    <p className={styles.role}>Full Stack & Blockchain Developer</p>
                    <div className={styles.stats}>
                        <div><span className={styles.statNumber}>10+</span><span className={styles.statLabel}>Projects</span></div>
                        <div><span className={styles.statNumber}>2</span><span className={styles.statLabel}>Internships</span></div>
                        <div><span className={styles.statNumber}>∞</span><span className={styles.statLabel}>Learning</span></div>
                    </div>
                </div>

                {/* Career Timeline */}
                <div className={styles.textArea}>
                    <h2 className={styles.heading}>My Journey</h2>
                    <p className={styles.intro}>
                        Turning ideas into impact through full-stack development, open-source contributions, and blockchain innovations.
                    </p>

                    <div className={styles.timelineGroup}>
                        <h4 className={styles.subheading}><Briefcase className={styles.icon} /> Roles & Internships</h4>
                        {roles.map((item, i) => (
                            <div key={i} className={styles.timelineItem}>
                                <span className={styles.timelineDot}></span>
                                <div className={styles.timelineContent}>
                                    <strong>{item.year}</strong> — <b>{item.title}</b> at <i>{item.company}</i>
                                    <div className={styles.tech}>{item.tech}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.timelineGroup}>
                        <h4 className={styles.subheading}><Rocket className={styles.icon} /> Projects & Highlights</h4>
                        {projects.map((item, i) => (
                            <div key={i} className={styles.timelineItem}>
                                <span className={styles.timelineDot}></span>
                                <div className={styles.timelineContent}>
                                    <strong>{item.year}</strong> — <b>{item.title}</b> on <i>{item.name}</i>
                                    <div className={styles.tech}>{item.tech}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.badgeRow}>
                        <span className={styles.techBadge}><Code2 size={16} /> React</span>
                        <span className={styles.techBadge}><Server size={16} /> Node.js</span>
                        <span className={styles.techBadge}><SiMongodb size={16} /> MongoDB</span>
                        <span className={styles.techBadge}><SiSolidity size={16} /> Solidity</span>
                        <span className={styles.techBadge}><ShieldCheck size={16} /> Cybersecurity</span>
                        <span className={styles.techBadge}><GitBranch size={16} /> Git & GitHub</span>
                        <span className={styles.techBadge}><SiDocker size={16} /> Docker</span>
                        <span className={styles.techBadge}><SiLinux size={16} /> Linux</span>
                        <span className={styles.techBadge}><Settings2 size={16} /> DevOps</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
