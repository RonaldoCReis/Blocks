import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RecoilRoot } from 'recoil';
import { describe, it, expect, vi, Vitest } from 'vitest';
import App from '../../App';
import { useBlocksState } from '../../state/hooks/useBlocksState';

describe('Dialog', () => {
  beforeEach(() => {
    render(
      <RecoilRoot>
        <App />
      </RecoilRoot>
    );
  });

  it('Should open when button is clicked', () => {
    //Open Dialog
    const button = screen.getByRole('button');
    fireEvent.click(button);

    // Check if it's open
    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
  });

  it('Must close when click on the backdrop', () => {
    //Open Dialog
    const button = screen.getByRole('button');
    fireEvent.click(button);

    //Get dialog and dialog interior
    const dialog = screen.getByRole('dialog');
    const dialogInner = screen.getByRole('dialog-inner');

    // Expect to be open
    expect(dialog).toBeInTheDocument();

    // When click in the interior card, it should still be open
    fireEvent.click(dialogInner);
    expect(dialog).toBeInTheDocument();

    // When click on the outer part, it should close
    fireEvent.click(dialog);
    expect(dialog).not.toBeInTheDocument();
  });

  it('Should create new Block when dialog is closed', () => {
    //Get number of blocks

    let blocks = screen.getAllByRole('notepad');
    const initialLenght = blocks.length;

    //Open Dialog
    const button = screen.getByRole('button');
    fireEvent.click(button);

    const title = screen.getByRole('title-input');
    const text = screen.getByRole('text-input');

    fireEvent.change(title, { target: { value: 'teste' } });
    fireEvent.change(text, { target: { value: 'teste' } });

    // Close Dialog
    const dialog = screen.getByRole('dialog');
    fireEvent.click(dialog);

    blocks = screen.getAllByRole('notepad');

    expect(blocks.length).toBe(initialLenght + 1);
  });

  it('Should not create new Block when dialog is closed if both inputs are empty', () => {
    //Get number of blocks
    let blocks = screen.getAllByRole('notepad');
    const initialLenght = blocks.length;

    //Open Dialog
    const button = screen.getByRole('button');
    fireEvent.click(button);

    // Close Dialog
    const dialog = screen.getByRole('dialog');
    fireEvent.click(dialog);

    blocks = screen.getAllByRole('notepad');

    expect(blocks.length).toBe(initialLenght);
  });
});
