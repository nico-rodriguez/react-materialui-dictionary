import './Header.css';

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title ? title : 'Word Hunt'}</h1>
    </header>
  )
}

export default Header;
