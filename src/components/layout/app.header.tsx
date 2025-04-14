import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ViImg from '../../assets/language/vi.svg';
import EngImg from '../../assets/language/en.svg';
import { useTranslation } from 'react-i18next';
import { useCurrentApp } from '../context/app.context';
import { MdNightlight, MdOutlineLightMode } from 'react-icons/md';

interface IProps {
    scrollToSection: (ref: React.RefObject<HTMLElement | null>) => void;
    expRef: React.RefObject<HTMLElement | null>;
    projectRef: React.RefObject<HTMLElement | null>;
    aboutRef: React.RefObject<HTMLElement | null>;
    homeRef: React.RefObject<HTMLElement | null>;

}

type ThemeContextType = "light" | "dark";

function AppHeader(props: IProps) {
    const { scrollToSection, expRef, projectRef, aboutRef, homeRef } = props;
    const { theme, setTheme } = useCurrentApp();
    const { t, i18n } = useTranslation();

    const handleMode = (mode: ThemeContextType) => {
        localStorage.setItem("theme", mode);
        document.documentElement.setAttribute('data-bs-theme', mode); //gán giá trị thuộc tính cho data-bs-theme
        setTheme(mode);
    }

    const renderFlag = (language: string) => {
        return (
            <img
                style={{ height: 20, width: 20 }}
                src={language === "en" ? EngImg : ViImg} alt={language}
            />
        )
    }

    return (
        <Navbar
            data-bs-theme={theme}
            expand="lg"
            className="bg-body-tertiary sticky-top"
            style={{ zIndex: 1000 }}
        >
            <Container>
                <Navbar.Brand
                    href="#home"
                    style={{
                        fontWeight: "bold",
                        background: "linear-gradient(90deg, #00ff99, #0066ff)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}
                    onClick={() => scrollToSection(homeRef)}
                >
                    PORTFOLIO
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home"
                            onClick={() => scrollToSection(homeRef)}
                        >
                            {t("appHeader.home")}
                        </Nav.Link>
                        <Nav.Link href="#experience"
                            onClick={() => scrollToSection(expRef)}
                        > {t("appHeader.experience")}</Nav.Link>
                        <Nav.Link href="#project"
                            onClick={() => scrollToSection(projectRef)}
                        > {t("appHeader.project")}</Nav.Link>
                        <Nav.Link href="#contact"
                            onClick={() => scrollToSection(aboutRef)}
                        > {t("appHeader.contact")}</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto gap-2">
                        <div className='nav-link' style={{ cursor: "pointer" }}>
                            {theme === "light" ?
                                <MdOutlineLightMode
                                    onClick={() => handleMode("dark")}
                                    style={{ fontSize: 20 }}
                                />
                                :
                                <MdNightlight
                                    onClick={() => handleMode("light")}
                                    style={{ fontSize: 20 }}
                                />
                            }
                        </div>

                        <NavDropdown
                            title={renderFlag(i18n.resolvedLanguage!)}
                        >
                            <div
                                onClick={() => i18n.changeLanguage("en")}
                                className='dropdown-item d-flex gap-2 align-items-center' style={{ cursor: "pointer" }}>
                                <img
                                    style={{ height: 20, width: 20 }}
                                    src={EngImg} alt='english'
                                />
                                <span>English</span>

                            </div>
                            <div
                                onClick={() => i18n.changeLanguage("vi")}
                                className='dropdown-item d-flex gap-2 align-items-center' style={{ cursor: "pointer" }}>
                                <img
                                    style={{ height: 20, width: 20 }}
                                    src={ViImg} alt='vietnamese'
                                />
                                <span>Tiếng Việt</span>
                            </div>
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppHeader;