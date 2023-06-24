import { useLoaderData } from "react-router-dom";


const BlogDetails = () => {
    let blogs = useLoaderData()
    // let blog = blogs[`${blogs.id}`];
    console.log(blogs);
    return (
        <div>
            <h1>length : {blogs.length}</h1>
            <h3>Title {blogs.title}</h3>
        </div>
    );
};

export default BlogDetails;