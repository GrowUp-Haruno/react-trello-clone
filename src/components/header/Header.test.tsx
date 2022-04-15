import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './Header';
import { viewTest } from '../../../jset/viewTest';

describe('Headerコンポーネント', () => {
  it('仮テスト', () => {
    render(<Header />);
    viewTest({ roleMaatch: 'heading', textMatch: 'Trello Clone' });
  });
});
