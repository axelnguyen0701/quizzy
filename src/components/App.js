import React from "react";
import { Container } from "reactstrap";
import Landing from "./Landing";
import Questions from "./Questions";
class App extends React.Component {
  state = { showQuestions: false, highScore: 0, score: 0, questionSet: 0 };

  onPlay = () => {
    this.setState({ showQuestions: true });
  };

  onPlayAgain = () => {
    this.setState({ questionSet: this.state.questionSet + 1 });
  };

  onHigherScore = () => {
    if (this.state.score > this.state.highScore)
      this.setState({ highScore: this.state.score, score: 0 });
  };

  renderQuestions() {
    if (!this.state.showQuestions) return <Landing onClick={this.onPlay} />;
    return (
      <>
        <Questions
          key={this.state.questionSet}
          onPlayAgain={this.onPlayAgain}
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
