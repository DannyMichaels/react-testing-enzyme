import './App.css';
import Congrats from './components/Congrats';
import GuessedWords from './components/GuessedWords';
import Input from './components/Input';

function App() {
  // TODO: get props from shared state
  const success = false;
  const secretWord = 'party';
  const guessedWords = [];

  return (
    <div
      data-test="component-app"
      className="container mx-auto py-4 xs:px-4 max-w-screen-sm">
      <h1 className="text-blue-400 font-extrabold text-4xl my-2">Jotto</h1>
      <Congrats success={success} />
      <Input success={success} secretWord={secretWord} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
