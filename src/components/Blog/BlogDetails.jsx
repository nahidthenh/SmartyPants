import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";


const BlogDetails = () => {
    let blogs = useLoaderData()
    // console.log(blogs);
    const blogId = useParams().id
    let currentBlog = blogs.filter(blog => blog.id == blogId)
    let blog = currentBlog[0];

    return (
        <div className="padding-50">
            <Container>
                <Row>
                    <Col md={9} className="mx-auto">
                        <div className="blog-details-card">
                            <img className="img-fluid" src={blog.img2} alt="" />
                            <div className="d-flex justify-content-start mb-1">
                                <div className="me-3">
                                    <span><i className="ri-user-line me-2"></i>{blog.author}</span>
                                </div>
                                <div>
                                    <span><i className="ri-calendar-line me-2"></i>{blog.date}</span>
                                </div>
                            </div>
                            <h3>{blog.title}</h3>
                            <p>{blog.shortDescription}</p>
                            <p>{blog.description}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BlogDetails;