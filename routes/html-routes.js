/* eslint-disable prettier/prettier */
/* eslint-disable no-empty */
var axios = require("axios");

module.exports = function(app) {
  app.get("/login", (req, res) => {
    // ToDo : serve up  login page
  });

  app.get("/", (req, res) => {
    res.render("index", {});
  });

  app.get("/trivia", async (req, res) => {
    // ToDo : render trivia home page
    //var data = getQuestionData();

    //const getQuestions = async () => {
    const url = "https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple";
    const { data } = await axios.get(url);
    // eslint-disable-next-line prettier/prettier
    const newData =  () => {
      let result = []
      for (let i = 0; i < data.results.length; i++) {
          let newIndex = {
              ...data.results[i],
              answers: [data.results[i].correct_answer, ...data.results[i].incorrect_answers]
          }
          result.push(newIndex)
      }
      return result
  }
  newData().then(response  => res.render("trivia", {result: response}))

    //res.render("trivia", { questions: data.results });
  });
};
 function getQuestionData() {
  return {
    columns: [
      {
        category: "Sports",
        questions: [
          {
            question: "Question 1",
            pointValue: 100,
            answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
            correctAnsIndx: 2
          },
          {
            question: "Question 2",
            pointValue: 200,
            answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
            correctAnsIndx: 2
          },
          {
            question: "Question 3",
            pointValue: 400,
            answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
            correctAnsIndx: 2
          },
          {
            question: "Question 4",
            pointValue: 800,
            answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
            correctAnsIndx: 2
          },
          {
            question: "Question 5",
            pointValue: 1200,
            answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
            correctAnsIndx: 2
          }
        ]
      },
      {
        category: "Cars",
        questions: [
          {
            question: "Question 1",
            pointValue: 100,
            answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
            correctAnsIndx: 2
          },
          {
            question: "Question 2",
            pointValue: 200,
            answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
            correctAnsIndx: 2
          },
          {
            question: "Question 3",
            pointValue: 400,
            answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
            correctAnsIndx: 2
          },
          {
            question: "Question 4",
            pointValue: 800,
            answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
            correctAnsIndx: 2
          },
          {
            question: "Question 5",
            pointValue: 1200,
            answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
            correctAnsIndx: 2
          }
        ]
      },
      {
        category: "History",
        questions: [
          {
            question: "Question 1",
            pointValue: 100,
            answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
            correctAnsIndx: 2
          },
          {
            question: "Question 2",
            pointValue: 200,
            answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
            correctAnsIndx: 2
          },
          {
            question: "Question 3",
            pointValue: 400,
            answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
            correctAnsIndx: 2
          },
          {
            question: "Question 4",
            pointValue: 800,
            answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
            correctAnsIndx: 2
          },
          {
            question: "Question 5",
            pointValue: 1200,
            answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
            correctAnsIndx: 2
          }
        ]
      },
      {
        category: "Geography",
        questions: [
          {
            question: "Question 1",
            pointValue: 100,
            answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
            correctAnsIndx: 2
          },
          {
            question: "Question 2",
            pointValue: 200,
            answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
            correctAnsIndx: 2
          },
          {
            question: "Question 3",
            pointValue: 400,
            answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
            correctAnsIndx: 2
          },
          {
            question: "Question 4",
            pointValue: 800,
            answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
            correctAnsIndx: 2
          },
          {
            question: "Question 5",
            pointValue: 1200,
            answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
            correctAnsIndx: 2
          }
        ]
      },
      {
        category: "Random",
        questions: [
          {
            question: "Question 1",
            pointValue: 100,
            answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
            correctAnsIndx: 2
          },
          {
            question: "Question 2",
            pointValue: 200,
            answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
            correctAnsIndx: 2
          },
          {
            question: "Question 3",
            pointValue: 400,
            answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
            correctAnsIndx: 2
          },
          {
            question: "Question 4",
            pointValue: 800,
            answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
            correctAnsIndx: 2
          },
          {
            question: "Question 5",
            pointValue: 1200,
            answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
            correctAnsIndx: 2
          }
        ]
      }
    ]
  };
}
