import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TaskCard } from './TaskCard';
import userEvent from '@testing-library/user-event';

describe('TaskAddInputコンポーネント', () => {
  it('初期状態', () => {
    render(<TaskCard />);

    // プレースホルダーに"add a task"を表示
    const input = screen.getByPlaceholderText('add a task');
    expect(input).toHaveValue('');
  });

  it('動作確認', () => {
    render(
      <div data-testid="outer">
        <TaskCard />
      </div>
    );

    // DOM取得
    const outer = screen.getByTestId('outer');
    const input = screen.getByPlaceholderText('add a task');
    const button = screen.getByText('Add');

    // inputをクリックするとフォーカスされる
    userEvent.click(input);
    expect(input).toHaveFocus();

    // 最大文字数は10文字(11文字以上入れても最初の10文字だけが入る)
    // input以外をクリックすると、フォーカスが外れる
    userEvent.type(input, '123456789012345678901');
    userEvent.click(outer);
    expect(input).toHaveValue('12345678901234567890');
    expect(input).not.toHaveFocus();

    // Enterキーを押下すると、フォーカスが外れてプレイスホルダが表示される
    userEvent.type(input, '{enter}');
    expect(input).toHaveValue('');

    // Addボタンをクリックすると、フォーカスが外れてプレイスホルダが表示される
    userEvent.type(input, '12345');
    userEvent.click(button);
    expect(input).toHaveValue('');
  });
});

// 入力ステート(管理場所はTaskCardコンポーネント)で入力内容を管理
// Enterキーを押下 or フォーカスが外れると
// タスク一覧ステート(管理場所はTaskCardコンポーネント)に追加する
// 入力ステートを空にする
