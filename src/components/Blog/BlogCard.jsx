/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const BlogCard = ({ blog }) => {
    const { img, id, title, date, author } = blog;
    return (
        <div className="blog-single-card">
            <img src={img} alt="" />
            <div className="d-flex justify-content-evenly mb-1">
                <div>
                    <span><i className="ri-user-line"></i>{author}</span>
                </div>
                <div>
                    <span><i className="ri-calendar-line"></i>{date}</span>
                </div>
            </div>
            <Link to={`/blogdetails/${id}`}><h3>{title}</h3></Link>
            <Link to={`/blogdetails/${id}`}>READ MORE</Link>
        </div>
    );
};

export default BlogCard;