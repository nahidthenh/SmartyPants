import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="hero-area-wrap">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="hero-area-content">
                            <h1>Choose and Play thousands of expert Quiez now.</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                            <div className="hero-btn-group">
                                <Link to=''>Play Now</Link>
                                <Link to=''>Sign Up</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;