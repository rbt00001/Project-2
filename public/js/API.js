fetch(
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
        fetch(
            'https://opentdb.com/api.php?amount=5&category=23&type=multiple'
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
                fetch(
                    'https://opentdb.com/api.php?amount=5&category=28&type=multiple'
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
                        fetch(
                            'https://opentdb.com/api.php?amount=5&category=22&type=multiple'
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
                                fetch(
                                    'https://opentdb.com/api.php?amount=5&type=multiple'
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