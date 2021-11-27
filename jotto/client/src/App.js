import './App.css';
import Congrats from './components/Congrats';
import GuessedWords from './components/GuessedWords';

function App() {
  return (
    <div className="container mx-auto max-w-screen-sm">
      <h1 className="text-blue-400 font-extrabold text-4xl my-2">Jotto</h1>
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]}
      />
    </div>
  );
}

export default App;
