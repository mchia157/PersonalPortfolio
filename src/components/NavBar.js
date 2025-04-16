import {useState, useEffect} from "react"
import {Navbar, Container, Nav} from "react-bootstrap"
import logo from '../images/MyLogo/logo.png'
import navIcon1 from '../images/SocialMedia-Resized/linkedin.png'
import navIcon2 from '../images/SocialMedia-Resized/github.png'


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [expanded, setExpanded] = useState(false);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const onToggleNavBar = () => {
        setExpanded(!expanded);
    }

    

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" style={{width: '100px', height: 'auto'}}></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggle" onClick={onToggleNavBar}>
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/pilarchia" rel="noreferrer" target="_blank"><img src={navIcon1} alt="Linkedin Logo"></img></a>
                            <a href="https://github.com/mchia157" rel="noreferrer" target="_blank"><img src={navIcon2} alt="Github Logo"></img></a>
                        </div>    
                        {/* <button className={`vvd ms-auto ${expanded ? 'reduced-padding' : ''}`} onClick={() => window.location.href = '#connect'}><span>Let's connect</span></button> */}
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}