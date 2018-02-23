const express = require("express");
const router = express.Router();
const db = require("../model/article.js")

// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");

// Send request to the NY Times API 
var articleQuery = function(topic, beginYear, endYear){
    
      var authKey = "c9f3a0b2baea431dbd7d9369b5182fbe";
    
      var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" +
                      topic + "&begin_date=" + beginYear + "&end_date=" + endYear;

}


import axios from "axios";

export default {
  // Gets all articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves an article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};