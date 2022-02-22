import { ListItemText } from "@mui/material";

import './Definition.css';


const Definition = ({ definition, synonyms }) => {
  return (
    <div className="definition-container">
      <ListItemText>{definition}</ListItemText>
      {synonyms
      ? <div className="synonyms">
        <ListItemText className="synonyms">Synonyms: {synonyms.join(', ')}</ListItemText>
      </div>
      : null}
    </div>
  )
}

export default Definition;