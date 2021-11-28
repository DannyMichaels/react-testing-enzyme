import { useCallback, useMemo } from 'react';
import { resetApp } from './../actions/index';
import { useDispatch, useSelector } from 'react-redux';

export default function NewWordButton() {
  const { success, gaveUp } = useSelector((state) => state);

  const isNewWordButtonShowing = useMemo(
    () => success || gaveUp,
    [success, gaveUp]
  );

  const dispatch = useDispatch();

  const handleReset = useCallback(() => {
    dispatch(resetApp());
  }, [dispatch]);

  if (!isNewWordButtonShowing) {
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
