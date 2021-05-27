import React from "react";
import { Button } from "reactstrap";
import trivia from "../apis/trivia";

class Questions extends React.Component {
  state = { answers: [], questions: [] };

  async componentDidMount() {
    try {
      const res = await trivia.get();
      const loadedQuestions = [...res.data.results];
      const formattedQuestion = [];
      const formattedAnswers = [];

      loadedQuestions.forEach((loadedQuestion, index) => {
        let correctAnswerIndex = Math.floor(Math.random() * 3) + 1;
        formattedQuestion[index] = loadedQuestion.question;
        formattedAnswers[index] = loadedQuestion.incorrect_answers;
        formattedAnswers[index].splice(
          correctAnswerIndex - 1,
          0,
          loadedQuestion.correct_answer
        );
      });

      console.log(formattedAnswers);
      this.setState({
        questions: formattedQuestion,
        answers: formattedAnswers,
      });
    } catch (err) {
      console.log(err);
    }
  }

  renderQuestions = () => {
    if (this.state.questions.length === 0) {
      return <div>Loading...</div>;
    }
    return <h1>{this.state.questions[0]}</h1>;
  };

  render() {
    return this.renderQuestions();
  }
}

export default Questions;
