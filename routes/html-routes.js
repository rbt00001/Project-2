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
    var data = getQuestionData();
    /*
*/
    res.render("trivia", data);
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
