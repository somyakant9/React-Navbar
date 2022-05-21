
import './App.css';
import { Logo } from './components/Logo';
import { Link } from './components/Links';
import { Button } from './components/Buttons';
import styles from './components/Links.css';

function App() {
  return (
    <div className="navbar">

    <Logo />
    <Link className ={styles.link} />
    <Button  />

     
    </div>
  );
}

export default App;
