/* eslint-disable */
import React, { useState, useEffect } from 'react';
import './App.css';
import { wordList } from './assets/wordList';
import Keyboard from './components/Keyboard';

function App() {
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
      checkLetter(guessOne);
    } else if (currentRound === 2) {
      checkLetter(guessTwo);
    } else if (currentRound === 3) {
      checkLetter(guessThree);
    } else if (currentRound === 4) {
      checkLetter(guessFour);
    } else if (currentRound === 5) {
      checkLetter(guessFive);
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

  const checkLetter = (guessRound) => {
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

  const handleRandomWord = () => {
    reset();
    noori ? setWord('NOORI') : setWord(randomWord?.toUpperCase());
  }

  useEffect(() => {
    handleRandomWord();
  }, [noori]);

  return (
    <div className="App">
      <h1>noordle</h1>
      <div className={showAnswer ? '' : 'hide'}>{word}</div>
       <table>
         <tbody>
           <tr className={`guess one`}>
            <td className={`one-${guessOne?.results[0]}`}><div className={currentRound > 1 && 'text'}>{guessOne?.word === '' ? input[0]?.toUpperCase() : guessOne?.word[0]}</div></td>
            <td className={`one-${guessOne?.results[1]}`}><div className={currentRound > 1 && 'text'}>{guessOne?.word === '' ? input[1]?.toUpperCase() : guessOne?.word[1]}</div></td>
            <td className={`one-${guessOne?.results[2]}`}><div className={currentRound > 1 && 'text'}>{guessOne?.word === '' ? input[2]?.toUpperCase() : guessOne?.word[2]}</div></td>
            <td className={`one-${guessOne?.results[3]}`}><div className={currentRound > 1 && 'text'}>{guessOne?.word === '' ? input[3]?.toUpperCase() : guessOne?.word[3]}</div></td>
            <td className={`one-${guessOne?.results[4]}`}><div className={currentRound > 1 && 'text'}>{guessOne?.word === '' ? input[4]?.toUpperCase() : guessOne?.word[4]}</div></td>
          </tr>
          <tr className={`guess two`}>
            <td className={`two-${guessTwo?.results[0]}`}><div className={currentRound > 2 && 'text'}>{guessOne?.word !== '' && guessTwo?.word === '' ? input[0]?.toUpperCase() : guessTwo?.word[0]}</div></td>
            <td className={`two-${guessTwo?.results[1]}`}><div className={currentRound > 2 && 'text'}>{guessOne?.word !== '' && guessTwo?.word === '' ? input[1]?.toUpperCase() : guessTwo?.word[1]}</div></td>
            <td className={`two-${guessTwo?.results[2]}`}><div className={currentRound > 2 && 'text'}>{guessOne?.word !== '' && guessTwo?.word === '' ? input[2]?.toUpperCase() : guessTwo?.word[2]}</div></td>
            <td className={`two-${guessTwo?.results[3]}`}><div className={currentRound > 2 && 'text'}>{guessOne?.word !== '' && guessTwo?.word === '' ? input[3]?.toUpperCase() : guessTwo?.word[3]}</div></td>
            <td className={`two-${guessTwo?.results[4]}`}><div className={currentRound > 2 && 'text'}>{guessOne?.word !== '' && guessTwo?.word === '' ? input[4]?.toUpperCase() : guessTwo?.word[4]}</div></td>
          </tr>
          <tr className={`guess three`}>
            <td className={`three-${guessThree?.results[0]}`}><div className={currentRound > 3 && 'text'}>{guessTwo?.word !== '' && guessThree?.word === '' ? input[0]?.toUpperCase() : guessThree?.word[0]}</div></td>
            <td className={`three-${guessThree?.results[1]}`}><div className={currentRound > 3 && 'text'}>{guessTwo?.word !== '' && guessThree?.word === '' ? input[1]?.toUpperCase() : guessThree?.word[1]}</div></td>
            <td className={`three-${guessThree?.results[2]}`}><div className={currentRound > 3 && 'text'}>{guessTwo?.word !== '' && guessThree?.word === '' ? input[2]?.toUpperCase() : guessThree?.word[2]}</div></td>
            <td className={`three-${guessThree?.results[3]}`}><div className={currentRound > 3 && 'text'}>{guessTwo?.word !== '' && guessThree?.word === '' ? input[3]?.toUpperCase() : guessThree?.word[3]}</div></td>
            <td className={`three-${guessThree?.results[4]}`}><div className={currentRound > 3 && 'text'}>{guessTwo?.word !== '' && guessThree?.word === '' ? input[4]?.toUpperCase() : guessThree?.word[4]}</div></td>
          </tr>
          <tr className={`guess four`}>
            <td className={`four-${guessFour?.results[0]}`}><div className={currentRound > 4 && 'text'}>{guessThree?.word !== '' && guessFour?.word === '' ? input[0]?.toUpperCase() : guessFour?.word[0]}</div></td>
            <td className={`four-${guessFour?.results[1]}`}><div className={currentRound > 4 && 'text'}>{guessThree?.word !== '' && guessFour?.word === '' ? input[1]?.toUpperCase() : guessFour?.word[1]}</div></td>
            <td className={`four-${guessFour?.results[2]}`}><div className={currentRound > 4 && 'text'}>{guessThree?.word !== '' && guessFour?.word === '' ? input[2]?.toUpperCase() : guessFour?.word[2]}</div></td>
            <td className={`four-${guessFour?.results[3]}`}><div className={currentRound > 4 && 'text'}>{guessThree?.word !== '' && guessFour?.word === '' ? input[3]?.toUpperCase() : guessFour?.word[3]}</div></td>
            <td className={`four-${guessFour?.results[4]}`}><div className={currentRound > 4 && 'text'}>{guessThree?.word !== '' && guessFour?.word === '' ? input[4]?.toUpperCase() : guessFour?.word[4]}</div></td>
          </tr>
          <tr className={`guess five`}>
            <td className={`five-${guessFive?.results[0]}`}><div className={currentRound > 5 && 'text'}>{guessFour?.word !== '' && guessFive?.word === '' ? input[0]?.toUpperCase() : guessFive?.word[0]}</div></td>
            <td className={`five-${guessFive?.results[1]}`}><div className={currentRound > 5 && 'text'}>{guessFour?.word !== '' && guessFive?.word === '' ? input[1]?.toUpperCase() : guessFive?.word[1]}</div></td>
            <td className={`five-${guessFive?.results[2]}`}><div className={currentRound > 5 && 'text'}>{guessFour?.word !== '' && guessFive?.word === '' ? input[2]?.toUpperCase() : guessFive?.word[2]}</div></td>
            <td className={`five-${guessFive?.results[3]}`}><div className={currentRound > 5 && 'text'}>{guessFour?.word !== '' && guessFive?.word === '' ? input[3]?.toUpperCase() : guessFive?.word[3]}</div></td>
            <td className={`five-${guessFive?.results[4]}`}><div className={currentRound > 5 && 'text'}>{guessFour?.word !== '' && guessFive?.word === '' ? input[4]?.toUpperCase() : guessFive?.word[4]}</div></td>
          </tr>
        </tbody>  
      </table>
      <div className="bottom-button-container">
        <button className="bottom-button" onClick={() => setShowAnswer(!showAnswer)}>{!showAnswer ? 'Show Answer' : 'Hide Answer'}</button>
        <button className="bottom-button" onClick={reset}>Reset</button>
      </div>
      <button className="bottom-button" onClick={() => setNoori(!noori)}>{noori ? 'Random' : 'Noori'}</button>
      <button className={noori ? 'bottom-button new-word-button hide' : 'bottom-button new-word-button'} onClick={() => handleRandomWord()}>New Word</button>
      <Keyboard handleInput={handleInput} />
    </div>
  );
}

export default App;
