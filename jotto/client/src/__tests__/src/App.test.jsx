import { shallow } from 'enzyme';
import App from '../../App';
import { findByTestAttr } from '../../test-utils';

/**
 * @method setup
 * @desc Setup function for App component
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />);

describe('<App />', () => {
  it('renders without error', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent).toHaveLength(1);
  });
});
