import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TaskCardDeleteButton } from '../TaskCardDeleteButton';
import { viewTest } from '../../../../jset/viewTest';

describe('TaskCardDeleteButtonコンポーネント', () => {
  it('仮テスト', () => {
    render(<TaskCardDeleteButton />);
    viewTest({ textMatch: 'TaskCardDeleteButton' });
    console.warn('これは仮テストです');
  });
});