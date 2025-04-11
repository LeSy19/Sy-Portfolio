import { Col, Row } from "react-bootstrap";
import Tilt from 'react-parallax-tilt';
import AvtIntro from '../../../assets/avatar.svg';
import SyAvt from "./../../../assets/project/sy.png";
import { useTranslation } from "react-i18next";
const Introduction = () => {
    const { t, i18n } = useTranslation();
    return (
        <section
            className='introduction-section my-5 my-md-7'
            style={{
                position: "relative",
                padding: "2rem 1rem",
                // backgroundColor: "#f8f9fa",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)"
            }}
        >
            <Row>
                <Col
                    md={9}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: "0.75rem"
                    }}
                >
                    <h2 style={{
                        fontSize: "2rem",
                        fontWeight: "700",
                        marginBottom: "1rem",
                    }}>
                        {i18n.resolvedLanguage === "en" ? <>
                            <span style={{ color: "#e60d76", fontWeight: "bold" }}> INTRODUCE </span> MYSELF
                        </>
                            :
                            <>
                                <span style={{ color: "#e60d76", fontWeight: "bold" }}>GIỚI THIỆU</span> BẢN THÂN
                            </>
                        }
                    </h2>

                    <span style={{ fontSize: "1.1rem", color: "var(--bs-body-color)" }}>
                        {t("introSection.header1")}
                    </span>
                    <span style={{ fontSize: "1.1rem", color: "var(--bs-body-color)" }}>
                        {t("introSection.header2")} <strong>Spring Boot</strong>, <strong>ReactJS</strong> {t("introSection.and")} <strong>MySQL</strong>,
                    </span>
                    <span style={{ fontSize: "1.1rem", color: "var(--bs-body-color)" }}>
                        {t("introSection.header3")}
                    </span>
                    <span style={{ fontSize: "1.1rem", color: "var(--bs-body-color)" }}>
                        {t("introSection.header4")}
                    </span>

                </Col>

                <Col md={3} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Tilt>
                        <div
                            style={{
                                width: 300,
                                height: 300,
                                borderRadius: '50%',
                                overflow: 'hidden',
                                border: '2px solid #ccc',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            }}
                        >
                            <img
                                src={SyAvt}
                                alt="avatar"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </Tilt>
                </Col>
            </Row>

        </section>
    );
};

export default Introduction;
