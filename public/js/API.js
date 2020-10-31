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
fetch(
    'https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple'
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
    //sports medium 
fetch(
    'https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=multiple'
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
        formattedQuestion["choice" + (index + 1)] = choice;
      });

      return formattedQuestion;
    });

//sports hard 
fetch(
    'https://opentdb.com/api.php?amount=5&category=21&difficulty=hard&type=multiple'
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
    //history easy
        fetch(
            'https://opentdb.com/api.php?amount=5&category=23&difficulty=easy&type=multiple'
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
            //history medium
        fetch(
            'https://opentdb.com/api.php?amount=5&category=23&difficulty=medium&type=multiple'
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
            //history hard
        fetch(
            'https://opentdb.com/api.php?amount=5&category=23&difficulty=hard&type=multiple'
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
            //cars easy
                fetch(
                    'https://opentdb.com/api.php?amount=5&category=28&difficulty=easy&type=multiple'
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
                    //cars medium
                fetch(
                    'https://opentdb.com/api.php?amount=5&category=28&difficulty=medium&type=multiple'
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
                    //cars hard
                fetch(
                    'https://opentdb.com/api.php?amount=5&category=28&difficulty=hard&type=multiple'
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
                    // geography easy
                        fetch(
                            'https://opentdb.com/api.php?amount=5&category=22&difficulty=easy&type=multiple'
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
                             // geography medium
                        fetch(
                            'https://opentdb.com/api.php?amount=5&category=22&difficulty=medium&type=multiple'
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
                             // geography hard
                        fetch(
                            'https://opentdb.com/api.php?amount=5&category=22&difficulty=hard&type=multiple'
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
                            //random easy
                                fetch(
                                    'https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple'
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
                                    //random medium
                                fetch(
                                    'https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple'
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
                                    //random hard
                                fetch(
                                    'https://opentdb.com/api.php?amount=5&difficulty=hard&type=multiple'
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



