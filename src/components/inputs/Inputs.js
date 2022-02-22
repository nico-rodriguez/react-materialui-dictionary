import { TextField } from '@mui/material';
import { useEffect } from 'react';

import { getDefinitions } from '../../services/dictionary.service';

import './Inputs.css';


const Inputs = ({ word, setWord, setDefinition }) => {
  useEffect(() => {
    if (word !== '') {
      getDefinitions(word)
        .then(([ data ]) => {
          setDefinition(data);
        })
        .catch((error) => {
          setDefinition({ error: 'word not found!' });
        })
    } else {
      setDefinition(null);
    }
  }, [word]);

  return (
    <div className='inputs'>
      <TextField
        id='standard-basic'
        label='Search'
        variant='standard'
        value={word}
        onChange={(e) => {
          const inputWord = e.target.value;
          setWord(inputWord);
        }}
      />
    </div>
  );
};

export default Inputs;
