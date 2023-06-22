/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const BlogCard = ({ blog }) => {
    const { img, id, shortDescription, title } = blog;
    return (
        <div>
            <img src={img} alt="" />
            <Link to={`${id}`}><h3>{title}</h3></Link>
            <p>{shortDescription}</p>
        </div>
    );
};

export default BlogCard;