import { useState, useEffect } from 'react';
import { wordList } from '../assets/wordList';
import { checkLetter } from '../helpers'

function useWordCheck() {
  const [noori, setNoori] = useState(true);
  const [word, setWord] = useState('');
  const [input, setInput] = useState('');
  const [guess, setGuess] = useState(input);
  const [guessOne, setGuessOne] = useState({ word: '', result: '', results: []});
  const [guessTwo, setGuessTwo] = useState({ word: '', result: '', results: []});
  const [guessThree, setGuessThree] = useState({ word: '', result: '', results: []});
  const [guessFour, setGuessFour] = useState({ word: '', result: '', results: []});
  const [guessFive, setGuessFive] = useState({ word: '', result: '', results: []});
  const [currentRound, setCurrentRound] = useState(1);
  const [showAnswer, setShowAnswer] = useState(false);
  const randomWord = wordList[Math.floor(Math.random()*wordList.length)];

  const handleInput = value => {
    input.length < 5 && value !=='Back' && setInput(input + value);
    value == 'Back' && setInput(input.slice(0,-1));
    value === 'Enter' && handleGuess(); 
  }

  const handleGuess = () => {
    if (currentRound === 1) {
      checkLetter(guessOne, guess, word);
    } else if (currentRound === 2) {
      checkLetter(guessTwo, guess, word);
    } else if (currentRound === 3) {
      checkLetter(guessThree,  guess, word);
    } else if (currentRound === 4) {
      checkLetter(guessFour, guess, word);
    } else if (currentRound === 5) {
      checkLetter(guessFive, guess, word);
    }
    setInput('');
    setCurrentRound(currentRound + 1);
  }

  const reset = () => {
    setInput('');
    setGuessOne({ word: '', result: null, results: []});
    setGuessTwo({ word: '', result: null, results: []});
    setGuessThree({ word: '', result: null, results: []});
    setGuessFour({ word: '', result: null, results: []});
    setGuessFive({ word: '', result: null, results: []});
    setCurrentRound(1);
  }

  useEffect(() => {
    setGuess(input.toUpperCase());
  }, [input]);

  const handleRandomWord = () => {
    reset();
    noori ? setWord('NOORI') : setWord(randomWord?.toUpperCase());
  }

  useEffect(() => {
    handleRandomWord();
  }, [noori]);
  
  return {
    noori,
    showAnswer,
    word,
    guessOne,
    guessTwo,
    guessThree,
    guessFour,
    guessFive,
    currentRound,
    input,
    setShowAnswer,
    setNoori,
    handleInput,
    reset,
    handleRandomWord
  }
}

export default useWordCheck;
