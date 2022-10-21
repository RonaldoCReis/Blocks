import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RecoilRoot } from 'recoil';
import { describe, it, expect, vi, Vitest } from 'vitest';
import App from '../../App';

describe('Modal', () => {
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

  it('Must close when click on the backdrop', () => {
    render(
      <RecoilRoot>
        <App />
      </RecoilRoot>
    );
    //Open Dialog
    const button = screen.getByRole('button');
    fireEvent.click(button);

    //Get Modal and Modal interior
    const modal = screen.getByRole('dialog');
    const modalInner = screen.getByRole('dialog-inner');

    // Expect to be open
    expect(modal).toBeInTheDocument();

    // When click in the interior card, it should still be open
    fireEvent.click(modalInner);
    expect(modal).toBeInTheDocument();

    // When click on the outer part, it should close
    fireEvent.click(modal);
    expect(modal).not.toBeInTheDocument();
  });
});
