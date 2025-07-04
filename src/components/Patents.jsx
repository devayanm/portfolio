import styles from './Patents.module.css';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const patent = {
    title: "Proximity Based Safety and Community Empowerment App",
    number: "202431029543 A",
    issued: "Apr 26, 2024",
    link: "https://drive.google.com/file/d/1J63XIdfnoQ-OA1NRiEwyYu52ZZfE7GA2/view",
    abstract: `The Proximity-Based safety and community empowerment apps signify a revolutionary leap in safety technology. This abstract provides an exhaustive overview, emphasizing the inventive use of proximity and geolocation technologies, a community-driven approach, and the app's capacity to address safety concerns in real-time. It encapsulates the essence of the invention, offering a glimpse into its transformative potential.`,
};

export default function Patents() {
    return (
        <section id="patents" className={styles.patentsSection}>
            <h2 className={styles.sectionHeading}>Patents</h2>
            <div className={styles.gradientBg}></div>
            <motion.article
                className={styles.patentCard}
                initial={{ opacity: 0, y: 32, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "anticipate" }}
                tabIndex={0}
                aria-label={`Patent: ${patent.title}`}
            >
                <div className={styles.patentGlowBar}></div>
                <div className={styles.patentContent}>
                    <span className={styles.patentIcon}>
                        <Icon icon="mdi:shield-home" width="2em" height="2em" />
                    </span>
                    <div className={styles.patentTitle}>{patent.title}</div>
                    <div className={styles.meta}>
                        <span>
                            <Icon icon="mdi:identifier" width="1em" /> {patent.number}
                        </span>
                        <span>
                            <Icon icon="mdi:calendar-check" width="1em" /> {patent.issued}
                        </span>
                    </div>
                    <div className={styles.abstract}>{patent.abstract}</div>
                    <a
                        href={patent.link}
                        className={styles.seePatent}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon icon="mdi:open-in-new" width="1em" /> See patent
                    </a>
                </div>
            </motion.article>
        </section>
    );
}
