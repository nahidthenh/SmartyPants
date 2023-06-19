import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero.jpg"
const Home = () => {
    return (
        <div className="hero-area-wrap">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <div className="hero-area-content">
                            <h1>Choose and Play thousands of expert Quiez now.</h1>
                            <p>
                                Smarty Pants is dolor amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                            <div className="hero-btn-group">
                                <Link to=''>Play Now</Link>
                                <Link to=''>Sign Up</Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="hero-area-image">
                            <img className="img-fluid" src={heroImage} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;