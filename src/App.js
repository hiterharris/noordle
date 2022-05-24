import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [word, setWord] = useState('NOORI');
  const [input, setInput] = useState('');
  const [guess, setGuess] = useState(input);
  const [guessOne, setGuessOne] = useState('');
  const [guessTwo, setGuessTwo] = useState('');
  const [guessThree, setGuessThree] = useState('');
  const [guessFour, setGuessFour] = useState('');
  const [guessFive, setGuessFive] = useState('');
  const [guessTest, setGuessTest] = useState({
    word: '',
    result: ''
  });

  const handleInput = e => setInput(e.target.value);

  useEffect(() => {
    setGuess(input.toUpperCase());
  }, [input]);

  const handleGuess = () => {
    if (guessOne === '') setGuessOne(guess);
    if (guessOne !== '' && guessTwo === '') setGuessTwo(guess);
    if (guessTest.word === '') setGuessTest({word: guess, result: guessTest?.result})
    setInput('');
  }

  useEffect(() => {
    console.log('word: ', word);
    guessTest.word === word && setGuessTest({ word: guess, result: 'green' })
    console.log('guessTest: ', guessTest);  
  }, [guessTest]);

  useEffect(() => {
  }, []);

  return (
    <div className="App">
      <h1>Noordle</h1>
      {/* <p>{word}</p> */}
      <div className="guess-input">
      <input type="text" maxlength="5" value={input.toUpperCase()} onChange={e => handleInput(e)}></input>
      <button type="submit" onClick={() => handleGuess()}>Submit</button>
      </div>
       <table>
         <tbody>
           <tr className={`guess test`}>
            <td>{guessTest.word === '' ? input[0]?.toUpperCase() : guessTest.word[0]}</td>
            <td>{guessTest.word === '' ? input[1]?.toUpperCase() : guessTest.word[1]}</td>
            <td>{guessTest.word === '' ? input[2]?.toUpperCase() : guessTest.word[2]}</td>
            <td>{guessTest.word === '' ? input[3]?.toUpperCase() : guessTest.word[3]}</td>
            <td>{guessTest.word === '' ? input[4]?.toUpperCase() : guessTest.word[4]}</td>
          </tr>
          {/* <tr className={`guess one`}>
            <td className={guessTest.result}>{guessOne === '' ? input[0]?.toUpperCase() : guessOne[0]}</td>
            <td>{guessOne === '' ? input[1]?.toUpperCase() : guessOne[1]}</td>
            <td>{guessOne === '' ? input[2]?.toUpperCase() : guessOne[2]}</td>
            <td>{guessOne === '' ? input[3]?.toUpperCase() : guessOne[3]}</td>
            <td>{guessOne === '' ? input[4]?.toUpperCase() : guessOne[4]}</td>
          </tr> */}
          <tr className={`guess two`}>
            <td>{guessOne !== '' && guessTwo === '' ? input[0]?.toUpperCase() : guessTwo[0]}</td>
            <td>{guessOne !== '' && guessTwo === '' ? input[1]?.toUpperCase() : guessTwo[1]}</td>
            <td>{guessOne !== '' && guessTwo === '' ? input[2]?.toUpperCase() : guessTwo[2]}</td>
            <td>{guessOne !== '' && guessTwo === '' ? input[3]?.toUpperCase() : guessTwo[3]}</td>
            <td>{guessOne !== '' && guessTwo === '' ? input[4]?.toUpperCase() : guessTwo[4]}</td>
          </tr>
          <tr className="guess three">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
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
