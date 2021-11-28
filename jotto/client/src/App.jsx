import './App.css';
import { useEffect } from 'react';
import Congrats from './components/Congrats';
import GuessedWords from './components/GuessedWords';
import Input from './components/Input';
import { getSecretWord } from './actions';
import { useSelector, useDispatch } from 'react-redux';
import TotalGuesses from './components/TotalGuesses';
import NewWordButton from './components/NewWordButton';
import RevealWord from './components/RevealWord';
import Error from './components/Error';

function App() {
  const dispatch = useDispatch();

  const { success, secretWord, guessedWords, gaveUp, error } = useSelector(
    (state) => state
  );

  useEffect(() => {
    dispatch(getSecretWord());

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      data-test="component-app"
      className="container mx-auto py-4 xs:px-4 max-w-screen-sm">
      <h1 className="text-blue-400 font-extrabold text-4xl my-2">Jotto</h1>

      {/* <div>the secret word is {secretWord}</div> */}
      {!error ? (
        <>
          <Congrats success={success} />
          <RevealWord gaveUp={gaveUp} secretWord={secretWord} />
          <NewWordButton />
          <Input secretWord={secretWord} />
          <GuessedWords guessedWords={guessedWords} />
          <TotalGuesses totalGuesses={guessedWords.length} />
        </>
      ) : (
        <Error />
      )}
    </div>
  );
}

export default App;
