import { Link } from "react-router-dom";
import arrowRight from "../../assets/images/arrow-right.svg"
/* eslint-disable react/prop-types */
const Quiz = ({ item }) => {
    // console.log(item)
    return (
        <div className="quiz-single-item">
            <img className="quiz-logo" src={item.logo} alt="" />
            <div className="d-flex justify-content-between">
                <h3>{item.name}</h3>
                <p>{item.total}</p>
            </div>
            <Link to=''>Lets Play <img width={28} src={arrowRight} alt="" /></Link>
        </div>
    );
};

export default Quiz;