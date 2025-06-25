import styles from './SideNav.module.css';
import { useState, useEffect } from 'react';
import { House, Person, BarChart, Briefcase, Collection, Envelope } from 'react-bootstrap-icons';

const navItems = [
    { id: 'hero', label: 'Home', icon: <House /> },
    { id: 'about', label: 'About', icon: <Person /> },
    { id: 'skills', label: 'Skills', icon: <BarChart /> },
    { id: 'projects', label: 'Projects', icon: <Collection /> },
    { id: 'resume', label: 'Resume', icon: <Briefcase /> },
    { id: 'contact', label: 'Contact', icon: <Envelope /> },
];

export default function SideNav() {
    const [active, setActive] = useState('hero');

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

    return (
        <nav className={styles.sideNavContainer} aria-label="Section navigation">
            {navItems.map(item => (
                <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`${styles.navIcon} ${active === item.id ? styles.navIconActive : ''}`}
                    aria-label={item.label}
                    title={item.label}
                >
                    {item.icon}
                </a>
            ))}
        </nav>
    );
}
