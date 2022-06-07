// Stateless FunctionAL Component
const BlogList = ({ blogs, title }) => {
  //const blogs = props.blogs;
  //const title = props.title;

  //console.log(props);

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map(blog => (
        // The key attribute is used by React to track each element inside an array and distinguish between them
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
