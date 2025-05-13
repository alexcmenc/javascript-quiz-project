class Quiz {
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.score = 0;
    this.currentQuestionIndex = 0;
  }

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion () {
    return (this.currentQuestionIndex = this.currentQuestionIndex + 1);
  }

  shuffleQuestions () {
    return this.questions.sort(() => Math.random() - 0.5);
  }

  checkAnswer (answer) {
    const question = this.getQuestion();
    const isCorrect = question.answer === answer;

    if (isCorrect) {
      this.score += 1;
    }
    return isCorrect;
  }

  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) {
      return false;
    }
    if (this.currentQuestionIndex === this.questions.length) {
      return true;
    }
  }

  filterQuestionsByDifficulty(difficulty) {
    if (difficulty >= 1 && difficulty <= 3) {
      this.questions = this.questions.filter(
        (question) => question.difficulty === difficulty
      );
    }
  }

  averageDifficulty() {
    if (this.questions.length === 0) return 0;
    const total = this.questions.reduce(
      (acc, question) => acc + question.difficulty,
      0
    );
    return total / this.questions.length;
  }
}
