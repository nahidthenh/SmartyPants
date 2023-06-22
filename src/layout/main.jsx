import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"
import { Container, Row, Col } from "react-bootstrap";
const main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <div className="cta-area-wrap padding-50">
                <Container>
                    <Row>
                        <Col md={8} className="mx-auto">
                            <h1>
                                Questionnaire Multistep & Registration
                                Form Wizard.
                            </h1>
                            <Link>Sign Up</Link>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default main;