import { Container } from '@mui/material';
import { useState } from 'react';

import Definitions from './components/definitions/Definitions';
import Header from './components/header/Header';
import Input from './components/input/Input';

import './App.css';


function App() {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState(null);

  return (
    <Container maxWidth='md' className='container'>
      <Header title={word} />
      <Input word={word} setWord={setWord} setDefinition={setDefinition} />
      <Definitions definition={definition} />
    </Container>
  );
}

export default App;
