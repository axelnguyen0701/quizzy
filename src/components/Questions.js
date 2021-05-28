import React from "react";
import { Button, Spinner, ProgressBar } from "react-bootstrap";
import trivia from "../apis/trivia";
import "./Questions.css";
class Questions extends React.Component {
  state = {
    answers: [],
    questions: [],
    correctAnswer: [],
    currentQuestion: 0,
    showAnswers: false,
  };

  static getDerivedStateFromProps(props, state) {
    if (
      state.currentQuestion >= state.questions.length &&
      state.questions.length !== 0
    ) {
      props.onHigherScore();
      props.onEndOfQuestions();
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
    this.setState({ showAnswers: true });
    if (
      Number(e.target.value) ===
      this.state.correctAnswer[this.state.currentQuestion]
    ) {
      this.props.onCorrect();
    }
  };

  onNext = () => {
    this.setState({
      showAnswers: false,
      currentQuestion: this.state.currentQuestion + 1,
    });
  };

  renderAnswers = (index) => {
    return this.state.answers[index].map((answer, answerIndex) => {
      const className = `w-50 mt-2 py-3 text-white
      ${this.state.showAnswers ? "show-answers" : ""}
      ${
        this.state.correctAnswer[index] === answerIndex ? "correct-answer" : ""
      }`;
      return (
        <Button
          key={answer}
          value={answerIndex}
          color="info"
          className={className}
          dangerouslySetInnerHTML={{ __html: answer }}
          onClick={this.onAnswer}
        ></Button>
      );
    });
  };

  renderQuestions = () => {
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
            <h1>Score: {this.props.score}</h1>
            <h1
              className="text-muted text-center"
              dangerouslySetInnerHTML={{
                __html: this.state.questions[this.state.currentQuestion],
              }}
            ></h1>
            {this.renderAnswers(this.state.currentQuestion)}
            <Button className="mt-5 px-5" onClick={this.onNext}>
              Next
            </Button>
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
