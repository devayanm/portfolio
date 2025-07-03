import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./Hero.module.css";
import profile from "../assets/profile.jpg";
import {
    Rocket,
    MessageCircle,
    Sparkles,
    Sun,
    Moon,
    Download,
    ChevronDown,
} from "lucide-react";
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaInstagram,
} from "react-icons/fa";

import { PiHandWaving } from "react-icons/pi";

// === CONFIG: Make it your own! ===
const roles = [
    "Full Stack Developer",
    "Machine Learning Enthusiast",
    "Cybersecurity Advocate",
    "Open Source Contributor",
    "UI/UX Explorer",
];

const socials = [
    {
        href: "https://github.com/yourusername",
        label: "GitHub",
        icon: <FaGithub />,
    },
    {
        href: "https://linkedin.com/in/yourusername",
        label: "LinkedIn",
        icon: <FaLinkedin />,
    },
    {
        href: "https://twitter.com/yourusername",
        label: "Twitter",
        icon: <FaTwitter />,
    },
    {
        href: "https://instagram.com/yourusername",
        label: "Instagram",
        icon: <FaInstagram />,
    },
];

const resumeLink = "/Devayan_Mandal_Resume.pdf";

// === COMPONENT ===
export default function Hero() {
    // Typing effect state
    const [roleIdx, setRoleIdx] = useState(0);
    const [charIdx, setCharIdx] = useState(0);
    const [forward, setForward] = useState(true);

    // Dark mode state (persistent)
    const [darkMode, setDarkMode] = useState(() => {
        const stored = localStorage.getItem("darkMode");
        return stored === null ? window.matchMedia("(prefers-color-scheme: dark)").matches : stored === "true";
    });

    // Typing effect
    useEffect(() => {
        let timeout;
        const role = roles[roleIdx];
        if (forward) {
            if (charIdx < role.length) {
                timeout = setTimeout(() => setCharIdx((i) => i + 1), 50);
            } else {
                timeout = setTimeout(() => setForward(false), 1200);
            }
        } else {
            if (charIdx > 0) {
                timeout = setTimeout(() => setCharIdx((i) => i - 1), 30);
            } else {
                timeout = setTimeout(() => {
                    setForward(true);
                    setRoleIdx((i) => (i + 1) % roles.length);
                }, 400);
            }
        }
        return () => clearTimeout(timeout);
    }, [charIdx, forward, roleIdx]);

    // Dark mode effect
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add(styles.dark);
        } else {
            document.body.classList.remove(styles.dark);
        }
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode, styles.dark]);

    // Parallax (mouse and touch)
    const profileRef = useRef();
    useEffect(() => {
        const node = profileRef.current;
        if (!node) return;
        // Mouse
        const handleMove = (e) => {
            const rect = node.getBoundingClientRect();
            const x =
                ((e.clientX - rect.left) / rect.width - 0.5) * 20;
            const y =
                ((e.clientY - rect.top) / rect.height - 0.5) * 20;
            node.style.transform = `rotateY(${-x}deg) rotateX(${y}deg) scale(1.06)`;
        };
        // Touch
        const handleTouch = (e) => {
            if (!e.touches.length) return;
            const touch = e.touches[0];
            const rect = node.getBoundingClientRect();
            const x =
                ((touch.clientX - rect.left) / rect.width - 0.5) * 20;
            const y =
                ((touch.clientY - rect.top) / rect.height - 0.5) * 20;
            node.style.transform = `rotateY(${-x}deg) rotateX(${y}deg) scale(1.06)`;
        };
        const reset = () => {
            node.style.transform = "";
        };
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

    // Scroll Down (smooth scroll to next section)
    const handleScrollDown = useCallback((e) => {
        e.preventDefault();
        // Find the next sibling section after #hero
        const heroSection = document.getElementById("hero");
        let next = heroSection?.nextElementSibling;
        // Skip non-section elements
        while (next && next.tagName.toLowerCase() !== "section") {
            next = next.nextElementSibling;
        }
        if (next) {
            next.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    // Download Resume (for browsers that block a-tag download sometimes)
    const handleResumeDownload = (e) => {
        e.preventDefault();
        const link = document.createElement("a");
        link.href = resumeLink;
        link.download = "Devayan_Mandal_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.gradientBg}></div>
            <button
                aria-label="Toggle dark mode"
                className={styles.themeToggle}
                onClick={() => setDarkMode((d) => !d)}
            >
                {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>
            <div className={styles.heroContent}>
                <div className={styles.heroLeft}>
                    <div className={styles.greeting}>
                        <Sparkles size={20} className={styles.greetIcon} />
                        <span>Hello there</span>
                        <PiHandWaving size={30} className={styles.waveIcon} />
                    </div>
                    <h1 className={styles.name}>
                        I'm <span>Devayan Mandal</span>
                    </h1>
                    <h2 className={styles.role}>
                        <span>
                            {roles[roleIdx].slice(0, charIdx)}
                        </span>
                        <span className={styles.cursor}>|</span>
                    </h2>
                    <p className={styles.description}>
                        I craft seamless, engaging, and responsive digital experiences using cutting-edge technologies. Passionate about building products that make a difference.
                    </p>
                    <div className={styles.socials}>
                        {socials.map(({ href, label, icon }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                    <div className={styles.buttons}>
                        <a href="#projects" className={styles.primaryBtn}>
                            <Rocket size={18} className={styles.icon} />
                            View Projects
                        </a>
                        <a href="#contact" className={styles.secondaryBtn}>
                            <MessageCircle size={18} className={styles.icon} />
                            Let’s Talk
                        </a>
                        <a
                            href={resumeLink}
                            className={styles.resumeBtn}
                            aria-label="Download Resume"
                            onClick={handleResumeDownload}
                        >
                            <Download size={18} className={styles.icon} />
                            Resume
                        </a>
                    </div>
                </div>
                <div className={styles.heroRight}>
                    <div
                        className={styles.profileWrapper}
                        ref={profileRef}
                        tabIndex={0}
                        aria-label="Profile picture"
                    >
                        <img
                            src={profile}
                            alt="Devayan Mandal"
                            className={styles.profileImage}
                        />
                        <div className={styles.glow}></div>
                        <div className={styles.floatingIcon1}>
                            <Sparkles size={28} />
                        </div>
                        <div className={styles.floatingIcon2}>
                            <Rocket size={24} />
                        </div>
                        <div className={styles.floatingIcon3}>
                            <MessageCircle size={22} />
                        </div>
                    </div>
                    <svg
                        className={styles.bgTriangle}
                        viewBox="0 0 300 300"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <polygon points="150,20 280,280 20,280" fill="url(#gradient)" />
                        <defs>
                            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#0ff" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#0d6efd" stopOpacity="0.3" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
            <button
                className={styles.scrollDown}
                onClick={handleScrollDown}
                aria-label="Scroll down"
            >
                <ChevronDown size={32} />
                <span>Scroll Down</span>
            </button>
        </section>
    );
}
