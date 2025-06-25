import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import profile from "../assets/profile.jpg";

const roles = [
    "Full Stack Developer",
    "Machine Learning Enthusiast",
    "Cybersecurity Advocate",
    "Open Source Contributor",
    "UI/UX Explorer"
];

export default function Hero() {
    const subtitleRef = useRef(null);
    let roleIdx = 0;

    useEffect(() => {
        let timeout, charIdx = 0, forward = true;

        const type = () => {
            const role = roles[roleIdx];
            if (forward) {
                charIdx++;
                if (charIdx > role.length) {
                    forward = false;
                    timeout = setTimeout(type, 1200);
                    return;
                }
            } else {
                charIdx--;
                if (charIdx < 0) {
                    forward = true;
                    roleIdx = (roleIdx + 1) % roles.length;
                    timeout = setTimeout(type, 400);
                    return;
                }
            }
            if (subtitleRef.current) {
                subtitleRef.current.textContent = role.slice(0, charIdx);
            }
            timeout = setTimeout(type, forward ? 50 : 30);
        };

        type();
        return () => clearTimeout(timeout);
    }, []);

    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.heroLeft}>
                <h1 className={styles.name}>Hey, I'm Devayan 👋</h1>
                <h2 className={styles.role}>
                    <span ref={subtitleRef}></span>
                    <span className={styles.cursor}>|</span>
                </h2>
                <p className={styles.description}>
                    I build modern web experiences with precision and passion.
                </p>
                <div className={styles.buttons}>
                    <a href="#projects" className={styles.primaryBtn}>
                        View Projects
                    </a>
                    <a href="#contact" className={styles.secondaryBtn}>
                        Let’s Talk
                    </a>
                </div>
            </div>

            <div className={styles.heroRight}>
                <div className={styles.profileCard}>
                    <img src={profile} alt="Devayan Mandal" className={styles.profileImage} />
                </div>
                <svg className={styles.bgTriangle} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="150,20 280,280 20,280" fill="url(#gradient)" />
                    <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#0ff" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#0d6efd" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    );
}
