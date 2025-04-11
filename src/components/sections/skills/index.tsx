import { SKILLS_DATA } from "../../helpers/data";
import { Col, Row } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { ImageSkills } from "../../helpers/skill.img";
import './skill.scss';
import { useTranslation } from "react-i18next";

const Skills = () => {
    const { t } = useTranslation();
    return (
        <Row className="skills-container">
            <Col xs={12} className="my-3 my-md-5">
                <div className="text-center">
                    <h3>{t("skillSection.title")}</h3>
                </div>
            </Col>

            <Col md={12} className="skills-marquee">
                <Marquee
                    gradient={false} // tắt hiệu ứng mờ 2 bên
                    speed={50}
                    pauseOnHover={true} //dừng cuộn khi rê chuột vào
                    pauseOnClick={true} //dừng chuột khi click vào
                    delay={0} //không delay
                    play={true}
                    direction="left"
                >
                    {SKILLS_DATA.map((skill, id) => (
                        <div className="skill-item" key={id}>
                            <div className="skill-card">
                                <img
                                    src={ImageSkills(skill)}
                                    alt={skill}
                                    width={40}
                                    height={40}
                                />
                                <p className="skill-name">{skill}</p>
                            </div>

                        </div>
                    ))}
                </Marquee>
            </Col>
        </Row>
    )
}
export default Skills;