import { Button, Card } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";


interface IProps {
    imgPath: string;
    title: string;
    technology: string;
    description: string;
    githubLink: string;
}
const ProjectCard = (props: IProps) => {
    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{ maxHeight: 215 }} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>
                    {props.title}
                </Card.Title>
                <div className="d-flex flex-column justify-content-between h-100">
                    <Card.Text style={{ textAlign: "justify" }}>
                        {props.technology}
                    </Card.Text>
                    <Card.Text style={{ textAlign: "justify" }}>
                        {props.description}
                    </Card.Text>
                    <div>
                        <Button variant="primary" href={props.githubLink} target="_blank">
                            <BsGithub /> &nbsp;
                            GitHub
                        </Button>



                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}
export default ProjectCard;