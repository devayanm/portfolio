import { useState, useMemo, useRef, useEffect } from 'react';
import styles from './Projects.module.css';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import fallbackBanner from '../assets/project-fallback.jpg';
import exposio from '../assets/exposio.jpg';
import assethub from '../assets/assethub.jpg';
import caredata from '../assets/caredata.jpg';
import pramaanpatra from '../assets/pramaanpatra.jpg';
import { Sparkles } from 'lucide-react';

// --- Project Data ---
const projects = [
    {
        name: "PramaanPatra",
        description: "Decentralized certificate management system using blockchain. Securely generates, stores and validates certificates.",
        link: "https://github.com/devayanm/pramaanpatra",
        live: "https://pramaanpatra.vercel.app/",
        category: "Blockchain",
        banner: pramaanpatra,
        tech: ["React", "Node.js", "Solidity", "MongoDB", "Web3.js"],
        featured: true,
    },
    {
        name: "CareData",
        description: "Blockchain-based medical record platform with bookings, labs, video consults, and patient blog.",
        link: "https://github.com/devayanm/caredata",
        live: "",
        category: "Blockchain",
        banner: caredata,
        tech: ["React", "Node.js", "Solidity", "MongoDB"],
        featured: false,
    },
    {
        name: "AssetHub",
        description: "Ethereum-based registry for land and vehicles. Secure asset tracking via smart contracts.",
        link: "https://github.com/devayanm/assethub",
        live: "https://assethubweb.vercel.app/",
        category: "Blockchain",
        banner: assethub,
        tech: ["React", "Node.js", "Solidity", "MongoDB", "Web3.js"],
        featured: true,
    },
    {
        name: "Exposio",
        description: "Virtual exhibitions platform with real-time booths, galleries, and chats. Full-stack React and Node.",
        link: "https://github.com/devayanm/exposio",
        live: "https://exposio.vercel.app/",
        category: "Full Stack",
        banner: exposio,
        tech: ["React", "Node.js", "Socket.io", "MongoDB"],
        featured: false,
    },
    {
        name: "Portfolio Website",
        description: "This portfolio site built with React, Bootstrap, scroll animations, and component architecture.",
        link: "https://github.com/devayanm/portfolio",
        live: "https://devayan.vercel.app",
        category: "Frontend",
        banner: "",
        tech: ["React", "Bootstrap", "CSS", "Vercel"],
        featured: false,
    },
];

// --- Generate unique categories dynamically ---
const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

export default function Projects() {
    const [filter, setFilter] = useState('All');
    const [search, setSearch] = useState('');
    const [modal, setModal] = useState(null);
    const gridRef = useRef(null);

    // Filtered projects by category and search
    const filtered = useMemo(() => {
        let list = filter === 'All' ? projects : projects.filter(p => p.category === filter);
        if (search.trim()) {
            const q = search.toLowerCase();
            list = list.filter(
                p =>
                    p.name.toLowerCase().includes(q) ||
                    p.description.toLowerCase().includes(q) ||
                    (p.tech && p.tech.join(" ").toLowerCase().includes(q))
            );
        }
        return list;
    }, [filter, search]);

    // Animate grid on scroll
    useEffect(() => {
        const el = gridRef.current;
        if (!el) return;
        el.classList.remove(styles.show);
        setTimeout(() => el.classList.add(styles.show), 50);
    }, [filter, search]);

    // Modal close on Escape
    useEffect(() => {
        const handler = (e) => { if (e.key === "Escape") setModal(null); };
        if (modal) window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [modal]);

    return (
        <section id="projects" className={styles.projectsSection}>
            <h2 className={styles.heading}>Projects</h2>

            <div className={styles.topBar}>
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
                <input
                    type="search"
                    className={styles.searchBar}
                    placeholder="Search projects..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    aria-label="Search projects"
                />
            </div>

            <div className={`${styles.cardGrid}`} ref={gridRef}>
                {filtered.length === 0 && (
                    <div className={styles.emptyMsg}>
                        <span>No projects found.</span>
                    </div>
                )}
                {filtered.map((project, idx) => (
                    <Tilt
                        key={idx}
                        className={styles.tiltCard}
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        glareEnable
                        glareMaxOpacity={0.12}
                        scale={1.03}
                        transitionSpeed={1200}
                    >
                        <div className={styles.cardWrapper}>
                            <div className={styles.projectCard} tabIndex={0} onClick={() => setModal(project)}>
                                <div className={styles.bannerWrapper}>
                                    <img
                                        src={project.banner || fallbackBanner}
                                        alt={project.name}
                                        className={styles.projectImage}
                                        loading="lazy"
                                    />
                                    <span className={styles.blob}></span>
                                    {project.featured && (
                                        <span className={styles.featuredBadge}>
                                            <Sparkles size={14} /> Featured
                                        </span>
                                    )}
                                    <div className={styles.bannerOverlay}>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" title="Source Code">
                                            <FaGithub />
                                        </a>
                                        {project.live && (
                                            <a href={project.live} target="_blank" rel="noopener noreferrer" title="Live Demo">
                                                <FaGlobe />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <div className={styles.cardBody}>
                                    <h5 className={styles.projectTitle}>{project.name}</h5>
                                    <p className={styles.projectDesc}>{project.description}</p>
                                    <div className={styles.techRow}>
                                        {project.tech?.map((tech, i) => (
                                            <span key={i} className={styles.techBadge}>{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tilt>
                ))}
            </div>

            {/* Modal for project details */}
            {modal && (
                <div className={styles.modalOverlay} onClick={() => setModal(null)} tabIndex={-1}>
                    <div className={styles.modal} onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
                        <button className={styles.closeBtn} onClick={() => setModal(null)} aria-label="Close">×</button>
                        <img
                            src={modal.banner || fallbackBanner}
                            alt={modal.name}
                            className={styles.modalBanner}
                        />
                        <h3>{modal.name}</h3>
                        <p className={styles.modalDesc}>{modal.description}</p>
                        <div className={styles.modalTechRow}>
                            {modal.tech?.map((tech, i) => (
                                <span key={i} className={styles.techBadge}>{tech}</span>
                            ))}
                        </div>
                        <div className={styles.modalLinks}>
                            <a href={modal.link} target="_blank" rel="noopener noreferrer">
                                <FaGithub /> Source
                            </a>
                            {modal.live && (
                                <a href={modal.live} target="_blank" rel="noopener noreferrer">
                                    <FaGlobe /> Live
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
