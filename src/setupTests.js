import '@babel/polyfill';
import 'jest-extended';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

export function configureEnzyme() {
  configure({ adapter: new Adapter() });
}

export { configure as configureJest };