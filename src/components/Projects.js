import {Container, Row, Col, Tab, Nav} from 'react-bootstrap'
import {ProjectCard} from "./ProjectCard"
import SproutScript from "../images/ProjectsImages-resized/SproutScript.jpg"
import Checkout from "../images/ProjectsImages-resized/Checkout.jpg"

export const Projects = () => {
    const apiProjects = [
        {
            title: "API Design and Development (Python, FASTAPI, Pytest)",
            description: "Engineered an API for text storage and URL shortening.",
            imgUrl: SproutScript,
            link: "https://ex01-comp590-140-25sp-pchiaq.apps.unc.edu/docs",
        },
        {
            title: "Frontend Design (Angular and TypeScript)",
            description: "Built a front-end for API interaction.",
            imgUrl: SproutScript,
            link: "https://ex01-comp590-140-25sp-pchiaq.apps.unc.edu/docs",
        },
    ];

    const gameProjects = [
        {
            title: "Sprout Script (Python, Pygame)",
            description: "Young players develop coding skills as they nurture and care for a digital plant.",
            imgUrl: SproutScript,
            link: "https://devpost.com/software/pearl-hacks-24",
        },
        {
            title: "Check-out Challenge (Unity, C#)",
            description: "An immersive gaming experience created in my free time to improve my coding and design skills.",
            imgUrl: Checkout,
            link: "https://mchia157.github.io/CheckoutChallenge",
        },
    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">API & Frontend</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Java MVC Game</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Other Games</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row className="justify-content-center">
                                    {
                                        apiProjects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Row className="justify-content-center">
                                    {
                                        gameProjects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>

                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}