import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../../firebase/firebase.init";
import { useState } from "react";
import { Col, Container, Form, Row } from 'react-bootstrap';
import googleImage from '../../../assets/images/google.png'
import { Link } from 'react-router-dom';

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
// const notify = () => toast("Wow so easy!");

const Signin = () => {
    const [user, setUser] = useState({})
    console.log(user);
    const [success, setSuccess] = useState(false)
    console.log(success);
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
                setSuccess(
                    toast.success("You are successfully logged in", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    })
                )

            }).catch((error) => {
                console.error('Error', error)
                setSuccess(
                    toast.error("Sorry something went wrong !", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    })
                )
            });
    }
    return (
        <>
            <Container>
                <Row>
                    <Col md={6} className='mx-auto'>
                        <div className="auth-form">
                            <div className="auth-title text-center">
                                <h3>Sign In Now</h3>
                                <p>Sign In now to access the latest insights for your</p>
                                <p>social media performance. </p>
                                <button onClick={() => handleGoogleLogin()}> <img src={googleImage} alt="" /> Sign In with google</button>
                                <span>Or</span>
                            </div>
                            <Form>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <button className='btn-signup' type="submit">Sign In</button>
                            </Form>
                            <p className="form-footer-text text-center">Dont have an account? <Link to='/signup'>Create an Account </Link></p>
                            <ToastContainer />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Signin;