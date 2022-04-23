import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Task } from './Task';
import { viewTest } from '../../../jset/viewTest';

describe('Taskコンポーネント', () => {
  it('仮テスト', () => {
    render(<Task />);
    viewTest({ textMatch: 'Task' });
    console.warn('これは仮テストです');
  });
});