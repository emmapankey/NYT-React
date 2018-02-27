import axios from "axios";

export default {
  // Request to the NY Times API
  getArticles: function (topic, beginYear, endYear) {
      return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=c9f3a0b2baea431dbd7d9369b5182fbe&q=" + topic + "&begin_date=" + beginYear + "0101&end_date=" + endYear + "1231");
  },
  // Gets the article with the given id
  getArticle: function (id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deleteArticle: function (id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves an article to the database
  saveArticle: function (articleData) {
    return axios.post("/api/articles", articleData);
  },
  getSavedArticles: function() {
    return axios.get("api/articles");
  }
};