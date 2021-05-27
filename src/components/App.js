import React from "react";
import { Container } from "reactstrap";
import Landing from "./Landing";
import Questions from "./Questions";
class App extends React.Component {
  state = { showQuestions: false, highScore: 0, score: 0, questionSet: 0 };

  onPlay = () => {
    this.setState({ showQuestions: true });
  };

  renderQuestions() {
    if (!this.state.showQuestions) return <Landing onClick={this.onPlay} />;
    return (
      <>
        <Questions
          key={this.state.questionSet}
          onPlayAgain={() =>
            this.setState({ questionSet: this.state.questionSet + 1 })
          }
          score={this.state.score}
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
