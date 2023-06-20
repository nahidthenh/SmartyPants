/* eslint-disable react/prop-types */
const QuizOption = ({ option }) => {
    // console.log(option);
    return (
        <div>
            <div className="option">
                {option}
            </div>
        </div>
    );
};

export default QuizOption;