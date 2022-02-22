import { List, ListSubheader } from '@mui/material';
import Definition from './Definition';
import './Definitions.css';
import Phonetics from './Phonetics';

const Definitions = ({ definition }) => {
  if (definition && !definition.error) {
    const phonetics = definition.phonetics.find(({ audio }) => audio !== '') ?? definition.phonetics[0];
    const { meanings } = definition;

    return (
      <div className='definitions-container'>
        <Phonetics phonetics={phonetics} />
        <List>
          {meanings.map(({ partOfSpeech, definitions }) => 
            <List key={partOfSpeech}>
              <ListSubheader>{partOfSpeech}</ListSubheader>
              <List>
                {definitions.map(({ definition, synonyms }) =>
                  <Definition definition={definition} synonyms={synonyms} key={definition.substring(0, 20)} />
                )}
              </List>
            </List>
          )}
        </List>
      </div>
    ) 
  } else if (definition && definition.error) {
    return (
       <div className='definitions-container'>
        <span className='subtitle'>{definition.error}</span>
      </div>
    )
  }

  return (
    <div className='definitions-container'>
      <span className='subtitle'>Start typing a word in Search</span>
    </div>
  )
}

export default Definitions;