import styles from './Contact.module.css';
import { FaEnvelope, FaMapMarkerAlt, FaUser } from 'react-icons/fa';

export default function Contact() {
    return (
        <section id="contact" className={styles.contactSection}>
            <div className="container">
                <h2 className={`text-center fw-bold ${styles.heading}`}>Get in Touch</h2>

                <div className={styles.contactGrid}>
                    <div className={styles.contactInfo}>
                        <div className={styles.infoCard}>
                            <FaEnvelope className={styles.icon} />
                            <div>
                                <h5>Email</h5>
                                <p>devayanmandal@gmail.com</p>
                            </div>
                        </div>
                        <div className={styles.infoCard}>
                            <FaMapMarkerAlt className={styles.icon} />
                            <div>
                                <h5>Location</h5>
                                <p>Kolkata, India</p>
                            </div>
                        </div>
                    </div>

                    <form className={styles.form}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Your Name</label>
                            <div className={styles.inputIcon}>
                                <FaUser />
                                <input type="text" id="name" placeholder="Enter your name" required />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email">Your Email</label>
                            <div className={styles.inputIcon}>
                                <FaEnvelope />
                                <input type="email" id="email" placeholder="you@example.com" required />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="Write your message..." required></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn}>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
