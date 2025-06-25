// src/components/Projects.jsx
import styles from './Projects.module.css';
import { useState } from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import fallbackBanner from '../assets/project-fallback.jpg'; 

export default function Projects() {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Blockchain', 'Full Stack', 'Frontend'];

    const projects = [
        {
            name: "PramaanPatra",
            description:
                "A decentralized certificate management system built on blockchain to securely generate, validate, and store vital documents — from birth to land deeds.",
            link: "https://github.com/devayanm/pramaanpatra",
            live: "https://pramaanpatra.vercel.app/",
            category: "Blockchain",
            banner: "/assets/projects/pramaanpatra.png",
        },
        {
            name: "CareData",
            description:
                "Blockchain-based medical records platform with appointment booking, video consultations, lab tests, and patient blog. Built using EJS, Node.js, MongoDB, and Ethereum.",
            link: "https://github.com/devayanm/caredata",
            live: "",
            category: "Blockchain",
            banner: "", // fallback will apply
        },
        {
            name: "AssetHub",
            description:
                "Decentralized asset registry for land and vehicles built on Ethereum. Offers transparent and secure asset tracking via smart contracts.",
            link: "https://github.com/devayanm/assethub",
            live: "https://assethubweb.vercel.app/",
            category: "Blockchain",
            banner: "/assets/projects/assethub.png",
        },
        {
            name: "Exposio",
            description:
                "Virtual exhibitions platform with real-time interaction, user booths, galleries, and live chat. Made with full stack React and Node.",
            link: "https://github.com/devayanm/exposio",
            live: "https://exposio.vercel.app/",
            category: "Full Stack",
            banner: "/assets/projects/exposio.jpg",
        },
        {
            name: "Portfolio Website",
            description:
                "This portfolio you're seeing right now, built using React, Bootstrap, and CSS Modules with scroll reveal and component-based architecture.",
            link: "https://github.com/devayanm/portfolio",
            live: "https://devayan.vercel.app",
            category: "Frontend",
            banner: "", // fallback applies
        },
    ];

    const filtered = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className={styles.projectsSection}>
            <div className="container">
                <h2 className={`text-center fw-bold mb-4 ${styles.heading}`}>Projects</h2>

                <div className={styles.tabs}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`${styles.tabBtn} ${filter === cat ? styles.activeTab : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className={styles.cardGrid}>
                    {filtered.map((project, idx) => (
                        <Tilt key={idx} className={styles.tiltCard} tiltMaxAngleX={5} tiltMaxAngleY={5}>
                            <div className={styles.projectCard}>
                                <div className={styles.bannerWrapper}>
                                    <img
                                        src={project.banner || fallbackBanner}
                                        alt={project.name}
                                        className={styles.projectImage}
                                        loading="lazy"
                                    />
                                </div>
                                <div className={styles.cardBody}>
                                    <h5 className={styles.projectTitle}>{project.name}</h5>
                                    <p className={styles.projectDesc}>{project.description}</p>
                                </div>
                                <div className={styles.cardFooter}>
                                    <a href={project.link} className={styles.projectBtn} target="_blank" rel="noopener noreferrer">
                                        <FaGithub /> GitHub
                                    </a>
                                    {project.live && (
                                        <a href={project.live} className={styles.projectBtn} target="_blank" rel="noopener noreferrer">
                                            <FaGlobe /> Live
                                        </a>
                                    )}
                                </div>
                            </div>
                        </Tilt>
                    ))}
                </div>
            </div>
        </section>
    );
}
