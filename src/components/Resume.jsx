import { useState } from 'react';
import styles from './Resume.module.css';
import { FaDownload, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import resume from '../assets/Resume_Devayan_Mandal.pdf';

export default function Resume() {
    const [showModal, setShowModal] = useState(false);

    return (
        <section id="resume" className={styles.resumeSection}>
            <div className="container">
                <h2 className={`text-center fw-bold mb-4 ${styles.heading}`}>Resume</h2>

                <div className={`d-flex justify-content-center gap-3 flex-wrap mb-5`}>
                    <button
                        className={styles.previewBtn}
                        onClick={() => setShowModal(true)}
                    >
                        Preview Resume
                    </button>

                    <a
                        href={resume}
                        download
                        className={styles.downloadBtn}
                    >
                        <FaDownload /> Download PDF
                    </a>
                </div>

                {/* Modal */}
                {showModal && (
                    <div className={styles.modalBackdrop} onClick={() => setShowModal(false)}>
                        <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                            <button className={styles.modalClose} onClick={() => setShowModal(false)}>×</button>
                            <iframe
                                src={resume}
                                title="Resume Preview"
                                className={styles.resumeIframe}
                                frameBorder="0"
                            ></iframe>
                        </div>
                    </div>
                )}

                <div className={styles.intro}>
                    <h3 className={styles.name}>Devayan Mandal</h3>
                    <p className={styles.title}>
                        Full Stack Developer with 3+ years of hands-on experience building secure, performant, and scalable web apps.
                        Passionate about clean code, system design, and impactful engineering.
                    </p>
                    <div className={styles.contact}>
                        <span><FaMapMarkerAlt /> Kolkata, IN</span>
                        <span><FaEnvelope /> devayan9689@gmail.com</span>
                    </div>
                </div>

                <div className={styles.grid}>
                    <div className={styles.leftCol}>
                        <h4 className={styles.sectionTitle}>Experience</h4>

                        <div className={styles.companyBlock}>
                            <h5 className={styles.companyName}>PHICSIT, New Delhi</h5>
                            <div className={styles.roleEntry}>
                                <div className={styles.roleHeader}>
                                    <strong>Full Stack Developer (Freelance)</strong>
                                    <span>Oct 2024 – Present</span>
                                </div>
                                <p>
                                    Leading product architecture and full-stack development of Nexfellow platform. Contributing to internal tooling and scalable REST APIs.
                                </p>
                            </div>
                            <div className={styles.roleEntry}>
                                <div className={styles.roleHeader}>
                                    <strong>Full Stack Developer (Intern)</strong>
                                    <span>Sep 2024 – Oct 2024</span>
                                </div>
                                <p>
                                    Built secure backend modules and integrated Ethereum-based smart contracts with frontend in React.
                                </p>
                            </div>
                        </div>

                        <div className={styles.companyBlock}>
                            <h5 className={styles.companyName}>Soft CodeHack</h5>
                            <div className={styles.roleEntry}>
                                <div className={styles.roleHeader}>
                                    <strong>Web Developer</strong>
                                    <span>Jul 2023 – Sep 2024</span>
                                </div>
                                <p>
                                    Developed and maintained the official hackathon platform. Ensured cross-device support and optimized deployment pipelines.
                                </p>
                            </div>
                        </div>

                        <h4 className={styles.sectionTitle}>Volunteering</h4>
                        <div className={styles.companyBlock}>
                            <h5 className={styles.companyName}>Microsoft</h5>
                            <div className={styles.roleEntry}>
                                <div className={styles.roleHeader}>
                                    <strong>Microsoft Learn Student Ambassador (Alpha)</strong>
                                    <span>Oct 2023 – Present</span>
                                </div>
                                <p>
                                    Leading sessions on cloud fundamentals, Git/GitHub, and open-source contribution for fellow students globally.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.rightCol}>
                        <h4 className={styles.sectionTitle}>Education</h4>
                        <ul className={styles.educationList}>
                            <li>
                                <strong>B.Tech in Information Technology</strong><br />
                                JIS College of Engineering, Kalyani<br />
                                <span className={styles.date}>2021 – 2025</span>
                                <p>Subjects: Data Structures, DBMS, OS, AI, Cloud, CyberSecurity, Web Tech</p>
                            </li>
                            <li>
                                <strong>Senior Secondary (WBCHSE)</strong><br />
                                Kendriya Vidyalaya<br />
                                <span className={styles.date}>2019 – 2021</span>
                                <p>PCM + CS | 79%</p>
                            </li>
                            <li>
                                <strong>Secondary (CBSE)</strong><br />
                                Kendriya Vidyalaya<br />
                                <span className={styles.date}>2018 – 2019</span>
                                <p>69%</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
