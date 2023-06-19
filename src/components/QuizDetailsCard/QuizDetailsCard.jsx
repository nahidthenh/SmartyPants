/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const QuizDetailsCard = ({ quiz }) => {
    console.log(quiz);
    return (
        <div>
            <h3>name{quiz.question}</h3>




            {
                quiz.options.map(option => <div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="" />
                        <label className="form-check-label" >
                            {option}
                        </label>
                    </div>
                </div>)
            }


            {/* <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label" for="flexRadioDefault1">
                        Default radio
                    </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                    <label className="form-check-label" for="flexRadioDefault2">
                        Default checked radio
                    </label>
            </div> */}

        </div>
    );
};

export default QuizDetailsCard;