import { useState, useEffect } from 'react';

export default function useWord() {
    const [word, setWord] = useState('');
    useEffect(() => {
      fetch('https://random-word-api.herokuapp.com/word')
        .then(res => res.json())
        .then(data => setWord(data[0]))
        .catch((error) => {
          console.error('Error fetching word:', error);
        });
    }, []);
    return { word };
}
