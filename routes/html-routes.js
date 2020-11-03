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
    var data = await getQuestionData();
    /*
*/
    res.render("trivia", data);
  });
};

async function getQuestionData() {
  var categories = [{name: "Sports", apiId: 21}, {}, {}];
  var model = { columns: []};
  categories.forEach(cat => {
    var catObj = {category: cat.name, questions: []};
    for(var i = 0; i < 3; i++) {
      if (i === 0) {
        var questions = await getQuestions(2, "easy", cat.apiId);
      }
    }
    model.columns.push(catObj);
  });
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
            pointValue: 1600,
            answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
            correctAnsIndx: 2
          }
        ]
      }
    ]
  };
}

async function getQuestions(howMany, difficulty, categoryId) {
  var url = `https://opentdb.com/api.php?amount=${howMany}&difficulty=${difficulty}&type=multiple`;
  if (categoryId > 0) {
    url = url + `&category=${categoryId}`;
  }
  return await axios.get(url);
}
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
//----API Calls FOR TRIVIA GAME, AXIOS.GET NEEDS TO BE PUT INTO THEIR PLACE.
/* eslint-disable prettier/prettier
 eslint-disable no-unused-vars 
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
const scoreDiv = document.getElementById("hud-item");
const currentQuestion = {};
const acceptingAnswers = false;
const score = 0;
const questionCounter = 0;
const availableQuesions = [];

let questions = [];
//sports easy
axios
  .get("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple")
  .then(res => {
    return res.json();
  })
  .then(loadedQuestions => {
    questions = loadedQuestions.results.map(loadedQuestion => {
      const formattedQuestion = {
        question: loadedQuestion.question
      };
      const answerChoices = [...loadedQuestion.incorrect_answers];
      formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
      answerChoices.splice(
        formattedQuestion.answer - 1,
        0,
        loadedQuestion.correct_answer
      );
      answerChoices.forEach((choice, index) => {
        formattedQuestion["choice" + (index + 1)] = choice;
      });
      return formattedQuestion;
    });
  });
//sports medium
axios
  .get("https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=multiple")
  .then(res => {
    return res.json();
  })
  .then(loadedQuestions => {
    questions = loadedQuestions.results.map(loadedQuestion => {
      const formattedQuestion = {
        question: loadedQuestion.question
      };
      const answerChoices = [...loadedQuestion.incorrect_answers];
      formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
      answerChoices.splice(
        formattedQuestion.answer - 1,
        0,
        loadedQuestion.correct_answer
      );
      answerChoices.forEach((choice, index) => {
        formattedQuestion["choice" + (index + 1)] = choice;
      });
      return formattedQuestion;
    });
  });
//sports hard
axios
  .get("https://opentdb.com/api.php?amount=5&category=21&difficulty=hard&type=multiple")
  .then(res => {
    return res.json();
  })
  .then(loadedQuestions => {
    questions = loadedQuestions.results.map(loadedQuestion => {
      const formattedQuestion = {
        question: loadedQuestion.question
      };

      const answerChoices = [...loadedQuestion.incorrect_answers];
      formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
      answerChoices.splice(
        formattedQuestion.answer - 1,
        0,
        loadedQuestion.correct_answer
      );

      answerChoices.forEach((choice, index) => {
        formattedQuestion["choice" + (index + 1)] = choice;
      });

      return formattedQuestion;
    });
  });
//history easy
axios
  .get("https://opentdb.com/api.php?amount=5&category=23&difficulty=easy&type=multiple")
  .then(res => {
    return res.json();
  })
  .then(loadedQuestions => {
    questions = loadedQuestions.results.map(loadedQuestion => {
      const formattedQuestion = {
        question: loadedQuestion.question
      };
      const answerChoices = [...loadedQuestion.incorrect_answers];
      formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
      answerChoices.splice(
        formattedQuestion.answer - 1,
        0,
        loadedQuestion.correct_answer
      );
      answerChoices.forEach((choice, index) => {
        formattedQuestion["choice" + (index + 1)] = choice;
      });
      return formattedQuestion;
    });
  });
//history medium
axios
  .get("https://opentdb.com/api.php?amount=5&category=23&difficulty=medium&type=multiple")
  .then(res => {
    return res.json();
  })
  .then(loadedQuestions => {
    questions = loadedQuestions.results.map(loadedQuestion => {
      const formattedQuestion = {
        question: loadedQuestion.question
      };
      const answerChoices = [...loadedQuestion.incorrect_answers];
      formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
      answerChoices.splice(
        formattedQuestion.answer - 1,
        0,
        loadedQuestion.correct_answer
      );
      answerChoices.forEach((choice, index) => {
        formattedQuestion["choice" + (index + 1)] = choice;
      });
      return formattedQuestion;
    });
  });
//history hard
axios
  .get("https://opentdb.com/api.php?amount=5&category=23&difficulty=hard&type=multiple")
  .then(res => {
    return res.json();
  })
  .then(loadedQuestions => {
    questions = loadedQuestions.results.map(loadedQuestion => {
      const formattedQuestion = {
        question: loadedQuestion.question
      };
      const answerChoices = [...loadedQuestion.incorrect_answers];
      formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
      answerChoices.splice(
        formattedQuestion.answer - 1,
        0,
        loadedQuestion.correct_answer
      );
      answerChoices.forEach((choice, index) => {
        formattedQuestion["choice" + (index + 1)] = choice;
      });
      return formattedQuestion;
    });
  });
//cars easy
axios
  .get('https://opentdb.com/api.php?amount=5&category=28&difficulty=easy&type=multiple')
  .then(res => {
    return res.json();
  })
  .then(loadedQuestions => {
    questions = loadedQuestions.results.map(loadedQuestion => {
      const formattedQuestion = {
        question: loadedQuestion.question
      };
      const answerChoices = [...loadedQuestion.incorrect_answers];
      formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
      answerChoices.splice(
        formattedQuestion.answer - 1,
        0,
        loadedQuestion.correct_answer
      );
      answerChoices.forEach((choice, index) => {
        formattedQuestion["choice" + (index + 1)] = choice;
      });
      return formattedQuestion;
    });
  });
//cars medium
axios
  .get("https://opentdb.com/api.php?amount=5&category=28&difficulty=medium&type=multiple")
  .then(res => {
    return res.json();
  })
  .then(loadedQuestions => {
    questions = loadedQuestions.results.map(loadedQuestion => {
      const formattedQuestion = {
        question: loadedQuestion.question
      };
      const answerChoices = [...loadedQuestion.incorrect_answers];
      formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
      answerChoices.splice(
        formattedQuestion.answer - 1,
        0,
        loadedQuestion.correct_answer
      );
      answerChoices.forEach((choice, index) => {
        formattedQuestion["choice" + (index + 1)] = choice;
      });
      return formattedQuestion;
    });
  });
//cars hard
axios
  .get("https://opentdb.com/api.php?amount=5&category=28&difficulty=hard&type=multiple")
  .then(res => {
    return res.json();
  })
  .then(loadedQuestions => {
    questions = loadedQuestions.results.map(loadedQuestion => {
      const formattedQuestion = {
        question: loadedQuestion.question
      };
      const answerChoices = [...loadedQuestion.incorrect_answers];
      formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
      answerChoices.splice(
        formattedQuestion.answer - 1,
        0,
        loadedQuestion.correct_answer
      );
      answerChoices.forEach((choice, index) => {
        formattedQuestion["choice" + (index + 1)] = choice;
      });
      return formattedQuestion;
    });
  });
// geography easy
axios
  .get("https://opentdb.com/api.php?amount=5&category=22&difficulty=easy&type=multiple")
  .then(res => {
    return res.json();
  })
  .then(loadedQuestions => {
    questions = loadedQuestions.results.map(loadedQuestion => {
      const formattedQuestion = {
        question: loadedQuestion.question
      };
      const answerChoices = [...loadedQuestion.incorrect_answers];
      formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
      answerChoices.splice(
        formattedQuestion.answer - 1,
        0,
        loadedQuestion.correct_answer
      );
      answerChoices.forEach((choice, index) => {
        formattedQuestion["choice" + (index + 1)] = choice;
      });
      return formattedQuestion;
    });
  });
// geography medium
axios
  .get("https://opentdb.com/api.php?amount=5&category=22&difficulty=medium&type=multiple")
  .then(res => {
    return res.json();
  })
  .then(loadedQuestions => {
    questions = loadedQuestions.results.map(loadedQuestion => {
      const formattedQuestion = {
        question: loadedQuestion.question
      };
      const answerChoices = [...loadedQuestion.incorrect_answers];
      formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
      answerChoices.splice(
        formattedQuestion.answer - 1,
        0,
        loadedQuestion.correct_answer
      );
      answerChoices.forEach((choice, index) => {
        formattedQuestion["choice" + (index + 1)] = choice;
      });
      return formattedQuestion;
    });
  });
// geography hard
axios
  .get("https://opentdb.com/api.php?amount=5&category=22&difficulty=hard&type=multiple")
  .then(res => {
    return res.json();
  })
  .then(loadedQuestions => {
    questions = loadedQuestions.results.map(loadedQuestion => {
      const formattedQuestion = {
        question: loadedQuestion.question
      };
      const answerChoices = [...loadedQuestion.incorrect_answers];
      formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
      answerChoices.splice(
        formattedQuestion.answer - 1,
        0,
        loadedQuestion.correct_answer
      );
      answerChoices.forEach((choice, index) => {
        formattedQuestion["choice" + (index + 1)] = choice;
      });
      return formattedQuestion;
    });
  });
//random easy
axios
  .get("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
  .then(res => {
    return res.json();
  })
  .then(loadedQuestions => {
    questions = loadedQuestions.results.map(loadedQuestion => {
      const formattedQuestion = {
        question: loadedQuestion.question
      };
      const answerChoices = [...loadedQuestion.incorrect_answers];
      formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
      answerChoices.splice(
        formattedQuestion.answer - 1,
        0,
        loadedQuestion.correct_answer
      );
      answerChoices.forEach((choice, index) => {
        formattedQuestion["choice" + (index + 1)] = choice;
      });
      return formattedQuestion;
    });
  });
//random medium
axios
  .get("https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple")
  .then(res => {
    return res.json();
  })
  .then(loadedQuestions => {
    questions = loadedQuestions.results.map(loadedQuestion => {
      const formattedQuestion = {
        question: loadedQuestion.question
      };
      const answerChoices = [...loadedQuestion.incorrect_answers];
      formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
      answerChoices.splice(
        formattedQuestion.answer - 1,
        0,
        loadedQuestion.correct_answer
      );
      answerChoices.forEach((choice, index) => {
        formattedQuestion["choice" + (index + 1)] = choice;
      });
      return formattedQuestion;
    });
  });
//random hard
axios
  .get("https://opentdb.com/api.php?amount=5&difficulty=hard&type=multiple")
  .then(res => {
    return res.json();
  })
  .then(loadedQuestions => {
    questions = loadedQuestions.results.map(loadedQuestion => {
      const formattedQuestion = {
        question: loadedQuestion.question
      };
      const answerChoices = [...loadedQuestion.incorrect_answers];
      formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
      answerChoices.splice(
        formattedQuestion.answer - 1,
        0,
        loadedQuestion.correct_answer
      );
      answerChoices.forEach((choice, index) => {
        formattedQuestion["choice" + (index + 1)] = choice;
      });
      return formattedQuestion;
    });
  });
  */