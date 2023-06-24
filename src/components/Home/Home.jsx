import { Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import heroImage from "../../assets/images/hero.jpg"
import Quiz from "../Quiz/Quiz";
import axios from 'axios';
import { useState } from "react";
const Home = () => {

    const [features, setFeatures] = useState([])

    axios.get('api/features.json')
        .then(response => {
            setFeatures(response.data);
        })
        .catch(error => {
            console.error(error)
        })

    const [feedbacks, setFeedbacks] = useState([])

    axios.get('api/feedback.json')
        .then(response => {
            setFeedbacks(response.data);
        })
        .catch(error => {
            console.error(error)
        })
    
    const [blog, setBlogs] = useState([])

    axios.get('api/blog.json')
        .then(response => {
            setBlogs(response.data);
        })
        .catch(error => {
            console.error(error)
        })

    

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
                            <div className="section-title padding-50">
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

            <div className="theme-bg-2 padding-bottom-50">
                <Container>
                    <Row>
                        <Col md={6} className="mx-auto text-center">
                            <div className="section-title padding-50">
                                <h3>Core Features</h3>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {
                            features.map(feature => <Col md={3} key={feature.id}>
                                <div className="feature-single-item">
                                    <img src={feature.img} alt="" />
                                    <h3>{feature.title}</h3>
                                </div>
                            </Col>)
                        }
                    </Row>
                </Container>
            </div>



            <div className="padding-bottom-50">
                <Container>
                    <Row>
                        <Col md={6} className="mx-auto text-center">
                            <div className="section-title padding-50">
                                <h3>
                                    What our users have to say
                                </h3>
                                <p>
                                    Smarty Pants is a sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {
                            feedbacks.map(feedback => <Col md={6} key={feedback.id}>
                                <div className="feedback-single-item">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <img src={feedback.img} alt="" />
                                        </div>
                                        <div className="ms-4">
                                            <h3>{feedback.username}</h3>
                                            <p>{feedback.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>)
                        }
                    </Row>
                </Container>
            </div>

            <div className="theme-bg-2 padding-bottom-50" id="blog">
                <Container>
                    <Row>
                        <Col md={6} className="mx-auto text-center">
                            <div className="section-title padding-50">
                                <h3>Our Blog</h3>
                                <p>
                                    Smarty Pants is a sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {
                            blog.slice(0 , 3).map(blog =>
                                <Col md={4} key={blog.id}>
                                    <div className="blog-single-card">
                                        <img src={blog.img} alt="" />
                                        <div className="d-flex justify-content-evenly mb-1">
                                            <div>
                                                <span><i className="ri-user-line"></i>{blog.author}</span>
                                            </div>
                                            <div>
                                                <span><i className="ri-calendar-line"></i>{blog.date}</span>
                                            </div>
                                        </div>
                                        <Link to={`/blogdetails/${blog.id}`}><h3>{blog.title}</h3></Link>
                                        <Link to={`/blogdetails/${blog.id}`}>READ MORE</Link>
                                    </div>
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