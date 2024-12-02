import {Col} from "react-bootstrap"

export const ProjectCard = ({title, description, imgUrl, link}) => {
    return (
        <Col sm={6} md={4}>
            <a href={link} target="_blank" rel="noreferrer" className="proj-imgbx d-flex justify-content-center align-items-center">
                <img src={imgUrl} alt="Project"></img>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </a>
        </Col>
    )
}