/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const QuizDetailsCard = ({ quiz }) => {
    console.log(quiz);
    return (
        <div>
            <h3>{quiz.question}</h3>
            {
                quiz.options.map(option => <div>
                    <div className="form-check">
                        {/* <input className="form-check-input" type="radio" name="flexRadioDefault" id="" /> */}
                        {/* <label >
                            {option}
                        </label> */}
                        <label className="form-check-label" key={option.id}>
                            <input type="radio" name={`option`} className="form-check-input" value={option} />
                            {option}
                        </label>
                    </div>
                </div>)
            }
        </div>


        // <div>
        //     {quiz && (
        //         <form>
        //             {quiz.question.map((option, index) => (
        //                 <div key={index}>
        //                     <h3>{quiz.question}</h3>
        //                     {option.options.map((option, optionIndex) => (
        //                         <label key={optionIndex}>
        //                             <input type="radio" name={`option-${index}`} value={option} />
        //                             {option}
        //                         </label>
        //                     ))}
        //                 </div>
        //             ))}
        //         </form>
        //     )}
        // </div>

    );
};

export default QuizDetailsCard;