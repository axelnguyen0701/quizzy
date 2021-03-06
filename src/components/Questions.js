import React from "react";
import { Button, Spinner, ProgressBar, Row, Col } from "react-bootstrap";
import trivia from "../apis/trivia";
import "./Questions.css";
import Timer from "./Timer";

class Questions extends React.Component {
  state = {
    answers: [],
    questions: [],
    correctAnswer: [],
    currentQuestion: 0,
    showAnswers: false,
    score: 0,
    timerKey: 0,
    userChoice: 5,
  };

  static getDerivedStateFromProps(props, state) {
    if (
      state.currentQuestion >= state.questions.length &&
      state.questions.length !== 0
    ) {
      if (state.score > props.highScore) {
        props.onHigherScore(state.score);
      }
      props.onEndOfQuestions();
      return { score: 0 };
    }
    return null;
  }

  fetchQuestions = async () => {
    try {
      const res = await trivia.get("", {
        params: {
          category: this.props.category,
        },
      });
      const loadedQuestions = [...res.data.results];
      const formattedQuestion = [];
      const formattedAnswers = [];

      loadedQuestions.forEach((loadedQuestion, index) => {
        let correctAnswerIndex = Math.floor(Math.random() * 4);

        formattedQuestion[index] = loadedQuestion.question;
        formattedAnswers[index] = loadedQuestion.incorrect_answers;
        formattedAnswers[index].splice(
          correctAnswerIndex,
          0,
          loadedQuestion.correct_answer
        );
        this.setState({
          correctAnswer: [
            ...this.state.correctAnswer,
            formattedAnswers[index].indexOf(loadedQuestion.correct_answer),
          ],
        });
      });

      this.setState({
        questions: formattedQuestion,
        answers: formattedAnswers,
      });
    } catch (err) {
      console.log(err);
    }
  };

  async componentDidMount() {
    this.fetchQuestions();
  }

  onAnswer = (e) => {
    this.setState({ showAnswers: true, userChoice: Number(e.target.value) });
    if (
      Number(e.target.value) ===
      this.state.correctAnswer[this.state.currentQuestion]
    ) {
      this.setState({ score: this.state.score + 10 });
    }
  };

  onTimeOut = () => {
    this.setState({
      showAnswers: false,
      currentQuestion: this.state.currentQuestion + 1,
    });
  };

  onNext = () => {
    this.setState({
      showAnswers: false,
      currentQuestion: this.state.currentQuestion + 1,
      timerKey: this.state.timerKey + 1,
    });
  };

  renderAnswers = (index) => {
    return this.state.answers[index].map((answer, answerIndex) => {
      let className = "w-50 mt-2 py-3 text-dark";
      if (this.state.showAnswers) {
        if (this.state.correctAnswer[index] === answerIndex) {
          className += " correct-answer";
        }
        if (this.state.userChoice === answerIndex) {
          className += " user-choice";
        }

        className += " show-answers";
      }

      return (
        <Button
          key={answer}
          value={answerIndex}
          variant="info"
          className={className}
          dangerouslySetInnerHTML={{ __html: answer }}
          onClick={this.onAnswer}
        ></Button>
      );
    });
  };

  renderQuestions = () => {
    //API not responded yet
    if (this.state.questions.length === 0) {
      return (
        <div>
          <Spinner color="primary"> </Spinner>
        </div>
      );
    } else {
      if (this.state.currentQuestion < this.state.questions.length) {
        const now =
          (this.state.currentQuestion * 100) / this.state.questions.length;
        return (
          <>
            <div className="w-100 mt-3">
              <ProgressBar now={now} animated variant="warning" />
            </div>
            <h1>Score: {this.state.score}</h1>
            <h1
              className="text-muted text-center"
              dangerouslySetInnerHTML={{
                __html: this.state.questions[this.state.currentQuestion],
              }}
            ></h1>
            {this.renderAnswers(this.state.currentQuestion)}

            <Row className="w-50 mt-3 text-center align-items-center">
              <Col lg="6">
                <Timer onTimeOut={this.onTimeOut} key={this.state.timerKey} />
              </Col>
              <Col lg="6">
                <Button className="px-5" onClick={this.onNext}>
                  Next
                </Button>
              </Col>
            </Row>
          </>
        );
      }
    }
  };

  render() {
    return (
      <>
        <h1>High Score: {this.props.highScore}</h1>
        {this.renderQuestions()}
      </>
    );
  }
}

export default Questions;
