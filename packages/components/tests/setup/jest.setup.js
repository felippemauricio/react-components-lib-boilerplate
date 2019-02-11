import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });


if (typeof window !== 'object') {
  global.window = global;
  global.window.navigator = {};
}
