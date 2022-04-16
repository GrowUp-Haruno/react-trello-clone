import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from './App';
import { viewTest } from '../jset/viewTest';

describe('Appコンポーネント', () => {
  it('各種コンポーネントの表示', () => {
    render(<App />);
    viewTest({ roleMaatch: 'heading', textMatch: 'Trello Clone' });
    viewTest({ textMatch: 'Dashboard' });
    viewTest({ textMatch: 'TaskCard' });
    viewTest({ textMatch: 'AddTaskCard' });
  });
});
