/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const QuizDetailsCard = ({ quiz }) => {
    console.log(quiz);
    return (
        <div>
            <h3>{quiz.question}</h3>
            <div className="option-grid">
                {
                    quiz.options.map(option => <div>
                        <div className="form-check">
                            <label className="form-check-label" key={option.index}>
                                <input type="radio" name={`option.index`} className="form-check-input" value={option} />
                                {option}
                            </label>
                        </div>
                    </div>)
                }
            </div>
        </div>

    );
};

export default QuizDetailsCard;