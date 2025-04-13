import { PROJECTS } from "../../helpers/data";
import { Col, Row } from "react-bootstrap";
import ProjectCard from "./project.card";
import { useTranslation } from "react-i18next";

const ProjectPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <Row>
                <Col xs={12}>
                    <h3 className="text-center brand-red">{t("projectSection.title")}</h3>
                    <h6 className="text-center mb-md-5 mb-2">{t("projectSection.title2")}</h6>
                </Col>
            </Row>
            <Row
                style={{ justifyContent: "center", paddingBottom: "10px" }}
            >
                {PROJECTS?.map(item => {
                    return (
                        <Col md={4} className="project-card" key={item.id}>
                            <ProjectCard
                                imgPath={item.imgPath}
                                title={item.title}
                                technology={t(`projectSection.projects.${item.id}.technology`)}
                                description={t(`projectSection.projects.${item.id}.description`)}
                                githubLink={item.githubLink}
                            />
                        </Col>
                    )
                })}

            </Row>
        </>
    )
}
export default ProjectPage;