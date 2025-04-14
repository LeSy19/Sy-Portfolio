import { Col, Container, Row } from "react-bootstrap";
import Lottie from "lottie-react";
import emailLottie from '../../assets/lottie/email.json';
import SocialMedia from "../sections/social.media";
import { APP_DATA } from "../helpers/data";
import { useTranslation } from "react-i18next";

const AppFooter = () => {
    const { t } = useTranslation();
    return (
        <Container>
            <div
                style={{
                    // backgroundColor: "#f8f9fa",
                    padding: "0 90px  ",
                    marginTop: "3rem",
                    borderTop: "1px solid #dee2e6",
                    fontSize: "16px",
                    color: "var(--bs-body-color)",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                }}
            >
                <Row className="align-items-center ">
                    <Col md={6}>
                        <div style={{ marginBottom: "1rem" }}>
                            <h2 style={{ marginBottom: "8px" }}>{t("footer.title")}</h2>
                            <p style={{ marginBottom: "8px" }}>
                                <strong>Email:</strong> sydev191@gmail.com
                            </p>
                            <p style={{ marginBottom: "8px" }}>
                                <strong>{t("footer.phone")}:</strong> 0905008230
                            </p>
                            <p style={{ marginBottom: "8px" }}>
                                <strong>{t("footer.address")}:</strong> {t("footer.hcmCity")}
                            </p>
                        </div>
                        <SocialMedia
                            github={APP_DATA.GITHUB_URL}
                            mail={APP_DATA.EMAIL_URL}
                            facebook={APP_DATA.FACEBOOK_URL}
                        />
                    </Col>

                    <Col
                        md={6}
                        className="d-flex justify-content-center justify-content-md-end"
                    >
                        <div style={{ width: "180px", maxWidth: "100%" }}>
                            <Lottie
                                animationData={emailLottie}
                                loop={true}
                                style={{ width: "130%", height: "auto" }}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default AppFooter;
