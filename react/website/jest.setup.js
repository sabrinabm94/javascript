import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom/extend-expect';

const matchMediaMock = () => ({
  matches: false,
  addListener: () => {},
  removeListener: () => {},
});

window.matchMedia = window.matchMedia || matchMediaMock;
