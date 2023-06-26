import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithPopup } from "firebase/auth";
import app from "../../../firebase/firebase.init";
import { useState } from "react";
import { Col, Container, Form, Row } from 'react-bootstrap';
import googleImage from '../../../assets/images/google.png'
import { Link } from 'react-router-dom';

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const Signup = () => {
    const [passwordError, setPasswordError] = useState('');
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

    const handleCreateAccount = (event) => {
        event.preventDefault()
        setSuccess(false)
        let regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,8}$/;
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value; 

        if (!regularExpression.test(password)) {
            setPasswordError("password should contain atleast one number and one special character and min 6 and max 8 Car");
            return;
        }
        setPasswordError('')


        createUserWithEmailAndPassword(auth, email, password, name)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);

                setSuccess(true)
                form.reset()
                handleEmailVerify()
            })
            .catch((error) => {
                console.error(error)
            });


    }

    const handleEmailVerify = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                setSuccess(
                    toast.warning("Please Verify Your Email account !", {
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
                                <h3>Sign up Now</h3>
                                <p>Sign Up now to access the latest insights for your</p>
                                <p>social media performance. </p>
                                <button onClick={() => handleGoogleLogin()}> <img src={googleImage} alt="" /> Sign Up with google</button>
                                <span>Or</span>
                            </div>
                            <Form onSubmit={handleCreateAccount}>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control name="name" type="text" placeholder="Enter name" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name="password" type="password" placeholder="Password" required />
                                </Form.Group>
                                <p className="text-danger">{passwordError}</p>
                                <button className='btn-signup' type="submit">Sign Up</button>
                            </Form>
                            <p className="form-footer-text text-center">Have an account?  <Link to='/signin'>Sign In</Link></p>
                            <ToastContainer />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Signup;