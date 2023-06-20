/* eslint-disable react/prop-types */
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const QuizOption = ({ option, rightAns, handleAnswer }) => {
    if (option === rightAns) {
        var showToast = () =>
            toast.success("Correct Answer", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                theme: "colored",
            });
    }
    else {
        showToast = () =>
            toast.error("Wrong Answer !", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                theme: "colored",
            });
    }

    return (
        <div>
            <div className="option" onClick={showToast}>
                <p onClick={handleAnswer}>{option}</p>
            </div>
        </div>
    );
};

export default QuizOption;