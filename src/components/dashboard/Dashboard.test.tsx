import { render,screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { viewTest } from '../../../jset/viewTest';
import { Dashboard } from './Dashboard';

describe('Dashboardコンポーネント', () => {
  it('仮テスト', () => {
    render(<Dashboard />);
    // TaskTitle
    viewTest({ textMatch: 'Today' });

    // TaskAddInput
    const TaskAddInput = screen.getByPlaceholderText('add a task');
    expect(TaskAddInput).toHaveValue('');

    // AddTaskCard
    viewTest({ textMatch: 'AddTaskCard' });
  });
});
