import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [word, setWord] = useState('NOORI');
  const [input, setInput] = useState('');
  const [guess, setGuess] = useState(input);
  const [guessOne, setGuessOne] = useState({ word: '', result: null });
  const [guessTwo, setGuessTwo] = useState({ word: '', result: '' });
  const [guessThree, setGuessThree] = useState({ word: '', result: '' });
  const [round, setRound] = useState(1);

  const handleInput = e => setInput(e.target.value);

  useEffect(() => {
    setGuess(input.toUpperCase());
  }, [input]);

  const handleGuess = () => {
    if (round === 1 && guess === word) {
      setGuessOne({ word: guess, result: 'green'});
      setInput('');
      setRound(round + 1);
    } else if (round === 1 && guess !== word) {
      setGuessOne({ word: guess, result: 'red'});
      setInput('');
      setRound(round + 1);
    } else if (round === 2 && guess === word) {
      setGuessTwo({ word: guess, result: 'green'});
      setInput('');
      setRound(round + 1);
    } else if (round === 2 && guess !== word) {
      setGuessTwo({ word: guess, result: 'red'});
      setInput('');
      setRound(round + 1);
    } else if (round === 3 && guess === word) {
      setGuessThree({ word: guess, result: 'green'});
      setInput('');
      setRound(round + 1);
    } else if (round === 3 && guess !== word) {
      setGuessThree({ word: guess, result: 'red'});
      setInput('');
      setRound(round + 1);
    } 
  }

  return (
    <div className="App">
      <h1>Noordle</h1>
      <div className="guess-input">
      <input type="text" maxlength="5" value={input.toUpperCase()} onChange={e => handleInput(e)}></input>
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
          <tr className="guess four">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="guess five">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
