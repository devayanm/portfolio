import { useRef, useState } from 'react';
import styles from './Contact.module.css';
import { FaEnvelope, FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import { send } from '@emailjs/browser';
import { motion } from 'framer-motion';

export default function Contact() {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null); // true or false

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(null);

        send(
            'service_e2qmnfs',
            'template_06g5lsg',
            {
                from_name: formRef.current.name.value,
                from_email: formRef.current.email.value,
                message: formRef.current.message.value,
            },
            'NwRG3-X8yiW4wtA9Z'
        )
            .then(() => {
                setLoading(false);
                setSuccess(true);
                formRef.current.reset();
            })
            .catch(() => {
                setLoading(false);
                setSuccess(false);
            });
    };

    return (
        <section id="contact" className={styles.contactSection}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={`text-center fw-bold ${styles.heading}`}
                >
                    Get in Touch
                </motion.h2>

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

                    <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Your Name</label>
                            <div className={styles.inputIcon}>
                                <FaUser />
                                <input type="text" id="name" name="name" placeholder="Enter your name" required />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email">Your Email</label>
                            <div className={styles.inputIcon}>
                                <FaEnvelope />
                                <input type="email" id="email" name="email" placeholder="you@example.com" required />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" placeholder="Write your message..." required></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn} disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>

                        {success === true && <p className={styles.success}>Message sent successfully!</p>}
                        {success === false && <p className={styles.error}>Oops! Something went wrong.</p>}
                    </form>
                </div>
            </div>
        </section>
    );
}
