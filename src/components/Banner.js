import { useState, useEffect } from "react"
import { Container, Row, Col} from "react-bootstrap"
import { ArrowDownCircle } from "react-bootstrap-icons"
import headerImg from '../images/WelcomePage/me.jpeg'
import resume from "../documents/Resume.pdf"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Computer Science", "Communication and Media Studies"]
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()

        }, delta)

        return () => { clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        
        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>My name is Pilar Chia. I am a <br></br>
                        <div className="txt-rotate">
                            <span className="wrap">{text}</span>
                        </div>
                        student.</h1>
                        <p>
                        I am a student at the University of North Carolina at Chapel Hill, currently seeking internship opportunities in software development and related fields. My goal is to apply my skills and further develop my expertise by designing and implementing impactful digital solutions.</p>
                        <a href={resume} download>
                            <button className="vvd">
                                <span>Download My Resume<ArrowDownCircle/></span>
                            </button>
                        </a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img className="my-picture" src={headerImg} alt="Header Img"></img>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}