import axios from 'axios';
import { useState } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import BlogCard from './BlogCard';

const Blog = () => {
    const [blogs, setBlogs] = useState([])

    axios.get('api/blog.json')
        .then(response => {
            setBlogs(response.data);
        })
        .catch(error => {
            console.error(error)
        })

    return (
        <div>
            <Container>
                <Row>
                    {
                        blogs.map(blog =>
                            <Col md={4} key={blog.id}>
                                <BlogCard
                                    blog={blog}
                                />
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Blog;