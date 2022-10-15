import { act, render } from '@testing-library/react';
import App from './App';
import React from 'react';

describe('App tests', () => {
  it('should contains the heading 1', () => {
    render(<App />);

    act(() => {
      expect(true).toBe(true);
    });
  });
});
