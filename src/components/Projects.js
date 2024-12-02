import {Container, Row, Col, Tab, Nav} from 'react-bootstrap'
import {ProjectCard} from "./ProjectCard"
import SproutScript from "../images/ProjectsImages-resized/SproutScript.jpg"
import DoubleSpace from "../images/ProjectsImages-resized/DoubleSpace.jpg"
import Shell from "../images/ProjectsImages-resized/Shell.jpg"
import PersonalWebsite from "../images/ProjectsImages-resized/PersonalWebsite.jpg"
import Checkout from "../images/ProjectsImages-resized/Checkout.jpg"

export const Projects = () => {
    const extracurricularProjects = [
        {
            title: "Sprout Script",
            description: "Young players develop coding skills as they nurture and care for a digital plant.",
            imgUrl: SproutScript,
            link: "https://devpost.com/software/pearl-hacks-24",
        },
        {
            title: "Double Space",
            description: "An award winning, story-driven, action packed, adventure game created for a game jam.",
            imgUrl: DoubleSpace,
            link: "https://chamina.itch.io/double-space",
        },
    ];

    const personalProjects = [
        {
            title: "Check-out Challenge",
            description: "An immersive gaming experience created in my free time to improve my coding and design skills.",
            imgUrl: Checkout,
            link: "https://mchia157.github.io/CheckoutChallenge",
        },
        {
            title: "Personal Website",
            description: "The website you are navigating was made with React and React Bootstrap.",
            imgUrl: PersonalWebsite,
        },
    ]

    const schoolProjects = [
        {
            title: "A Shell in a Linux Environment",
            description: "The shell performs operations like changing directories and executing system programs such as pwd and ls.",
            imgUrl: Shell,
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
                                <Nav.Link eventKey="first">Extracurricular</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Personal</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">School</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row className="justify-content-center">
                                    {
                                        extracurricularProjects.map((project, index) => {
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
                            <Tab.Pane eventKey="second">
                                <Row className="justify-content-center">
                                    {
                                        personalProjects.map((project, index) => {
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
                                        schoolProjects.map((project, index) => {
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