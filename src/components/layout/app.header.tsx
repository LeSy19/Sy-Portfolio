import { Dropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ViImg from '../../assets/language/vi.svg';
import EngImg from '../../assets/language/en.svg';

function AppHeader() {
    return (
        <Navbar
            expand="lg"
            className="bg-body-tertiary"
            style={{ zIndex: 1 }}
        >
            <Container>
                <Navbar.Brand href="#home"
                    style={{ color: "green" }}
                >Sy - Portfolio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Project</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link href='theme'>Theme</Nav.Link>

                        <NavDropdown
                            title="Ngôn ngữ"
                        >
                            <div className='dropdown-item d-flex gap-2 align-items-center' style={{ cursor: "pointer" }}>
                                <img src={EngImg} style={{ height: 20, width: 20 }} />
                                <span>English</span>
                            </div>
                            <div className='dropdown-item d-flex gap-2 align-items-center' style={{ cursor: "pointer" }}>
                                <img src={ViImg} style={{ height: 20, width: 20 }} />
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