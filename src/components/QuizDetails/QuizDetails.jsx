import { useLoaderData } from "react-router-dom";

const QuizDetails = () => {
    const quizDetails = useLoaderData()
    console.log(quizDetails);
    return (
        <div>
            <h3>Welcoem to Quiz Details page {quizDetails.data.name} </h3>
        </div>
    );
};

export default QuizDetails;