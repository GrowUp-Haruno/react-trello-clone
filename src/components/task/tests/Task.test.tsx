import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TaskCard } from '../TaskCard';
import userEvent from '@testing-library/user-event';

// import { viewTest } from '../../../jset/viewTest';

describe('Taskコンポーネント', () => {
  it('動作確認', async () => {
    render(
      <div data-testid="outer">
        <TaskCard />
      </div>
    );

    // DOM取得
    // const outer = screen.getByTestId('outer');
    const inputTask = screen.getByPlaceholderText('add a task');
    const addButton = screen.getByText('追加');
    const findDeleteButton = () => screen.findByText('削除');
    const findText = (text: string) => screen.findByText(text);

    // タスクを記入後Enterキーを押下すると、タスクが表示される
    userEvent.type(inputTask, '123456789012345678901{enter}');
    expect(inputTask).toHaveValue('');
    expect(await findText('12345678901234567890')).toBeDefined();

    // タスクを削除
    userEvent.click(await findDeleteButton());

    // タスクを記入後Addボタンをクリックすると、タスクが表示される
    userEvent.type(inputTask, '12345');
    userEvent.click(addButton);
    expect(await findText('12345')).toBeDefined();
  });
});
