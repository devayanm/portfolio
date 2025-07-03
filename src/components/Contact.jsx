import { useRef, useState } from 'react';
import styles from './Contact.module.css';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import avatar from '../assets/profile.jpg';
import { send } from '@emailjs/browser';

const SOCIALS = [
    { icon: "mdi:linkedin", label: "LinkedIn", link: "https://linkedin.com/in/devayan-mandal" },
    { icon: "mdi:github", label: "GitHub", link: "https://github.com/devayanm" },
    { icon: "mdi:whatsapp", label: "WhatsApp", link: "https://wa.me/91XXXXXXXXXX" },
    { icon: "mdi:telegram", label: "Telegram", link: "https://t.me/devayan" },
    { icon: "mdi:email", label: "Email", link: "mailto:devayan9689@gmail.com" },
];

export default function Contact() {
    const formRef = useRef();
    const [fields, setFields] = useState({ name: '', email: '', message: '' });
    const [touched, setTouched] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    // Validation
    const errors = {
        name: fields.name.trim().length < 2 ? "Please enter your name." : "",
        email: !/\S+@\S+\.\S+/.test(fields.email) ? "Enter a valid email address." : "",
        message: fields.message.trim().length < 6 ? "Message is too short." : "",
    };
    const hasError = Object.values(errors).some(Boolean);

    // Handlers
    const handleChange = e => {
        setFields(f => ({ ...f, [e.target.name]: e.target.value }));
        setTouched(t => ({ ...t, [e.target.name]: true }));
    };
    const handleSubmit = async e => {
        e.preventDefault();
        setTouched({ name: true, email: true, message: true });
        if (hasError) return;
        setLoading(true);
        setSuccess(false);
        try {
            await send(
                'service_e2qmnfs',
                'template_06g5lsg',
                {
                    from_name: fields.name,
                    from_email: fields.email,
                    message: fields.message,
                },
                'NwRG3-X8yiW4wtA9Z'
            );
            setLoading(false);
            setSuccess(true);
            setFields({ name: '', email: '', message: '' });
            setTouched({});
            setTimeout(() => setSuccess(false), 2600);
        } catch {
            setLoading(false);
            setSuccess(false);
        }
    };

    return (
        <section id="contact" className={styles.contactSection}>
            <div className={styles.gradientBg}></div>
            <div className={styles.contactGrid}>
                {/* --- LEFT SIDEBAR --- */}
                <motion.aside
                    className={styles.sidebar}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className={styles.avatarRing}>
                        <img src={avatar} alt="Devayan Mandal" className={styles.avatar} />
                        <span className={styles.status}></span>
                    </div>
                    <h3 className={styles.name}>Devayan Mandal</h3>
                    <p className={styles.tagline}>Full Stack Developer<br />Web3 & System Design</p>
                    <p className={styles.bio}>
                        Building future-ready apps & smart contracts.<br />
                        <span className={styles.location}><Icon icon="mdi:map-marker" /> Kolkata, India</span>
                    </p>
                    <div className={styles.socialRow}>
                        {SOCIALS.map((s, i) => (
                            <a
                                key={i}
                                href={s.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialIcon}
                                aria-label={s.label}
                                title={s.label}
                            >
                                <Icon icon={s.icon} width="1.5em" height="1.5em" />
                            </a>
                        ))}
                    </div>
                </motion.aside>

                {/* --- RIGHT: Single-Step Contact Form --- */}
                <motion.form
                    className={styles.advForm}
                    ref={formRef}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    autoComplete="off"
                    aria-label="Contact form"
                    onSubmit={handleSubmit}
                >
                    <h4 className={styles.formHeading}>Let's work together!</h4>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your full name"
                            value={fields.name}
                            onChange={handleChange}
                            className={errors.name && touched.name ? styles.inputError : ''}
                            autoFocus
                        />
                        {errors.name && touched.name && <div className={styles.errorMsg}>{errors.name}</div>}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="you@example.com"
                            value={fields.email}
                            onChange={handleChange}
                            className={errors.email && touched.email ? styles.inputError : ''}
                        />
                        {errors.email && touched.email && <div className={styles.errorMsg}>{errors.email}</div>}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows={5}
                            placeholder="Write your message..."
                            value={fields.message}
                            onChange={handleChange}
                            className={errors.message && touched.message ? styles.inputError : ''}
                        />
                        {errors.message && touched.message && <div className={styles.errorMsg}>{errors.message}</div>}
                    </div>
                    <button
                        type="submit"
                        className={styles.submitBtn}
                        disabled={loading || hasError}
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                    <AnimatePresence>
                        {success && (
                            <>
                                <Confetti width={window.innerWidth} height={window.innerHeight / 2} numberOfPieces={120} recycle={false} />
                                <motion.div
                                    className={styles.successMsg}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                >
                                    <Icon icon="mdi:check-circle" color="#16a34a" /> Message sent! 🎉
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </motion.form>
            </div>
        </section>
    );
}
