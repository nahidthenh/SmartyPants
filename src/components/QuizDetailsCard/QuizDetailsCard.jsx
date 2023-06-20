/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import QuizOption from "../QuizOption/QuizOption";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizDetailsCard = ({ quiz, handleAnswer }) => {
    const rightAns = `${quiz.correctAnswer}`
    const showAnswer = () => {
        return (
            toast.success(`${quiz.correctAnswer}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                theme: "dark",
                draggable: false,
            })
        )

    }

    return (
        <div>
            <div className="d-flex justify-content-between align-items-start">
                <div><h3>{quiz.question}</h3></div>
                <div className="show-ans-btn">
                    <button onClick={() => showAnswer()} data-bs-toggle="popover" title="Click to show answers" data-bs-content="Popup content">
                        <i className="ri-eye-line"></i>
                    </button>
                    <ToastContainer

                    />
                </div>
            </div>
            <div className="option-grid">
                {
                    quiz.options.map((option) => <QuizOption
                        key={option}
                        option={option}
                        rightAns={rightAns}
                        handleAnswer={handleAnswer}
                    ></QuizOption>)
                }
            </div>
        </div>
    );
};

export default QuizDetailsCard;