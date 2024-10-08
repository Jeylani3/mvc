// routes/blogRoutes.js
const express = require('express');

const blogController = require('../controllers/blogController');
const router = express.Router();
// Middleware to parse URL-encoded data
router.use(express.urlencoded({ extended: true }));
// Create blog route
router.get('/post', blogController.createHardcodedBlog);
router.post('/', blogController.createBlogFromForm);
router.get('/', blogController.getAllBlogs);
router.get('/create', blogController.renderCreateBlogForm);
router.get('/:id', blogController.getBlogById);
router.delete('/:id', blogController.deleteBlog);

module.exports = router;
