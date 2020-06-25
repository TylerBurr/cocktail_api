const express = require('express');
const router = express.Router();
const Post = require('../models/CocktailDB');


router.post('/', (req, res) => {
    const post = new Post({
        strDrink: req.body.strDrink,
        strDrinkAlternate: req.body.strDrinkAlternate,
    });
    post.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err)
    })
})



module.exports = router;