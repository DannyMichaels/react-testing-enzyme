import { getLetterMatchCount } from '../../../utils';

describe('getLetterMatchCount', () => {
  const secretWord = 'party';

  it('returns the correct count when there are no matching letters', () => {
    const letterMatchCount = getLetterMatchCount('bones', secretWord);
    expect(letterMatchCount).toBe(0);
  });

  it('returns the correct count when there are 3 matching letters', () => {
    const letterMatchCount = getLetterMatchCount('train', secretWord); // 3 matching letters in train when compared to party (rta)
    expect(letterMatchCount).toBe(3);
  });

  it('returns the correct count when there are duplicate letters in the guess', () => {
    const letterMatchCount = getLetterMatchCount('parka', secretWord); // 'a' appears twice but we still want it to return 3 for (par) instead of 4 for (para)
    expect(letterMatchCount).toBe(3);
  });
});
