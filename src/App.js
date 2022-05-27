import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [word, setWord] = useState('NOORI');
  const [input, setInput] = useState('');
  const [guess, setGuess] = useState(input);
  const [guessOne, setGuessOne] = useState({ word: '', result: '' });
  const [guessTwo, setGuessTwo] = useState({ word: '', result: '' });
  const [guessThree, setGuessThree] = useState({ word: '', result: '' });
  const [guessFour, setGuessFour] = useState({ word: '', result: '' });
  const [guessFive, setGuessFive] = useState({ word: '', result: '' });
  const [currentRound, setCurrentRound] = useState(1);

  const handleInput = e => setInput(e.target.value);

  // useEffect(() => {
  //   fetch('https://random-word-api.herokuapp.com/word')
  //     .then(res => res.json())
  //     .then(data => {
  //       return setWord(data[0]);
  //     })
  //     .catch(error => console.log('error fetching data: ', error))
  // }, []);


  const reset = () => {
    setInput('');
    setGuessOne({ word: '', result: null});
    setGuessTwo({ word: '', result: null});
    setGuessThree({ word: '', result: null});
    setGuessFour({ word: '', result: null});
    setGuessFive({ word: '', result: null});
    setCurrentRound(1);
  }

  useEffect(() => {
    setGuess(input.toUpperCase());
  }, [input]);

  const handleGuess = () => {
    if (currentRound === 1 && guess === word) {
      setGuessOne({ word: guess, result: 'green'});
    } else if (currentRound === 1 && guess !== word) {
      setGuessOne({ word: guess, result: 'red'});
    }

    else if (currentRound === 2 && guess === word) {
      setGuessTwo({ word: guess, result: 'green'});
    } else if (currentRound === 2 && guess !== word) {
      setGuessTwo({ word: guess, result: 'red'});
    }
    else if (currentRound === 3 && guess === word) {
      setGuessThree({ word: guess, result: 'green'});
    } else if (currentRound === 3 && guess !== word) {
      setGuessThree({ word: guess, result: 'red'});
    }
    else if (currentRound === 4 && guess === word) {
      setGuessFour({ word: guess, result: 'green'});
    } else if (currentRound === 4 && guess !== word) {
      setGuessFour({ word: guess, result: 'red'});
    }
    else if (currentRound === 5 && guess === word) {
      setGuessFive({ word: guess, result: 'green'});
    } else if (currentRound === 5 && guess !== word) {
      setGuessFive({ word: guess, result: 'red'});
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
            <td className={`one-${guessOne.result}`}>{guessOne?.word === '' ? input[0]?.toUpperCase() : guessOne?.word[0]}</td>
            <td className={`one-${guessOne.result}`}>{guessOne?.word === '' ? input[1]?.toUpperCase() : guessOne?.word[1]}</td>
            <td className={`one-${guessOne.result}`}>{guessOne?.word === '' ? input[2]?.toUpperCase() : guessOne?.word[2]}</td>
            <td className={`one-${guessOne.result}`}>{guessOne?.word === '' ? input[3]?.toUpperCase() : guessOne?.word[3]}</td>
            <td className={`one-${guessOne.result}`}>{guessOne?.word === '' ? input[4]?.toUpperCase() : guessOne?.word[4]}</td>
          </tr>
          <tr className={`guess two`}>
            <td className={`two-${guessTwo.result}`}>{guessOne?.word !== '' && guessTwo?.word === '' ? input[0]?.toUpperCase() : guessTwo?.word[0]}</td>
            <td className={`two-${guessTwo.result}`}>{guessOne?.word !== '' && guessTwo?.word === '' ? input[1]?.toUpperCase() : guessTwo?.word[1]}</td>
            <td className={`two-${guessTwo.result}`}>{guessOne?.word !== '' && guessTwo?.word === '' ? input[2]?.toUpperCase() : guessTwo?.word[2]}</td>
            <td className={`two-${guessTwo.result}`}>{guessOne?.word !== '' && guessTwo?.word === '' ? input[3]?.toUpperCase() : guessTwo?.word[3]}</td>
            <td className={`two-${guessTwo.result}`}>{guessOne?.word !== '' && guessTwo?.word === '' ? input[4]?.toUpperCase() : guessTwo?.word[4]}</td>
          </tr>
          <tr className={`guess three`}>
            <td className={`three-${guessThree.result}`}>{guessTwo?.word !== '' && guessThree?.word === '' ? input[0]?.toUpperCase() : guessThree?.word[0]}</td>
            <td className={`three-${guessThree.result}`}>{guessTwo?.word !== '' && guessThree?.word === '' ? input[1]?.toUpperCase() : guessThree?.word[1]}</td>
            <td className={`three-${guessThree.result}`}>{guessTwo?.word !== '' && guessThree?.word === '' ? input[2]?.toUpperCase() : guessThree?.word[2]}</td>
            <td className={`three-${guessThree.result}`}>{guessTwo?.word !== '' && guessThree?.word === '' ? input[3]?.toUpperCase() : guessThree?.word[3]}</td>
            <td className={`three-${guessThree.result}`}>{guessTwo?.word !== '' && guessThree?.word === '' ? input[4]?.toUpperCase() : guessThree?.word[4]}</td>
          </tr>
          <tr className={`guess four`}>
            <td className={`four-${guessFour.result}`}>{guessThree?.word !== '' && guessFour?.word === '' ? input[0]?.toUpperCase() : guessFour?.word[0]}</td>
            <td className={`four-${guessFour.result}`}>{guessThree?.word !== '' && guessFour?.word === '' ? input[1]?.toUpperCase() : guessFour?.word[1]}</td>
            <td className={`four-${guessFour.result}`}>{guessThree?.word !== '' && guessFour?.word === '' ? input[2]?.toUpperCase() : guessFour?.word[2]}</td>
            <td className={`four-${guessFour.result}`}>{guessThree?.word !== '' && guessFour?.word === '' ? input[3]?.toUpperCase() : guessFour?.word[3]}</td>
            <td className={`four-${guessFour.result}`}>{guessThree?.word !== '' && guessFour?.word === '' ? input[4]?.toUpperCase() : guessFour?.word[4]}</td>
          </tr>
          <tr className={`guess five`}>
            <td className={`five-${guessFive.result}`}>{guessFour?.word !== '' && guessFive?.word === '' ? input[0]?.toUpperCase() : guessFive?.word[0]}</td>
            <td className={`five-${guessFive.result}`}>{guessFour?.word !== '' && guessFive?.word === '' ? input[1]?.toUpperCase() : guessFive?.word[1]}</td>
            <td className={`five-${guessFive.result}`}>{guessFour?.word !== '' && guessFive?.word === '' ? input[2]?.toUpperCase() : guessFive?.word[2]}</td>
            <td className={`five-${guessFive.result}`}>{guessFour?.word !== '' && guessFive?.word === '' ? input[3]?.toUpperCase() : guessFive?.word[3]}</td>
            <td className={`five-${guessFive.result}`}>{guessFour?.word !== '' && guessFive?.word === '' ? input[4]?.toUpperCase() : guessFive?.word[4]}</td>
          </tr>
        </tbody>
      </table>
      <button className="reset-button" onClick={() => reset()}>Reset</button>
    </div>
  );
}

export default App;
