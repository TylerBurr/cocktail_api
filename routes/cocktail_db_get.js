const express = require('express');
const router = express.Router();
const Post = require('../models/CocktailDB');
const mongoose = require('mongoose');
mongoose.pluralize(null);

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({message: err});
    }
});

router.get('/search/:name', async (req, res) => {
    try {
        const posts = await Post.find({$text : { $search : req.params.name}})
        res.json(posts);
    } catch (err) {
        res.json({message: err});
    }
});


module.exports = router;


//{ $text : { $search : searchString }

//{ "strDrink": { $regex: req.params.name, $options: "i" } }