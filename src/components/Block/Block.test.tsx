import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { beforeEach, describe, expect, it } from 'vitest';
import App from '../../App';
import '@testing-library/jest-dom';

describe('Block functions', () => {
  beforeEach(() => {
    render(
      <RecoilRoot>
        <App />
      </RecoilRoot>
    );
  });
  it('Must open the dialog to edit when click', () => {
    const card = screen.getAllByRole('notepad')[0];
    expect(card).toBeInTheDocument();
    const cardTitle = card.querySelector('.title');
    fireEvent.click(card);
    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    const title = dialog.querySelector('input');
    expect(title?.value).toBe(cardTitle?.innerHTML);
  });
});
