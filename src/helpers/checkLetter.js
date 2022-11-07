const checkLetter = (guessRound, guess, word) => {
    if (guess[0] === word[0]) {
      guessRound.results.push('green');
      guessRound.word = guess;
    } else if (guess[0] !== word[0] && word.includes(guess[0])) {
      guessRound.results.push('yellow');
      guessRound.word = guess;
    } else if (guess[0] !== word[0] && !word.includes(guess[0])) {
      guessRound.results.push('red');
      guessRound.word = guess;
    }
    if (guess[1] === word[1]) {
      guessRound.results.push('green');
      guessRound.word = guess;
    } else if (guess[1] !== word[1] && word.includes(guess[1])) {
      guessRound.results.push('yellow');
      guessRound.word = guess;
    } else if (guess[1] !== word[1] && !word.includes(guess[1])) {
      guessRound.results.push('red');
      guessRound.word = guess;
    }
    if (guess[2] === word[2]) {
      guessRound.results.push('green');
      guessRound.word = guess;
    } else if (guess[2] !== word[2] && word.includes(guess[2])) {
      guessRound.results.push('yellow');
      guessRound.word = guess;
    } else if (guess[2] !== word[2] && !word.includes(guess[2])) {
      guessRound.results.push('red');
      guessRound.word = guess;
    }
    if (guess[3] === word[3]) {
      guessRound.results.push('green');
      guessRound.word = guess;
    } else if (guess[3] !== word[3] && word.includes(guess[3])) {
      guessRound.results.push('yellow');
      guessRound.word = guess;
    } else if (guess[3] !== word[3] && !word.includes(guess[3])) {
      guessRound.results.push('red');
      guessRound.word = guess;
    }
    if (guess[4] === word[4]) {
      guessRound.results.push('green');
      guessRound.word = guess;
    } else if (guess[4] !== word[4] && word.includes(guess[4])) {
      guessRound.results.push('yellow');
      guessRound.word = guess;
    } else if (guess[4] !== word[4] && !word.includes(guess[4])) {
      guessRound.results.push('red');
      guessRound.word = guess;
    }
  }

  export default checkLetter;
