import {Container, Row, Col} from "react-bootstrap"
import logo from "../images/MyLogo/logo-placeholder.png"
import linkedin from "../images/SocialMedia-logos/317750_linkedin_icon.png"
import github from "../images/SocialMedia-logos/Github.png"

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col sm={12} md={6} className="text-center text-sm-start">
                        <p>Pilar Chia</p>
                    </Col>
                    <Col sm={12} md={6} className="text-center text-sm-end">
                        <p>CopyRight 2024. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}