import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // Aucun test automatique prévu dans l'application...
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
