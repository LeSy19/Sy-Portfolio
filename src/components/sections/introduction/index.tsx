import { Col, Row } from "react-bootstrap";
import Tilt from 'react-parallax-tilt';
import AvtIntro from '../../../assets/avatar.svg';

const Introduction = () => {
    return (
        <section
            className='introduction-section my-5 my-md-7'
            style={{
                position: "relative",
                padding: "2rem 1rem",
                backgroundColor: "#f8f9fa", // nhẹ nhàng
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
                        <span style={{ color: "#e60d76", fontWeight: "bold" }}>GIỚI THIỆU</span> BẢN THÂN
                    </h2>

                    <span style={{ fontSize: "1.1rem", color: "#333" }}>
                        Tôi là một lập trình viên backend với niềm đam mê tạo ra những hệ thống ổn định, dễ mở rộng.
                    </span>
                    <span style={{ fontSize: "1.1rem", color: "#333" }}>
                        Với kinh nghiệm làm việc cùng <strong>Spring Boot</strong> và <strong>MySQL</strong>,
                    </span>
                    <span style={{ fontSize: "1.1rem", color: "#333" }}>
                        tôi luôn chú trọng hiệu suất và tính bảo mật trong từng dòng code.
                    </span>
                </Col>

                <Col md={3} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Tilt>
                        <img
                            src={AvtIntro}
                            alt="avatar"

                        />
                    </Tilt>
                </Col>
            </Row>
        </section>
    );
};

export default Introduction;
