import { useState } from 'react';
import styles from './Resume.module.css';
import {
    FaDownload, FaEnvelope, FaMapMarkerAlt, FaBriefcase,
    FaGraduationCap, FaUserFriends
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import resume from '../assets/Resume_Devayan_Mandal.pdf';
import { ClipLoader } from 'react-spinners';

export default function Resume() {
    const [showModal, setShowModal] = useState(false);
    const [iframeLoaded, setIframeLoaded] = useState(false);

    return (
        <section id="resume" className={styles.resumeSection}>
            <div className={styles.container}>
                {/* Header / Intro */}
                <motion.div
                    className={styles.hero}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className={styles.name}>Devayan Mandal</h1>
                    <p className={styles.tagline}>Full Stack Developer • System Designer • Web3 Enthusiast</p>
                    <div className={styles.contact}>
                        <span><FaMapMarkerAlt /> Kolkata, IN</span>
                        <span><FaEnvelope /> devayan9689@gmail.com</span>
                    </div>
                    <div className={styles.actions}>
                        <button className={styles.previewBtn} onClick={() => {
                            setIframeLoaded(false);
                            setShowModal(true);
                        }}>
                            Preview Resume
                        </button>
                        <a href={resume} download className={styles.downloadBtn}>
                            <FaDownload /> Download PDF
                        </a>
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

                            {!iframeLoaded && (
                                <div className={styles.spinnerWrapper}>
                                    <ClipLoader color="#0d6efd" size={48} />
                                </div>
                            )}

                            <iframe
                                src={resume}
                                title="Resume Preview"
                                className={styles.resumeIframe}
                                onLoad={() => setIframeLoaded(true)}
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
                            <h2><FaBriefcase /> Work Experience</h2>
                            <div className={styles.entry}>
                                <h4>PHICSIT, New Delhi</h4>
                                <div className={styles.roleMeta}>
                                    <strong>Full Stack Developer (Freelance)</strong>
                                    <span>Oct 2024 – Present</span>
                                </div>
                                <p>Architecting Nexfellow platform, building scalable REST APIs, reusable components.</p>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.roleMeta}>
                                    <strong>Full Stack Developer (Intern)</strong>
                                    <span>Sep 2024 – Oct 2024</span>
                                </div>
                                <p>Integrated Ethereum smart contracts with React frontend and backend APIs.</p>
                            </div>
                            <div className={styles.entry}>
                                <h4>Soft CodeHack</h4>
                                <div className={styles.roleMeta}>
                                    <strong>Web Developer</strong>
                                    <span>Jul 2023 – Sep 2024</span>
                                </div>
                                <p>Built responsive hackathon platform, ensured performance across devices.</p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <h2><FaUserFriends /> Volunteering</h2>
                            <div className={styles.entry}>
                                <h4>Microsoft</h4>
                                <div className={styles.roleMeta}>
                                    <strong>MS Learn Student Ambassador (Alpha)</strong>
                                    <span>Oct 2023 – Present</span>
                                </div>
                                <p>Conducted global workshops on GitHub, Azure, and FOSS principles.</p>
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
                            <h2><FaGraduationCap /> Education</h2>
                            <div className={styles.entry}>
                                <strong>B.Tech in Information Technology</strong>
                                <p>JIS College of Engineering • 2021 – 2025</p>
                                <p className={styles.sub}>Specialized in AI, Cloud, Web, and Cybersecurity.</p>
                            </div>
                            <div className={styles.entry}>
                                <strong>Senior Secondary (WBCHSE)</strong>
                                <p>Kendriya Vidyalaya • 2019 – 2021</p>
                                <p className={styles.sub}>PCM + CS • 79%</p>
                            </div>
                            <div className={styles.entry}>
                                <strong>Secondary (CBSE)</strong>
                                <p>Kendriya Vidyalaya • 2018 – 2019</p>
                                <p className={styles.sub}>69%</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
