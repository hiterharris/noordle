import React from 'react';
import './Keyboard.css';
import keys from '../assets/keys';
import { getKeyClassNames } from '../helpers';

const Keyboard = props => {
    const { handleInput } = props;
    const layout = () => {
        return (
            keys.map(row => {
                return (
                    <div className="row">
                        {row.map(key => <span className={`key ${getKeyClassNames(key)}`} onClick={() => handleInput(key)}>{key}</span>)}
                    </div>
                );
            })
        )
    }

    return (
        <div className="keyboard">
            {layout()}
        </div>
    );
}

export default Keyboard;
