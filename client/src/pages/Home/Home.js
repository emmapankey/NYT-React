import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Container, Col } from "../../components/Grid";
import { Card, CardTitle } from "../../components/Card";
import { Input } from "../../components/Form";
import { Collection, CollectionItem } from "../../components/Collection";
import { SaveBtn } from "../../components/Buttons";
import API from "../../utils/API";
import "./Home.css";


class Articles extends Component {
  state = {
    articles: [],
    title: "",
    words: ""
  };

  componentDidMount() {
    this.loadArticles();
  }

  // Loads articles
  loadArticles() {
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data })
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

  //   handleInputChange = event => {
  //     const { name, value } = event.target;
  //     this.setState({
  //       [name]: value
  //     });
  //   };

  //   handleFormSubmit = event => {
  //     event.preventDefault();
  //     if (this.state.title && this.state.author) {
  //       API.saveBook({
  //         title: this.state.title,
  //         author: this.state.author,
  //         synopsis: this.state.synopsis
  //       })
  //         .then(res => this.loadBooks())
  //         .catch(err => console.log(err));
  //     }
  //   };

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
                Search
            </CardTitle>
            </Card>
            <form>
              <Input
                id="searchTopic"
                type="text"
                name="searchTopic"
                placeholder="Topic"
              />
              <Input
                id="searchStartDate"
                type="text"
                name="searchStartDate"
                placeholder="Start Date"
              />
              <Input
                id="searchEndDate"
                type="text"
                name="searchEndDate"
                placeholder="End Date"
              />
            </form>
          </Col>
          <Col>
            <Card>
              <CardTitle>
                Results
            </CardTitle>
              {this.state.articles.length ? (
                <Collection>
                  {this.state.articles.map(article => (
                    <CollectionItem key={article._id}>
                      <Link to={article.url}>
                        {article.title}
                      </Link>
                    </CollectionItem>
                  ))}
                  <SaveBtn>
                    </SaveBtn>
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

export default Articles;
