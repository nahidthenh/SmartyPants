import { useLoaderData, useParams } from "react-router-dom";


const BlogDetails = () => {
    let blogs = useLoaderData()
    // console.log(blogs);
    const blogId = useParams().id
    let currentBlog = blogs.filter(blog => blog.id == blogId)
    let blog = currentBlog[0];

    return (
        <div>
            <h3>Title {blog.title}</h3>
        </div>
    );
};

export default BlogDetails;