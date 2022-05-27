import { useState } from 'react';
import { useWord } from './index';

export default function useGuess() {
    const { word } = useWord('NOORI');
    const [input, setInput] = useState('');
    const [guess, setGuess] = useState(input);
    const [guessOne, setGuessOne] = useState({ word: '', result: '' });
    const [guessTwo, setGuessTwo] = useState({ word: '', result: '' });
    const [guessThree, setGuessThree] = useState({ word: '', result: '' });
    const [guessFour, setGuessFour] = useState({ word: '', result: '' });
    const [guessFive, setGuessFive] = useState({ word: '', result: '' });
    const [currentRound, setCurrentRound] = useState(1);

    const handleGuess = () => {
        if (currentRound === 1 && guess === word) {
          setGuessOne({ word: guess, result: 'green'});
        } else if (currentRound === 1 && guess !== word) {
          setGuessOne({ word: guess, result: 'red'});
        } else if (currentRound === 2 && guess === word) {
          setGuessTwo({ word: guess, result: 'green'});
        } else if (currentRound === 2 && guess !== word) {
          setGuessTwo({ word: guess, result: 'red'});
        } else if (currentRound === 3 && guess === word) {
          setGuessThree({ word: guess, result: 'green'});
        } else if (currentRound === 3 && guess !== word) {
          setGuessThree({ word: guess, result: 'red'});
        } else if (currentRound === 4 && guess === word) {
          setGuessFour({ word: guess, result: 'green'});
        } else if (currentRound === 4 && guess !== word) {
          setGuessFour({ word: guess, result: 'red'});
        } else if (currentRound === 5 && guess === word) {
          setGuessFive({ word: guess, result: 'green'});
        } else if (currentRound === 5 && guess !== word) {
          setGuessFive({ word: guess, result: 'red'});
        } 
        setInput('');
        setCurrentRound(currentRound + 1);
      }

    const reset = () => {
        setInput('');
        setGuessOne({ word: '', result: null});
        setGuessTwo({ word: '', result: null});
        setGuessThree({ word: '', result: null});
        setGuessFour({ word: '', result: null});
        setGuessFive({ word: '', result: null});
        setCurrentRound(1);
    }

    return { handleGuess, reset, input, setInput, guess, setGuess, guessOne, setGuessOne, guessTwo, setGuessTwo, guessThree, setGuessThree, guessFour, setGuessFour, guessFive, setGuessFive, currentRound, setCurrentRound };
}
