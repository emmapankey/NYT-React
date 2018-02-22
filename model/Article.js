// Require Mongoose
var mongoose = require("mongoose");

// Require db connection
var db = require("../config/connection");

// Createe article schema
var articleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        required: true,
    },
    url: {
        type: String,
        unique: true,
        validate: {
            validator: function (text) {
                return text.indexOf("http://query.nytimes.com/") === 0;
            },
            message: "Article handle must start with http://query.nytimes.com/"
        }
    }
});

// Create Article model with the articleSchema
var Article = mongoose.model("Article", articleSchema);

// Export the Scraped model
module.exports = Article;