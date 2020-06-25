const mongoose = require('mongoose');
mongoose.pluralize(null);

const PostSchema = mongoose.Schema({
    strDrink: {
        type: String,
        required: true
    },
    strDrinkAlternate: {
        type: String,
        required: false
    },
    strTags: {
        type: String,
        required: false
    },
    strVideo: {
        type: String,
        required: false
    },
    strCategory: {
        type: String,
        required: false
    },
    strAlcoholic: {
        type: String,
        required: false
    },
    strGlass: {
        type: String,
        required: false
    },
    strInstructions: {
        type: String,
        required: false
    },
    strDrinkThumb: {
        type: String,
        required: false
    },
    strIngredient1: {
        type: String,
        required: false
    },
    strIngredient2: {
        type: String,
        required: false
    },
    strIngredient3: {
        type: String,
        required: false
    },
    strIngredient4: {
        type: String,
        required: false
    },
    strIngredient5: {
        type: String,
        required: false
    },
    strIngredient6: {
        type: String,
        required: false
    },
    strIngredient7: {
        type: String,
        required: false
    },
    strIngredient8: {
        type: String,
        required: false
    },
    strIngredient9: {
        type: String,
        required: false
    },
    strIngredient10: {
        type: String,
        required: false
    },
    strIngredient11: {
        type: String,
        required: false
    },
    strIngredient12: {
        type: String,
        required: false
    },
    strIngredient13: {
        type: String,
        required: false
    },
    strIngredient14: {
        type: String,
        required: false
    },
    strIngredient15: {
        type: String,
        required: false
    },
    strMeasure1: {
        type: String,
        required: false
    },
    strMeasure2: {
        type: String,
        required: false
    },
    strMeasure3: {
        type: String,
        required: false
    },
    strMeasure4: {
        type: String,
        required: false
    },
    strMeasure5: {
        type: String,
        required: false
    },
    strMeasure6: {
        type: String,
        required: false
    },
    strMeasure7: {
        type: String,
        required: false
    },
    strMeasure8: {
        type: String,
        required: false
    },
    strMeasure9: {
        type: String,
        required: false
    },
    strMeasure10: {
        type: String,
        required: false
    },
    strMeasure11: {
        type: String,
        required: false
    },
    strMeasure12: {
        type: String,
        required: false
    },
    strMeasure13: {
        type: String,
        required: false
    },
    strMeasure14: {
        type: String,
        required: false
    },
    strMeasure15: {
        type: String,
        required: false
    },
})

module.exports = mongoose.model('cocktail_db', PostSchema)