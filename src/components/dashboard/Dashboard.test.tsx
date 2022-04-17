import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { viewTest } from '../../../jset/viewTest';
import { Dashboard } from './Dashboard';

describe('Dashboardコンポーネント', () => {
  it('仮テスト', () => {
    render(<Dashboard />);
    viewTest({ textMatch: 'AddTaskCard' });
  });
});