import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from './Header.module.css';
import { useState, useEffect } from 'react';

export default function Header() {
    const [active, setActive] = useState('hero');

    // Update active nav link on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'about', 'skills', 'projects', 'resume', 'contact'];
            let found = 'hero';
            for (let sec of sections) {
                const el = document.getElementById(sec);
                if (el && window.scrollY + 80 >= el.offsetTop) {
                    found = sec;
                }
            }
            setActive(found);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm py-2">
            <Container>
                <Navbar.Brand href="#hero" className={styles.brand}>
                    Devayan Mandal
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="portfolio-navbar" />
                <Navbar.Collapse id="portfolio-navbar">
                    <Nav className="ms-auto">
                        <Nav.Link
                            href="#hero"
                            className={`${styles.navLink} ${active === 'hero' ? styles.active : ''}`}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="#about"
                            className={`${styles.navLink} ${active === 'about' ? styles.active : ''}`}
                        >
                            About
                        </Nav.Link>
                        <Nav.Link
                            href="#skills"
                            className={`${styles.navLink} ${active === 'skills' ? styles.active : ''}`}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link
                            href="#projects"
                            className={`${styles.navLink} ${active === 'projects' ? styles.active : ''}`}
                        >
                            Projects
                        </Nav.Link>
                        <Nav.Link
                            href="#resume"
                            className={`${styles.navLink} ${active === 'resume' ? styles.active : ''}`}
                        >
                            Resume
                        </Nav.Link>
                        <Nav.Link
                            href="#contact"
                            className={`${styles.navLink} ${active === 'contact' ? styles.active : ''}`}
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
