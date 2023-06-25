import aboutShape from '../../assets/images/about/about-shape3.png'
import aboutBig from '../../assets/images/about/about-big3.jpg'
import aboutSm from '../../assets/images/about/about-sm4.jpg'
import counter14 from '../../assets/images/about/counter-14.png'
import counter7 from '../../assets/images/about/counter-7.png'

const About = () => {
    return (
        <div className="section upstudy-about-section-06 padding-50">
            <div className="container">
                <div className="about-wrap">
                    <div className="row">
                        <div className="col-lg-6">

                            <div className="about-img-wrap">
                                <img className="shape-1" src={aboutShape} alt="" />
                                <div className="about-img about-img-big">
                                    <img src={aboutBig} alt="" />
                                </div>
                                <div className="about-img about-img-sm">
                                    <img src={aboutSm} alt="" />
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6">

                            <div className="about-content">
                                <h2 className="about-title">Including large benifit When <span>You Enroll</span> from our courses</h2>
                                <p className="text">If youve been researching exactly what skill you want to learn, or if you just need one more skill to round out your resume Whether fully virtual, fully in-person or something in between, explore.</p>
                                <div className="about-list">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="list-item">
                                                <div className="icon">
                                                    <img src={counter14} alt="" />
                                                </div>
                                                <h3 className="title">Multiple Course Participation</h3>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="list-item">
                                                <div className="icon">
                                                    <img src={counter7} alt="" />
                                                </div>
                                                <h3 className="title">Vert Fast &amp; So Easy To Create</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text">If youve been researching exactly what skill you want to learn, or if you just need one more skill to round out your resume Whether fully virtua.</p>
                                <a className="read-more" href="#">Start Learning Now <i className="fas fa-long-arrow-alt-right"></i></a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;