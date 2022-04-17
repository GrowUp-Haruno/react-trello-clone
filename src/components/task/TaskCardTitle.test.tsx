import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TaskCardTitle } from './TaskCardTitle';
import { viewTest } from '../../../jset/viewTest';

describe('TaskCardTitleコンポーネント', () => {
  it('仮テスト', () => {
    render(<TaskCardTitle />);
    viewTest({ textMatch: 'TaskCardTitle' });
  });
});