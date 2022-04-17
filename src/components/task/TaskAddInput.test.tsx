import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TaskAddInput } from './TaskAddInput';
import { viewTest } from '../../../jset/viewTest';

describe('TaskAddInputコンポーネント', () => {
  it('仮テスト', () => {
    render(<TaskAddInput />);
    viewTest({ textMatch: 'TaskAddInput' });
  });
});