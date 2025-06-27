import { useState } from 'react';
import styles from './Projects.module.css';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import fallbackBanner from '../assets/project-fallback.jpg';
import exposio from '../assets/exposio.jpg';
import assethub from '../assets/assethub.jpg';
import caredata from '../assets/caredata.jpg';
import pramaanpatra from '../assets/pramaanpatra.jpg';

const projects = [
    {
        name: "PramaanPatra",
        description: "Decentralized certificate management system using blockchain. Securely generates, stores and validates certificates.",
        link: "https://github.com/devayanm/pramaanpatra",
        live: "https://pramaanpatra.vercel.app/",
        category: "Blockchain",
        banner: pramaanpatra,
    },
    {
        name: "CareData",
        description: "Blockchain-based medical record platform with bookings, labs, video consults, and patient blog.",
        link: "https://github.com/devayanm/caredata",
        live: "",
        category: "Blockchain",
        banner: caredata,
    },
    {
        name: "AssetHub",
        description: "Ethereum-based registry for land and vehicles. Secure asset tracking via smart contracts.",
        link: "https://github.com/devayanm/assethub",
        live: "https://assethubweb.vercel.app/",
        category: "Blockchain",
        banner: assethub,
    },
    {
        name: "Exposio",
        description: "Virtual exhibitions platform with real-time booths, galleries, and chats. Full-stack React and Node.",
        link: "https://github.com/devayanm/exposio",
        live: "https://exposio.vercel.app/",
        category: "Full Stack",
        banner: exposio,
    },
    {
        name: "Portfolio Website",
        description: "This portfolio site built with React, Bootstrap, scroll animations, and component architecture.",
        link: "https://github.com/devayanm/portfolio",
        live: "https://devayan.vercel.app",
        category: "Frontend",
        banner: "",
    },
];

const categories = ['All', 'Blockchain', 'Full Stack', 'Frontend'];

export default function Projects() {
    const [filter, setFilter] = useState('All');
    const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);
    const isSingle = filtered.length === 1;

    return (
        <section id="projects" className={styles.projectsSection}>
            <h2 className={styles.heading}>Projects</h2>

            <div className={styles.tabs}>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`${styles.tabBtn} ${filter === cat ? styles.activeTab : ''}`}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className={`${styles.cardGrid} ${isSingle ? styles.single : ''}`}>
                {filtered.map((project, idx) => (
                    <Tilt
                        key={idx}
                        className={styles.tiltCard}
                        tiltMaxAngleX={8}
                        tiltMaxAngleY={8}
                        glareEnable
                        glareMaxOpacity={0.1}
                        scale={1.02}
                    >
                        <div className={styles.cardWrapper}>
                            <div className={styles.projectCard}>
                                <div className={styles.bannerWrapper}>
                                    <img
                                        src={project.banner || fallbackBanner}
                                        alt={project.name}
                                        className={styles.projectImage}
                                        loading="lazy"
                                    />
                                    <span className={styles.blob}></span>
                                    <div className={styles.bannerOverlay}>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            <FaGithub />
                                        </a>
                                        {project.live && (
                                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                                                <FaGlobe />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <div className={styles.cardBody}>
                                    <h5 className={styles.projectTitle}>{project.name}</h5>
                                    <p className={styles.projectDesc}>{project.description}</p>
                                </div>
                            </div>
                        </div>
                    </Tilt>
                ))}
            </div>
        </section>
    );
}
