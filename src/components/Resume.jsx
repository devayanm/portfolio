import { useState } from 'react';
import styles from './Resume.module.css';
import {
    FaDownload, FaEnvelope, FaMapMarkerAlt, FaBriefcase,
    FaGraduationCap, FaUserFriends, FaLinkedin, FaGithub, FaGlobe
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ClipLoader } from 'react-spinners';

const resume = '/Resume_Devayan_Mandal.pdf';

const CONTACTS = [
    { icon: <FaMapMarkerAlt />, text: "Kolkata, IN" },
    { icon: <FaEnvelope />, text: "devayan9689@gmail.com", link: "mailto:devayan9689@gmail.com" },
    { icon: <FaLinkedin />, text: "LinkedIn", link: "https://linkedin.com/in/devayan-mandal" },
    { icon: <FaGithub />, text: "GitHub", link: "https://github.com/devayanm" },
    { icon: <FaGlobe />, text: "Portfolio", link: "https://devayan.vercel.app" }
];

const WORK = [
    {
        org: "PHICSIT, New Delhi",
        roles: [
            {
                title: "Full Stack Developer (Freelance)",
                period: "Oct 2024 – Present",
                desc: "Architecting Nexfellow platform, building scalable REST APIs, reusable components."
            },
            {
                title: "Full Stack Developer (Intern)",
                period: "Sep 2024 – Oct 2024",
                desc: "Integrated Ethereum smart contracts with React frontend and backend APIs."
            }
        ]
    },
    {
        org: "Soft CodeHack",
        roles: [
            {
                title: "Web Developer",
                period: "Jul 2023 – Sep 2024",
                desc: "Built responsive hackathon platform, ensured performance across devices."
            }
        ]
    }
];

const EDUCATION = [
    {
        degree: "B.Tech in Information Technology",
        place: "JIS College of Engineering",
        period: "2021 – 2025",
        sub: "Specialized in AI, Cloud, Web, and Cybersecurity."
    },
    {
        degree: "Senior Secondary (CBSE)",
        place: "Kendriya Vidyalaya, Fort William",
        period: "2019 – 2021",
        sub: "PCM + CS • 79%"
    },
    {
        degree: "Secondary (CBSE)",
        place: "Kendriya Vidyalaya, Fort William",
        period: "2018 – 2019",
        sub: "69%"
    }
];

const VOLUNTEER = [
    {
        org: "Microsoft",
        title: "MS Learn Student Ambassador",
        period: "Oct 2023 – Oct 2024",
        desc: "Conducted global workshops on GitHub, Azure, and FOSS principles."
    }
];

const SKILLS = [
    "Full Stack Development", "Smart Contracts", "System Design", "REST APIs",
    "Web3", "React", "Node.js", "MongoDB", "Solidity", "Cloud", "Cybersecurity"
];

export default function Resume() {
    const [showModal, setShowModal] = useState(false);
    const [iframeLoaded, setIframeLoaded] = useState(false);
    const [iframeError, setIframeError] = useState(false);

    // Download with fallback
    const handleDownload = (e) => {
        e.preventDefault();
        const link = document.createElement('a');
        link.href = resume;
        link.download = "Resume_Devayan_Mandal.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Google Docs Viewer fallback for production (universal PDF preview)
    const pdfUrl = typeof window !== "undefined" && window.location.hostname !== "localhost"
        ? `https://docs.google.com/gview?url=${window.location.origin}${resume}&embedded=true`
        : resume;

    return (
        <section id="resume" className={styles.resumeSection}>
            <h2 className={styles.sectionHeading}>Resume</h2>
            <div className={styles.container}>
                {/* Header */}
                <motion.div
                    className={styles.hero}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className={styles.name}>Devayan Mandal</h1>
                    <p className={styles.tagline}>Full Stack Developer • System Designer • Web3 Enthusiast</p>
                    <div className={styles.contact}>
                        {CONTACTS.map((c, i) => c.link ? (
                            <a key={i} href={c.link} target="_blank" rel="noopener noreferrer" className={styles.contactBadge}>
                                {c.icon} {c.text}
                            </a>
                        ) : (
                            <span key={i} className={styles.contactBadge}>{c.icon} {c.text}</span>
                        ))}
                    </div>
                    <div className={styles.actions}>
                        <button className={styles.previewBtn} onClick={() => {
                            setIframeLoaded(false);
                            setIframeError(false);
                            setShowModal(true);
                        }}>
                            Preview Resume
                        </button>
                        <a href={resume} download className={styles.downloadBtn} onClick={handleDownload}>
                            <FaDownload /> Download PDF
                        </a>
                    </div>
                    <div className={styles.skillsRow}>
                        {SKILLS.map((s, i) => (
                            <span key={i} className={styles.skillBadge}>{s}</span>
                        ))}
                    </div>
                </motion.div>

                {/* Modal */}
                {showModal && (
                    <div className={styles.modalBackdrop} onClick={() => setShowModal(false)}>
                        <div
                            className={`${styles.modalContent} ${!iframeLoaded ? styles.loading : ''}`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className={styles.modalClose} onClick={() => setShowModal(false)}>×</button>
                            {!iframeLoaded && !iframeError && (
                                <div className={styles.spinnerWrapper}>
                                    <ClipLoader color="#0d6efd" size={48} />
                                </div>
                            )}
                            {iframeError && (
                                <div className={styles.errorMsg}>
                                    <p>Failed to load preview. <a href={resume} download>Download PDF</a></p>
                                </div>
                            )}
                            <iframe
                                src={pdfUrl}
                                title="Resume Preview"
                                className={styles.resumeIframe}
                                onLoad={() => setIframeLoaded(true)}
                                onError={() => setIframeError(true)}
                            />
                        </div>
                    </div>
                )}

                {/* Grid Layout */}
                <div className={styles.grid}>
                    {/* Left Column */}
                    <motion.div
                        className={styles.leftCol}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.card}>
                            <h3><FaBriefcase /> Work Experience</h3>
                            <div className={styles.timeline}>
                                {WORK.map((job, i) => (
                                    <div key={i} className={styles.timelineItem}>
                                        <div className={styles.timelineDot}></div>
                                        <div>
                                            <h4>{job.org}</h4>
                                            {job.roles.map((role, j) => (
                                                <div key={j} className={styles.roleMeta}>
                                                    <strong>{role.title}</strong>
                                                    <span>{role.period}</span>
                                                    <p>{role.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.card}>
                            <h3><FaUserFriends /> Volunteering</h3>
                            <div className={styles.timeline}>
                                {VOLUNTEER.map((v, i) => (
                                    <div key={i} className={styles.timelineItem}>
                                        <div className={styles.timelineDot}></div>
                                        <div>
                                            <h4>{v.org}</h4>
                                            <div className={styles.roleMeta}>
                                                <strong>{v.title}</strong>
                                                <span>{v.period}</span>
                                                <p>{v.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        className={styles.rightCol}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className={styles.card}>
                            <h3><FaGraduationCap /> Education</h3>
                            <div className={styles.timeline}>
                                {EDUCATION.map((edu, i) => (
                                    <div key={i} className={styles.timelineItem}>
                                        <div className={styles.timelineDot}></div>
                                        <div>
                                            <strong>{edu.degree}</strong>
                                            <p>{edu.place} • {edu.period}</p>
                                            <p className={styles.sub}>{edu.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
