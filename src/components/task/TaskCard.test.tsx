import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TaskCard } from './TaskCard';
import { viewTest } from '../../../jset/viewTest';

describe('TaskCardコンポーネント', () => {
  it('仮テスト', () => {
    render(<TaskCard />);
    viewTest({ textMatch: 'TaskCard' });
  });
});