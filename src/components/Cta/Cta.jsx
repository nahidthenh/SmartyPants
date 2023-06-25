import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Cta = () => {
    return (
        <div className="cta-area-wrap padding-50">
            <Container>
                <Row>
                    <Col md={8} className="mx-auto">
                        <h1>
                            Questionnaire Multistep & Registration
                            Form Wizard.
                        </h1>
                        <Link to='/signup'>Sign Up</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Cta;