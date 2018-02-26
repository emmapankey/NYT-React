import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Row, Container, Col } from "../../components/Grid";
import { Card, CardTitle } from "../../components/Card";
import { Input } from "../../components/Form";
import { Collection, CollectionItem } from "../../components/Collection";
import { SaveBtn, SubmitBtn } from "../../components/Buttons";
import API from "../../utils/API";
import "./Home.css";


class Articles extends Component {
  state = {
    articles: [],
    topic: "",
    beginYear: "",
    endYear: ""
  };

  // componentDidMount() {
  //   this.loadArticles();
  // }

  // Saves an article
  saveArticle = event => {
    console.log("save article: " + event)
    API.saveArticle({
      title: event
    })
      .then(res => this.loadSavedArticles())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getArticles(
      this.state.topic,
      this.state.beginYear,
      this.state.endYear
    ).then(res => {
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      } else {
        console.log(res.data.response);
        this.setState({
          articles: res.data.response.docs
        })
      }
      console.log(this.state.articles)
    }
      )
      .catch(err => this.setState({ error: err.message }));

  };

  render() {
    return (

      <div>
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
                  type="text"
                  name="topic"
                  placeholder="Topic"
                  value={this.state.topic}
                  onChange={this.handleInputChange}
                />
                <Input
                  type="text"
                  name="beginYear"
                  placeholder="Start Year"
                  value={this.state.beginYear}
                  onChange={this.handleInputChange}
                />
                <Input
                  type="text"
                  name="endYear"
                  placeholder="End Year"
                  value={this.state.endYear}
                  onChange={this.handleInputChange}
                />
                <SubmitBtn onClick={this.handleFormSubmit} />
              </form>
            </Col>
            <Col>
              <Card>
                <CardTitle>
                  Search Results
            </CardTitle>
                {this.state.articles.length ? (
                  <Collection>
                    {this.state.articles.map(article => (
                      <CollectionItem key={article.headline.main}>
                       {article.headline.main}
                       <SaveBtn onClick={() =>
                         this.saveArticle(article.headline.main)} />
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
      </div>
    );
  }
}

export default Articles;
