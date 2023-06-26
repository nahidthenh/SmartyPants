import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../../firebase/firebase.init";
import { useState } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import googleImage from '../../../assets/images/google.png'

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
// const notify = () => toast("Wow so easy!");
const Signup = () => {
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
                                <h3>Sign up Now</h3>
                                <p>Sign Up now to access the latest insights for your</p>
                                <p>social media performance. </p>
                                <button onClick={() => handleGoogleLogin()}> <img src={googleImage} alt="" /> Signin with google</button>
                                <span>Or</span>
                                <ToastContainer />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Signup;