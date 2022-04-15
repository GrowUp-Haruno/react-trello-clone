import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './Header';

describe('Headerコンポーネント', () => {
  it('タイトル「Trello Clone」を表示', () => {
    render(<Header />);
    const testTarget = screen.getByRole('heading');
    expect(testTarget).toHaveTextContent('Trello Clone');
  });
});