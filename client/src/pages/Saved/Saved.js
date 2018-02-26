import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Row, Container, Col } from "../../components/Grid";
import { Card, CardTitle } from "../../components/Card";
import { Collection, CollectionItem } from "../../components/Collection";
import { DeleteBtn } from "../../components/Buttons";
import API from "../../utils/API";
import "./Saved.css";


class Saved extends Component {
  state = {
    savedArticles: [],
    title: "",
    date: ""
  };

  // Loads the saved articles
  loadSavedArticles() {
    API.getSavedArticles()
      .then(res =>
        this.setState({ savedArticles: res.data, title: "", date: "" })
      )
      .catch(err => console.log(err));
  };

  // Deletes an article from the database with a given id, then reloads articles from the db
  delArticle(id) {
    console.log("del article");
    API.deleteArticle(id)
      .then(res => this.loadStories())
      .catch(err => console.log(err));
  };

  render() {
    return (

      <Container>
        <Row>
          <Col>
            <Card>
              <CardTitle>
                New York Times Article Scrubber
                </CardTitle>
              <p className="subTitle">Seach for and annotate articles of interest!</p>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <CardTitle>
                Saved
            </CardTitle>
              {this.state.articles.length ? (
                <Collection>
                  {this.state.articles.map(article => (
                    <CollectionItem key={article._id}>
                      {article.title}
                      <p>Saved on {article.date}</p>
                      <DeleteBtn onClick={() =>
                        this.deleteArticle(article._id)} />
                    </CollectionItem>
                  ))}
                </Collection>
              ) : (
                  <h2 className="noResults red-text text-lighten-1">No Results to Display</h2>
                )}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;


