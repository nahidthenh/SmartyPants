import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../../firebase/firebase.init";
import { useState } from "react";

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
// const notify = () => toast("Wow so easy!");
const Signup = () => {
    const [user, setUser] = useState({})
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
        <div>
            <h3>This is Sign Up</h3>
            <h2>Name:{user.displayName}</h2>
            <img src={user.photoURL} alt="" />
            <button onClick={() => handleGoogleLogin()}>Login with google</button>
            <ToastContainer />
        </div>
    );
};

export default Signup;