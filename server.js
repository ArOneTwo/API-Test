const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;

const app = express();

//Setup Static Folder
//app.use(express.static(path.join(__dirname, 'public')));

let posts = [
    {id: 1, title:'The post'},
    {id: 2, title:'The Pre-post'},
    {id: 3, title:'The Mid-post'},
];

//Get ALL Posts
app.get('/api/posts', (req, res) => {
    const limit = parseInt(req.query.limit); // Query Strings
    if (!isNaN(limit) && limit > 0){
        res.json(posts.slice(0, limit));
    } else {
        res.json(posts);
    }
})

//Get SINGLE Posts
app.get('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.json(posts.filter((post) => post.id === id));
})

app.listen(port, () => console.log(`server is running on port ${port}`));