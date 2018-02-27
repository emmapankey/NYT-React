import React, { Component } from "react";
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

  loadArticles = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  // Saves an article
  saveArticle = event => {
    console.log("save article: " + event)
    API.saveArticle({
      title: event
    })
      .then(res => this.loadSavedArticles())
      .catch(err => console.log(err));
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
                  name="topic"
                  placeholder="Topic"
                  value={this.state.topic}
                  onChange={this.handleInputChange}
                />
                <Input
                  name="beginYear"
                  placeholder="Start Year"
                  value={this.state.beginYear}
                  onChange={this.handleInputChange}
                />
                <Input
                  name="endYear"
                  placeholder="End Year"
                  value={this.state.endYear}
                  onChange={this.handleInputChange}
                />
                <SubmitBtn onClick={this.handleFormSubmit}>
                </SubmitBtn>
              </form>
            </Col>
            <Col>
              <Card>
                <CardTitle>
                  Search Results
            </CardTitle>

                <Collection>
                  {this.state.articles.map(article => (
                    <CollectionItem key={article.headline.main}>
                      <div className="urlDiv">
                        <a className="articleURL" target="_blank" href={article.web_url}>{article.headline.main}</a>
                      </div>
                      <SaveBtn onClick={() => this.saveArticle(article.headline.main)} />

                    </CollectionItem>
                  ))}
                </Collection>

              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Articles;
