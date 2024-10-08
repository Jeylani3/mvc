const Blog = require('../models/blogs.model'); 


const createHardcodedBlog = (req, res) => {
    Blog.create({
        title: 'new blog',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    })
    .then(result => {
       // res.send(result);
        res.redirect('/blogs');
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({ message: 'Error creating blog' });
    });
};

const createBlogFromForm =  async (req, res) => {
    const { title, snippet, body } = req.body;
    try {
        const blog = await Blog.create({ title, snippet, body });
        res.redirect('/blogs');
    } catch (error) {
        console.log(error);
    }
}

const getAllBlogs = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then(blogs => {
            res.render('blogs', { blogs });
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({ message: 'Error retrieving blogs' });
        });
}

const renderCreateBlogForm = (req, res) => {
    res.render('form');
}

const getBlogById = (req, res) => {
    const blogId = req.params.id;
    Blog.findById(blogId)
        .then(result => {
            if (!result) {
                return res.status(404).send({ message: 'Blog not found' });
            }
            res.render('details', { blog: result, title: "Blog Details" });
        })
        .catch(err => {
            console.error('Error retrieving the blog:', err);

          
            // In case of any error, send a 500 response
            res.status(500).render('500', { title: "Server Error", error: err.message });
        });
}

const deleteBlog =  async (req, res) => {
    const blogId = req.params.id;
    try {
        await Blog.findByIdAndDelete(blogId);
        res.status(200).json({ redirect: '/blogs' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete blog' });
    }
}

module.exports = {
    createHardcodedBlog,
    createBlogFromForm,
    getAllBlogs, 
    renderCreateBlogForm,
    getBlogById,
    deleteBlog
};