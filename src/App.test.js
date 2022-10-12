import { render, screen } from '@testing-library/react';
import App, {Hello} from './App';
console.log(App,"<>>>APP")
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('hello',() => {
  expect(Hello()).toBe('hello')
})
