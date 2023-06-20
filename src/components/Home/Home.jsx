import { Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import heroImage from "../../assets/images/hero.jpg"
import Quiz from "../Quiz/Quiz";
const Home = () => {
    const quizcatagory = useLoaderData()
    return (
        <>
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
                                    <a href='#quiztime'>Play Nows</a>
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

            <div className="quiz-data-wrap" id="quiztime">
                <Container>
                    <Row>
                        <Col md={6} className="mx-auto text-center">
                            <div className="section-title">
                                <h3>Quiz Categories</h3>
                                <p>
                                    Smarty Pants is a sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {
                            quizcatagory.data.map(quizItem =>
                                <Col key={quizItem.id} xl={3} lg={4} >
                                    <Quiz
                                        item={quizItem}
                                    />
                                </Col>
                            )
                        }
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Home;