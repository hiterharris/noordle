import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [word] = useState('NOORI');
  const [input, setInput] = useState('');
  const [guess, setGuess] = useState(input);
  const [guessOne, setGuessOne] = useState({ word: '', result: '', results: [] });
  const [guessTwo, setGuessTwo] = useState({ word: '', result: '', results: [] });
  const [guessThree, setGuessThree] = useState({ word: '', result: '', results: [] });
  const [guessFour, setGuessFour] = useState({ word: '', result: '', results: [] });
  const [guessFive, setGuessFive] = useState({ word: '', result: '', results: [] });
  const [currentRound, setCurrentRound] = useState(1);

  const handleInput = e => setInput(e.target.value);

  const reset = () => {
    setInput('');
    setGuessOne({ word: '', result: null, results: [] });
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
    } else if (guess[0] !== word[0]) {
      guessRound.results.push('red');
      guessRound.word = guess;
    }
    if (guess[1] === word[1]) {
      guessRound.results.push('green');
      guessRound.word = guess;
    } else if (guess[1] !== word[1]) {
      guessRound.results.push('red');
      guessRound.word = guess;
    }
    if (guess[2] === word[2]) {
      guessRound.results.push('green');
      guessRound.word = guess;
    } else if (guess[2] !== word[2]) {
      guessRound.results.push('red');
      guessRound.word = guess;
    }
    if (guess[3] === word[3]) {
      guessRound.results.push('green');
      guessRound.word = guess;
    } else if (guess[3] !== word[3]) {
      guessRound.results.push('red');
      guessRound.word = guess;
    }
    if (guess[4] === word[4]) {
      guessRound.results.push('green');
      guessRound.word = guess;
    } else if (guess[4] !== word[4]) {
      guessRound.results.push('red');
      guessRound.word = guess;
    }
    
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

  return (
    <div className="App">
      <h1>noordle</h1>
      <div className="guess-input">
        <input type="text" maxLength="5" value={input.toUpperCase()} onChange={e => handleInput(e)}></input>
        <button type="submit" onClick={() => handleGuess()}>Submit</button>
      </div>
       <table>
         <tbody>
           <tr>
            <td className={`one-${guessOne?.results[0]}`}>{guessOne?.word === '' ? input[0]?.toUpperCase() : guessOne?.word[0]}</td>
            <td className={`one-${guessOne?.results[1]}`}>{guessOne?.word === '' ? input[1]?.toUpperCase() : guessOne?.word[1]}</td>
            <td className={`one-${guessOne?.results[2]}`}>{guessOne?.word === '' ? input[2]?.toUpperCase() : guessOne?.word[2]}</td>
            <td className={`one-${guessOne?.results[3]}`}>{guessOne?.word === '' ? input[3]?.toUpperCase() : guessOne?.word[3]}</td>
            <td className={`one-${guessOne?.results[4]}`}>{guessOne?.word === '' ? input[4]?.toUpperCase() : guessOne?.word[4]}</td>
          </tr>
          <tr className={`guess two`}>
            <td className={`two-${guessTwo?.results[0]}`}>{guessOne?.word !== '' && guessTwo?.word === '' ? input[0]?.toUpperCase() : guessTwo?.word[0]}</td>
            <td className={`two-${guessTwo?.results[1]}`}>{guessOne?.word !== '' && guessTwo?.word === '' ? input[1]?.toUpperCase() : guessTwo?.word[1]}</td>
            <td className={`two-${guessTwo?.results[2]}`}>{guessOne?.word !== '' && guessTwo?.word === '' ? input[2]?.toUpperCase() : guessTwo?.word[2]}</td>
            <td className={`two-${guessTwo?.results[3]}`}>{guessOne?.word !== '' && guessTwo?.word === '' ? input[3]?.toUpperCase() : guessTwo?.word[3]}</td>
            <td className={`two-${guessTwo?.results[4]}`}>{guessOne?.word !== '' && guessTwo?.word === '' ? input[4]?.toUpperCase() : guessTwo?.word[4]}</td>
          </tr>
          <tr className={`guess three`}>
            <td className={`three-${guessThree?.results[0]}`}>{guessTwo?.word !== '' && guessThree?.word === '' ? input[0]?.toUpperCase() : guessThree?.word[0]}</td>
            <td className={`three-${guessThree?.results[1]}`}>{guessTwo?.word !== '' && guessThree?.word === '' ? input[1]?.toUpperCase() : guessThree?.word[1]}</td>
            <td className={`three-${guessThree?.results[2]}`}>{guessTwo?.word !== '' && guessThree?.word === '' ? input[2]?.toUpperCase() : guessThree?.word[2]}</td>
            <td className={`three-${guessThree?.results[3]}`}>{guessTwo?.word !== '' && guessThree?.word === '' ? input[3]?.toUpperCase() : guessThree?.word[3]}</td>
            <td className={`three-${guessThree?.results[4]}`}>{guessTwo?.word !== '' && guessThree?.word === '' ? input[4]?.toUpperCase() : guessThree?.word[4]}</td>
          </tr>
          <tr className={`guess four`}>
            <td className={`four-${guessFour?.results[0]}`}>{guessThree?.word !== '' && guessFour?.word === '' ? input[0]?.toUpperCase() : guessFour?.word[0]}</td>
            <td className={`four-${guessFour?.results[1]}`}>{guessThree?.word !== '' && guessFour?.word === '' ? input[1]?.toUpperCase() : guessFour?.word[1]}</td>
            <td className={`four-${guessFour?.results[2]}`}>{guessThree?.word !== '' && guessFour?.word === '' ? input[2]?.toUpperCase() : guessFour?.word[2]}</td>
            <td className={`four-${guessFour?.results[3]}`}>{guessThree?.word !== '' && guessFour?.word === '' ? input[3]?.toUpperCase() : guessFour?.word[3]}</td>
            <td className={`four-${guessFour?.results[4]}`}>{guessThree?.word !== '' && guessFour?.word === '' ? input[4]?.toUpperCase() : guessFour?.word[4]}</td>
          </tr>
          <tr className={`guess five`}>
            <td className={`five-${guessFive?.results[0]}`}>{guessFour?.word !== '' && guessFive?.word === '' ? input[0]?.toUpperCase() : guessFive?.word[0]}</td>
            <td className={`five-${guessFive?.results[1]}`}>{guessFour?.word !== '' && guessFive?.word === '' ? input[1]?.toUpperCase() : guessFive?.word[1]}</td>
            <td className={`five-${guessFive?.results[2]}`}>{guessFour?.word !== '' && guessFive?.word === '' ? input[2]?.toUpperCase() : guessFive?.word[2]}</td>
            <td className={`five-${guessFive?.results[3]}`}>{guessFour?.word !== '' && guessFive?.word === '' ? input[3]?.toUpperCase() : guessFive?.word[3]}</td>
            <td className={`five-${guessFive?.results[4]}`}>{guessFour?.word !== '' && guessFive?.word === '' ? input[4]?.toUpperCase() : guessFive?.word[4]}</td>
          </tr>
        </tbody>
      </table>
      <button className="reset-button" onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
