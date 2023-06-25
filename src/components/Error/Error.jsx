import { Link } from "react-router-dom";
import error from "../../assets/images/404.png"

const Error = () => {
    return (
        <div className="error-section">
            <div className="container">
                <div className="error-wrapper">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="error-item text-center">
                                <div className="error-thumb">
                                    <img className="img-fluid" src={error} alt="" />
                                </div>
                                <div className="error-content">
                                    <h3 className="title">Sorry We Can`t Find That Page!</h3>
                                    <p>The page you are looking for was moved, removed, renamed or never existed.</p>
                                    <Link className="btn" to='/'>Go Back Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;