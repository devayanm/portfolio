import styles from './SideNav.module.css';
import { useState, useEffect, useRef } from 'react';
import {
    House,
    Person,
    BarChart,
    Briefcase,
    Collection,
    Envelope,
    Award
} from 'react-bootstrap-icons';

const navItems = [
    { id: 'hero', label: 'Home', icon: <House /> },
    { id: 'about', label: 'About', icon: <Person /> },
    { id: 'skills', label: 'Skills', icon: <BarChart /> },
    { id: 'projects', label: 'Projects', icon: <Collection /> },
    { id: 'patents', label: 'Patents', icon: <Award /> },
    { id: 'resume', label: 'Resume', icon: <Briefcase /> },
    { id: 'contact', label: 'Contact', icon: <Envelope /> },
];

export default function SideNav() {
    const [active, setActive] = useState('hero');
    const navRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            let found = 'hero';
            for (const item of navItems) {
                const el = document.getElementById(item.id);
                if (el && window.scrollY + 120 >= el.offsetTop) {
                    found = item.id;
                }
            }
            setActive(found);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            const yOffset = -80;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const handleKeyDown = (e, idx, id) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            e.preventDefault();
            navRefs.current[(idx + 1) % navItems.length]?.focus();
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            e.preventDefault();
            navRefs.current[(idx - 1 + navItems.length) % navItems.length]?.focus();
        } else if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            scrollToSection(id);
        }
    };

    return (
        <nav className={styles.sideNavContainer} aria-label="Sidebar Navigation">
            {navItems.map((item, idx) => (
                <button
                    key={item.id}
                    ref={el => navRefs.current[idx] = el}
                    className={`${styles.navIcon} ${active === item.id ? styles.navIconActive : ''}`}
                    aria-label={item.label}
                    aria-current={active === item.id ? 'page' : undefined}
                    onClick={() => scrollToSection(item.id)}
                    onKeyDown={(e) => handleKeyDown(e, idx, item.id)}
                    type="button"
                >
                    <span className={styles.icon}>{item.icon}</span>
                    {/* Visually hidden label for accessibility on mobile */}
                    <span className={styles.label}>
                        {item.label}
                    </span>
                    <span className={styles.srOnly}>{item.label}</span>
                </button>
            ))}
        </nav>
    );
}
