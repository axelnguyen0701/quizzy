import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import Landing from "./Landing";
import Questions from "./Questions";
class App extends React.Component {
  state = {
    showQuestions: false,
    highScore: 0,
    questionSet: 0,
    categories: [],
    chosenCategory: 0,
    congratulations: "",
  };

  onCategoryChosen = (userChoice) => {
    this.setState({
      showQuestions: true,
      chosenCategory: userChoice,
      congratulations: "",
    });
  };

  onEndOfQuestions = () => {
    this.setState({ showQuestions: false });
  };

  onHigherScore = (score) => {
    if (score > this.state.highScore)
      this.setState({
        highScore: score,
        congratulations: "You created a new high score!",
      });
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
          highScore={this.state.highScore}
          onHigherScore={(score) => this.onHigherScore(score)}
        />
      </>
    );
  }

  async componentDidMount() {
    const response = await axios.get("https://opentdb.com/api_category.php");
    this.setState({ categories: response.data.trivia_categories });
  }

  renderCongrats() {
    if (this.state.congratulations === "") {
      return "";
    }
    return (
      <h1
        className="bg-info p-4 mb-2 text-white"
        style={{ borderRadius: "50px" }}
      >
        {this.state.congratulations}
      </h1>
    );
  }

  render() {
    return (
      <Container
        className="align-items-center d-flex flex-column landing justify-content-center"
        style={{ height: "100vh" }}
      >
        {this.renderCongrats()}
        {this.renderQuestions()}
      </Container>
    );
  }
}

export default App;
