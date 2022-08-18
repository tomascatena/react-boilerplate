import { act, render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

describe('App tests', () => {
  it('should contains the heading 1', () => {
    render(<App />);

    act(() => {
      const heading = screen.getByText(/React Typescript Boilerplate/i);
      expect(heading).toBeInTheDocument();
    });
  });
});
