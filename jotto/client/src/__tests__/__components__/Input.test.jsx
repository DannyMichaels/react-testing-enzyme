import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../utils/testUtils';
import Input from '../../components/Input';

/* mock entire module for destructuring useState on import
const mockSetCurrentGuess = jest.fn(); // setCurrentGuess mock

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: (initialState) => [initialState, mockSetCurrentGuess], // mock useState
})); */

/**
 * @method setup
 * @desc Factory function to create a ShallowWrapper for the Input component
 * @param {object} props - component props specific for this setup
 * @returns {ShallowWrapper}
 */
const setup = (secretWord = 'party') => {
  return shallow(<Input secretWord={secretWord} />);
};

describe('<Input />', () => {
  it('renders without error', () => {
    const wrapper = setup();

    const component = findByTestAttr(wrapper, 'component-input');
    expect(component.length).toBe(1);
  });

  it('does not throw warning with expected prop types', () => {
    checkProps(Input, { secretWord: 'Hello' });
  });

  describe('state controlled input field', () => {
    let mockSetCurrentGuess = jest.fn(); // mock setCurrentGuess
    let originalUseState; // maintain original useState
    let wrapper;

    beforeEach(() => {
      // the order of things matters, mockSetState comes first, then the wrapper

      mockSetCurrentGuess.mockClear(); // clear the mock before each test

      originalUseState = React.useState;

      // it won't run the actual useState that comes from react, it will be replaced with this function and it returns an array of empty string and  the mock setter
      React.useState = () => ['train', mockSetCurrentGuess];

      wrapper = setup();
    });

    afterEach(() => {
      // restore the original useState after each test.
      React.useState = originalUseState;
    });

    test('state updates with value of input field upon change', () => {
      const inputField = findByTestAttr(wrapper, 'input-field');

      // apply that event to change simulation on the inputField
      const mockEvent = { target: { value: 'train' } };
      inputField.simulate('change', mockEvent);

      expect(mockSetCurrentGuess).toHaveBeenCalledWith('train'); // expect the setState to have been ran with the event.target.value
    });

    test('field is cleared (sets currentGuess to an empty string) upon submit button click', () => {
      const submitBtn = findByTestAttr(wrapper, 'submit-button');

      const mockEvent = {
        preventDefault: jest.fn(() => {}),
      };

      submitBtn.simulate('click', mockEvent);
      expect(mockSetCurrentGuess).toHaveBeenCalledWith(''); // expect the setState to have been ran after the click and set to empty string
    });
  });
});
