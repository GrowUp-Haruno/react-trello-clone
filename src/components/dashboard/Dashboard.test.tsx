import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Dashboard } from './Dashboard';
import { viewTest } from '../../../jset/viewTest';

describe('Dashboardコンポーネント', () => {
  it('仮テスト', () => {
    render(<Dashboard />);
    viewTest({ textMatch: 'Dashboard' });
    console.warn('これは仮テストです');
  });
});