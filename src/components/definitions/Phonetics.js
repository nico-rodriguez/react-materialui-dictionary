import VolumeUpIcon from '@mui/icons-material/VolumeUp';

import './Phonetics.css'


const playAudio = () => {
  // audio must be search here to avoid getting undefined
  const audio = document.querySelector('audio');
  audio.play();
  audio.currentTime = 0;
}

const Phonetics = ({ phonetics }) => {
  if (phonetics) {
    const  {text, audio } = phonetics;
    return (
      <div className='phonetics'>
        <span>{text}</span>
        <VolumeUpIcon onClick={playAudio} />
        <audio src={audio} />
      </div>
    )
  }

  return null;
}

export default Phonetics;