import React, { useEffect } from 'react';
import './App.css';
import Keyboard from './components/Keyboard';
import { useWordCheck } from './hooks';

function App() {
  const { noori,
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
  } = useWordCheck();

  useEffect(() => {
    handleRandomWord();
  }, [noori]);

  return (
    <div className="App">
      <h1 className='title'>noordle</h1>
      <div className={showAnswer ? 'answer' : 'hide'}>{word}</div>
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
      <button className="bottom-button" onClick={() => setNoori(!noori)}>{noori ? 'Random' : 'Noordle'}</button>
      <button className={noori ? 'bottom-button new-word-button hide' : 'bottom-button new-word-button'} onClick={() => handleRandomWord()}>New Word</button>
      <Keyboard handleInput={handleInput} />
    </div>
  );
}

export default App;
