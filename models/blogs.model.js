const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BlogPost = new Schema(
    {
   
        title: { 
            type: String,
            required: true
        },
        snippet: { 
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        }
    
    }, 
    {
    timestamps: true,
    // change the collection name to 'blog_posts'
    }
)
const Blog = mongoose.model('Blog', BlogPost);

module.exports = Blog;