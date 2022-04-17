import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TaskListTaskList } from './TaskListTaskList';
import { viewTest } from '../../../jset/viewTest';

describe('TaskListTaskListコンポーネント', () => {
  it('仮テスト', () => {
    render(<TaskListTaskList />);
    viewTest({ textMatch: 'TaskListTaskList' });
    console.warn('これは仮テストです');
  });
});