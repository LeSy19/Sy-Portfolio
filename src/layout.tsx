import AppFooter from "./components/layout/app.footer";
import AppHeader from "./components/layout/app.header";
import { Col, Container, Row } from "react-bootstrap";
import HeroLeft from "./components/sections/hero/hero.left";
import HeroRight from "./components/sections/hero/hero.right";
import ResizeButton from "./components/sections/resize.button";
import { MdFileDownload } from "react-icons/md";
import Introduction from "./components/sections/introduction";
import Divider from "./components/sections/divider";
import Experience from "./components/sections/experience";
import ProjectPage from "./components/sections/projects";
import Skills from "./components/sections/skills";
import { useRef } from "react";
import scrollToElement from "scroll-to-element";
import bg from './assets/top-bg.svg';

const Layout = () => {
  const skillRef = useRef<HTMLElement>(null);
  const expRef = useRef<HTMLElement>(null);
  const projectRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const homeRef = useRef<HTMLElement>(null);

  const scrollToSKill = () => {
    if (skillRef.current) {
      scrollToElement(skillRef.current, {
        offset: -70, // trừ đi chiều cao của navbar
        ease: 'out-cube',
        duration: 800 // => chậm hơn
      });
    }
  };

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      scrollToElement(ref.current, {
        offset: -70, // trừ đi chiều cao của navbar
        ease: 'out-cube',
        duration: 800,
      });
    }
  };

  return (
    <>
      <AppHeader
        scrollToSection={scrollToSection}
        expRef={expRef}
        projectRef={projectRef}
        aboutRef={aboutRef}
        homeRef={homeRef}
      />
      {/* Truyền ref qua Outlet context */}
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
          }}
        >
        </div>
        <section className="mt-md-7 mt-2" ref={homeRef}>
          <Container
            style={{ position: "relative" }}
          >
            <Row>
              <Col className='d-none d-md-block' md={6}>
                <HeroLeft
                  scrollToSKill={scrollToSKill}
                />
              </Col>
              <Col md={6}>
                <HeroRight />
              </Col>
              <Col xs={12} className="d-md-none d-flex mt-4 justify-content-center">
                <ResizeButton
                  btnText="My Skill"
                  btnIcons={<MdFileDownload />}
                />
              </Col>
            </Row>
          </Container>
        </section>

        <section className="mt-md-7 mt-2">
          <Container>
            <Introduction />
          </Container>

        </section>
        <Divider />
        <section className="mt-md-7 mt-2" ref={expRef}>
          <Container>
            <Experience />
          </Container>
        </section>
        <Divider />
        <section className="mt-md-7 mt-2" ref={projectRef}>
          <Container>
            <ProjectPage />
          </Container>
        </section>
        <Divider />
        <section ref={skillRef}>
          <Container >
            <Skills />
          </Container>
        </section>
      </div>
      <section ref={aboutRef}>
        <AppFooter />
      </section>

    </>
  )
}

export default Layout
