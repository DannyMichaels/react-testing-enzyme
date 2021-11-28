import { useCallback } from 'react';
import { resetApp } from './../actions/index';
import { useDispatch, useSelector } from 'react-redux';

export default function NewWordButton() {
  const isNewWordShowing = useSelector(
    ({ isNewWordShowing }) => isNewWordShowing
  );

  const dispatch = useDispatch();

  const handleReset = useCallback(() => {
    dispatch(resetApp());
  }, [dispatch]);

  if (!isNewWordShowing) {
    return <div data-test="component-new-word-button" />;
  }

  return (
    <div data-test="component-new-word-button">
      <button
        onClick={handleReset}
        data-test="new-word-button"
        className="my-4 shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
        New Word
      </button>
    </div>
  );
}
