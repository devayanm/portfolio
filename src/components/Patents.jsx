import styles from './Patents.module.css';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const patent = {
    title: "Proximity Based Safety and Community Empowerment App",
    number: "202431029543 A",
    issued: "Apr 26, 2024",
    link: "https://drive.google.com/file/d/1J63XIdfnoQ-OA1NRiEwyYu52ZZfE7GA2/view", // Replace with your actual patent link if available
    abstract: `The Proximity-Based safety and community empowerment apps signify a revolutionary leap in safety technology. This abstract provides an exhaustive overview, emphasizing the inventive use of proximity and geolocation technologies, a community-driven approach, and the app's capacity to address safety concerns in real-time. It encapsulates the essence of the invention, offering a glimpse into its transformative potential.`,
};

export default function Patents() {
    return (
        <section id="patents" className={styles.patentsSection}>
            <div className={styles.gradientBg}></div>
            <motion.div
                className={styles.patentCard}
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: "anticipate" }}
            >
                <div className={styles.ribbon}>
                    <Icon icon="mdi:certificate" width="1.3em" /> Patent
                </div>
                <div className={styles.iconWrap}>
                    <Icon icon="mdi:shield-home" width="2.6em" height="2.6em" />
                </div>
                <h2 className={styles.title}>{patent.title}</h2>
                <div className={styles.meta}>
                    <span className={styles.number}>
                        <Icon icon="mdi:identifier" /> {patent.number}
                    </span>
                    <span className={styles.issued}>
                        <Icon icon="mdi:calendar-check" /> Issued {patent.issued}
                    </span>
                </div>
                <p className={styles.abstract}>{patent.abstract}</p>
                <a
                    href={patent.link}
                    className={styles.seePatent}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon icon="mdi:open-in-new" /> See patent
                </a>
            </motion.div>
        </section>
    );
}
