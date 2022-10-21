import { describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { RecoilRoot } from 'recoil';

describe('App Tests', () => {
  it('Should open the modal when button is clicked', () => {
    render(
      <RecoilRoot>
        <App />
      </RecoilRoot>
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const modal = screen.getByRole('dialog');
    expect(modal).toBeInTheDocument();
  });
});
