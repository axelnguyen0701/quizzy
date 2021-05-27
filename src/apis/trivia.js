import axios from "axios";

export default axios.create({
  baseURL:
    "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple",
});
