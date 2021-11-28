import './App.css';
import { useEffect } from 'react';
import Congrats from './components/Congrats';
import GuessedWords from './components/GuessedWords';
import Input from './components/Input';
import { getSecretWord } from './actions';
import { useSelector } from 'react-redux';

function App() {
  const { success, secretWord, guessedWords } = useSelector(
    ({ success, secretWord, guessedWords }) => ({
      success,
      secretWord,
      guessedWords,
    })
  );

  useEffect(() => {
    getSecretWord();
  }, []);

  return (
    <div
      data-test="component-app"
      className="container mx-auto py-4 xs:px-4 max-w-screen-sm">
      <h1 className="text-blue-400 font-extrabold text-4xl my-2">Jotto</h1>
      <Congrats success={success} />
      <Input secretWord={secretWord} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
