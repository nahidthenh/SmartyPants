import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import QuizDetailsCard from "../QuizDetailsCard/QuizDetailsCard";


const QuizDetails = () => {
    const quizDetails = useLoaderData()
    // console.log(typeof quizDetails);
    // console.log(quizDetails);
    


    return (

        <Container>
            <Row>
                <Col md={8} className="mx-auto">
                    <div className="quiz-details-wrap text-center mb-5">
                        <h1>Question From <b>{quizDetails.data.name}</b></h1>
                        <p>Total Question is <b>{quizDetails.data.total}</b></p>
                    </div>
                </Col>
            </Row>
           
            <Row>
                {
                    quizDetails.data['questions'].map((quiz) =>
                        <Col key={quiz.id} md={10} className="mx-auto my-3 quiz-single-item-wrap">
                            <QuizDetailsCard
                                quiz={quiz}
                            />
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
};

export default QuizDetails;