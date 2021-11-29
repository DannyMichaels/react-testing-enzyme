import './App.css';
import { useEffect, useCallback } from 'react';
import Congrats from './components/Congrats';
import GuessedWords from './components/GuessedWords';
import Input from './components/Input';
import { getSecretWord, resetApp } from './actions';
import { useSelector, useDispatch } from 'react-redux';
import TotalGuesses from './components/TotalGuesses';
import NewWordButton from './components/NewWordButton';
import SecretWordReveal from './components/SecretWordReveal';
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

  const handleReset = useCallback(() => {
    dispatch(resetApp());
  }, [dispatch]);

  return (
    <div
      data-test="component-app"
      className="container mx-auto py-4 xs:px-4 max-w-screen-sm">
      <h1 className="text-blue-400 font-extrabold text-4xl my-2">Jotto</h1>

      {/* <div>the secret word is {secretWord}</div> */}
      {!error ? (
        <>
          <Congrats success={success} />
          <SecretWordReveal gaveUp={gaveUp} secretWord={secretWord} />
          <NewWordButton
            display={success || gaveUp}
            resetAction={handleReset}
          />
          <Input secretWord={secretWord} />
          <GuessedWords guessedWords={guessedWords} gaveUp={gaveUp} />
          <TotalGuesses totalGuesses={guessedWords.length} />
        </>
      ) : (
        <Error error={error} />
      )}
    </div>
  );
}

export default App;
