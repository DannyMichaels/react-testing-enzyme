import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../utils/testUtils';
import Input from '../../components/Input';

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
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  it('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-input');
    expect(component.length).toBe(1);
  });

  it('does not throw warning with expected prop types', () => {
    checkProps(Input, { secretWord: 'Hello' });
  });

  describe('state controlled input field', () => {
    test('state updates with value of input field upon change', () => {
      // it won't run the actual useState that comes from react, it will be replaced with this function and it returns an array of empty string and  the mock setter

      const mockSetCurrentGuess = jest.fn(); // mock setState
      React.useState = jest.fn(() => ['', mockSetCurrentGuess]);

      const wrapper = setup();
      const inputField = findByTestAttr(wrapper, 'input-field');

      // apply that event to change simulation on the inputField
      const mockEvent = { target: { value: 'train' } };
      inputField.simulate('change', mockEvent);

      expect(mockSetCurrentGuess).toHaveBeenCalledWith('train'); // expect the setState to have been ran with the event.target.value
    });
  });
});
