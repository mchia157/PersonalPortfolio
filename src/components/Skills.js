import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Container, Row, Col} from "react-bootstrap"
import java from "../images/Skill-icons-resized/PNG/java.png"
import cPlus from "../images/Skill-icons-resized/PNG/c++.png"
import c from "../images/Skill-icons-resized/PNG/C.png"
import cSharp from "../images/Skill-icons-resized/PNG/c-sharp.png"
import css from "../images/Skill-icons-resized/PNG/css.png"
import htmlLogo from "../images/Skill-icons-resized/PNG/html.png"
import illustrator from "../images/Skill-icons-resized/PNG/illustrator.png"
import ios from "../images/Skill-icons-resized/PNG/ios.png"
import javascriptLogo from "../images/Skill-icons-resized/PNG/javascript.png"
import linux from "../images/Skill-icons-resized/PNG/linux.png"
import photoshop from "../images/Skill-icons-resized/PNG/photoshop.png"
import python from "../images/Skill-icons-resized/PNG/pyhton.png"
import reactLogo from "../images/Skill-icons-resized/PNG/react.png"
import sketchup from "../images/Skill-icons-resized/PNG/sketchup.png"
import windows from "../images/Skill-icons-resized/PNG/windows.png"

export const Skills = () => {

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <h4>Programming Languages</h4>
                            <Row>
                                <Col md={4} className="item">
                                    <img src={java} alt="Java Logo"></img>
                                    <h5>Java</h5>
                                </Col>
                                <Col md={4} className="item">
                                    <img src={python} alt="Python Logo"></img>
                                    <h5>Python</h5>
                                </Col>
                                <Col md={4} className="item">
                                    <img src={c} alt="C Logo"></img>
                                    <h5>C</h5>
                                </Col>
                                <Col md={4} className="item">
                                    <img src={cSharp} alt="C# Logo"></img>
                                    <h5>C#</h5>
                                </Col>
                                <Col md={4} className="item">
                                    <img src={cPlus} alt="C++ Logo"></img>
                                    <h5>C++</h5>
                                </Col>
                                <Col md={4} className="item">
                                    <img src={javascriptLogo} alt="JavaScript Logo"></img>
                                    <h5>JavaScript</h5>
                                </Col>
                            </Row>

                            <h4>Operating Systems</h4>
                            <Row>
                                <Col md={6} className="item">
                                    <img src={windows} alt="Windows Logo"></img>
                                    <h5>Windows</h5>
                                </Col>
                                <Col md={6} className="item">
                                    <img src={linux} alt="Linux Logo"></img>
                                    <h5>Linux</h5>
                                </Col>
                                {/* <Col md={4} className="item">
                                    <img src={ios} alt="iOS Logo"></img>
                                    <h5>iOS</h5>
                                </Col> */}
                            </Row>
                    
                            <h4>Web Development</h4>
                            <Row>
                                <Col md={4} className="item">
                                    <img src={htmlLogo} alt="HTML Logo"></img>
                                    <h5>HTML</h5>
                                </Col>
                                <Col md={4} className="item">
                                    <img src={css} alt="CSS Logo"></img>
                                    <h5>CSS</h5>
                                </Col>
                                <Col md={4} className="item">
                                    <img src={reactLogo} alt="React Logo"></img>
                                    <h5>React</h5>
                                </Col>
                            </Row>

                            <h4>Design tools</h4>
                            <Row>
                                <Col md={4} className="item">
                                    <img src={photoshop} alt="Photoshop Logo"></img>
                                    <h5>Photoshop</h5>
                                </Col>
                                <Col md={4} className="item">
                                    <img src={illustrator} alt="Illustrator Logo"></img>
                                    <h5>Illustrator</h5>
                                </Col>
                                <Col md={4} className="item">
                                    <img src={sketchup} alt="Sketchup Logo"></img>
                                    <h5>SketchUp</h5>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}