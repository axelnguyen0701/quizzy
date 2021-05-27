import React from "react";
import { Container } from "reactstrap";
import Landing from "./Landing";
import Questions from "./Questions";
class App extends React.Component {
  state = { showQuestions: false };

  onPlay = () => {
    this.setState({ showQuestions: true });
  };

  renderQuestions() {
    if (!this.state.showQuestions) return <Landing onClick={this.onPlay} />;
    return <Questions />;
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
