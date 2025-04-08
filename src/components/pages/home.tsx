
import { Col, Container, Row } from 'react-bootstrap';
import bg from '../../assets/section.svg';
import HeroLeft from '../sections/hero/hero.left';
import HeroRight from '../sections/hero/hero.right';
import ResizeButton from '../sections/resize.button';

const HomePage = () => {
    return (
        <div className="homepage-screen">
            <div
                style={{
                    backgroundImage: `url(${bg})`,
                    width: "100%",
                    height: 500,
                    position: "absolute",
                    top: 0,
                    backgroundRepeat: "no-repeat",
                    zIndex: 0
                }}>
            </div>
            <section>
                <Container
                    style={{ position: "relative" }}
                >
                    <Row>
                        <Col className='d-none d-md-block' md={6}>
                            <HeroLeft />
                        </Col>
                        <Col md={6}>
                            <HeroRight />
                        </Col>
                        <Col xs={12} className="d-md-none d-flex mt-4 justify-content-center">
                            <ResizeButton
                                btnText="My Skill"
                            // btnIcons={<MdFileDownload />}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}
export default HomePage;