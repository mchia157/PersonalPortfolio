import {useState, useEffect} from "react"
import {Navbar, Container, Nav} from "react-bootstrap"
import logo from '../images/MyLogo/logo-placeholder.png'
import navIcon1 from '../images/SocialMedia-logos/317750_linkedin_icon.png'
import navIcon2 from '../images/SocialMedia-logos/Github.png'


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scr > 50){
                setScrolled(true);
            } else {
                setScrolled(false);
            }

        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" style={{width: '50px', height: 'auto'}}></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#aboutMe" className={activeLink === 'aboutMe' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutMe')}>About Me</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/pilarchia" target="_blank"><img src={navIcon1} alt="Linkedin Logo"></img></a>
                            <a href="https://github.com/mchia157" target="_blank"><img src={navIcon2} alt="Github Logo"></img></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}><span>Let's connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}