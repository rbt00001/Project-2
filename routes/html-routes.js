// var axios = require("axios");

module.exports = function(app) {
  app.get("/login", (req, res) => {
    // ToDo : serve up  login page
  });

  app.get("/", isAuthenticated, (req, res) => {
    res.render("index", {});
  });

  app.get("/trivia", isAuthenticated, (req, res) => {
    // ToDo : render trivia home page
    var data = getQuestionData();
    {
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
              pointValue: 1600,
              answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
              correctAnsIndx: 2
            }
          ]
        }
      ];
    }

    res.render("trivia", data);
  });
};

function getQuestionData() {}
/*
        axios.get(
            'https://opentdb.com/api.php?amount=5&category=21&type=multiple'
          )
              .then((res) => {
                  return res.json();
              })
              .then((loadedQuestions) => {
                  questions = loadedQuestions.results.map((loadedQuestion) => {
                      const formattedQuestion = {
                          question: loadedQuestion.question,
                      };
          
                      const answerChoices = [...loadedQuestion.incorrect_answers];
                      formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
                      answerChoices.splice(
                          formattedQuestion.answer - 1,
                          0,
                          loadedQuestion.correct_answer
                      );
          
                      answerChoices.forEach((choice, index) => {
                          formattedQuestion['choice' + (index + 1)] = choice;
                      });
          
                      return formattedQuestion;
                  });
              });
*/
