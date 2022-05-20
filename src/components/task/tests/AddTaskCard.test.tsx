import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AddTaskCard } from '../AddTaskCard';
import { viewTest } from '../../../../jset/viewTest';

describe('AddTaskCardコンポーネント', () => {
  it('仮テスト', () => {
    render(<AddTaskCard />);
    viewTest({ textMatch: 'AddTaskCard' });
  });
});
