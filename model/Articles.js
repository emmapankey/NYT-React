// Require Mongoose
const mongoose = require("mongoose");

// Create article schema
const articleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    }
    // url: {
    //     type: String,
    //     unique: true,
    //     validate: {
    //         validator: function (text) {
    //             return text.indexOf("http://query.nytimes.com/") === 0;
    //         },
    //         message: "Article handle must start with http://query.nytimes.com/"
    //     }
    // }
});

// Create Article model with the articleSchema
var Articles = mongoose.model("Articles", articleSchema);

// Export the Scraped model
module.exports = Articles;