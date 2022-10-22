import { describe, it } from 'vitest';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import App from '../../App';

describe('Button Functions', () => {
  beforeEach(() => {
    render(
      <RecoilRoot>
        <App />
      </RecoilRoot>
    );
  });
  it('Must open the dialog when click', () => {
    //Open Dialog
    const button = screen.getByRole('button');
    fireEvent.click(button);

    // Check if it's open
    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
  });
});
