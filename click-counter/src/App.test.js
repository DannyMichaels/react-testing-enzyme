import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<App/>', () => {
  it('renders without error', () => {
    const wrapper = shallow(<App />);
    const appComponent = wrapper.find('[data-test="component-app"]');
    expect(appComponent.length).toBe(1);
  });

  it('renders increment button', () => {});

  it('renders counter display', () => {});

  // test is the same as it.
  test('counter display starts at 0', () => {});

  test('clicking button increments counter display', () => {});
});
