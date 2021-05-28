import axios from "axios";
import React from "react";
import { Container } from "reactstrap";
import Landing from "./Landing";
import Questions from "./Questions";
class App extends React.Component {
  state = {
    showQuestions: false,
    highScore: 0,
    score: 0,
    questionSet: 0,
    categories: [],
    chosenCategory: 0,
  };

  onCategoryChosen = (userChoice) => {
    this.setState({ showQuestions: true, chosenCategory: userChoice });
  };

  onEndOfQuestions = () => {
    this.setState({ showQuestions: false });
  };

  onHigherScore = () => {
    if (this.state.score > this.state.highScore)
      this.setState({ highScore: this.state.score, score: 0 });
  };

  renderQuestions() {
    if (!this.state.showQuestions)
      return (
        <Landing
          onCategoryChosen={this.onCategoryChosen}
          categories={this.state.categories}
          highScore={this.state.highScore}
        />
      );
    return (
      <>
        <Questions
          category={this.state.chosenCategory}
          key={this.state.questionSet}
          onEndOfQuestions={this.onEndOfQuestions}
          score={this.state.score}
          highScore={this.state.highScore}
          onHigherScore={this.onHigherScore}
          onCorrect={() => {
            this.setState({ score: this.state.score + 10 });
          }}
        />
      </>
    );
  }

  async componentDidMount() {
    const response = await axios.get("https://opentdb.com/api_category.php");
    this.setState({ categories: response.data.trivia_categories });
  }

  render() {
    return (
      <Container
        className="align-items-center d-flex flex-column landing justify-content-center"
        style={{ height: "100vh" }}
      >
        {this.renderQuestions()}
      </Container>
    );
  }
}

export default App;
