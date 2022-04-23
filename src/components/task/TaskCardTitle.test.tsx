import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TaskCardTitle } from './TaskCardTitle';
import { viewTest } from '../../../jset/viewTest';
import userEvent from '@testing-library/user-event';

describe('TaskCardTitleコンポーネント', () => {
  it('初期状態', () => {
    render(<TaskCardTitle />);
    viewTest({ roleMaatch: 'heading', textMatch: 'Today' });
  });

  it('動作確認', async () => {
    render(
      <div data-testid="outer">
        <TaskCardTitle />
      </div>
    );

    // blur確認用
    const outer = screen.getByTestId('outer');

    const findHeading = () => {
      return screen.findByRole('heading');
    };

    const findInput = () => {
      return screen.findByPlaceholderText('Today');
    };

    // タイトルをクリックするとinputに変化
    let heading = await findHeading();
    userEvent.click(await findHeading());

    // inputに変化したら自動的にフォーカスすること
    let input = await findInput();
    expect(input).toHaveFocus();
    expect(input).toHaveValue('');

    // 最大文字数は10文字
    userEvent.type(input, '12345678901');
    expect(input).toHaveValue('1234567890');

    // inputでEnterを押下すと表示モードに戻る
    // 表示内容を更新する
    userEvent.type(input, '{enter}');
    heading = await findHeading();
    expect(heading).toHaveTextContent('1234567890');

    // 再び、タイトルをクリックするとinputに変化
    userEvent.click(heading);
    input = await findInput();
    expect(input).toHaveValue('1234567890');

    // 5文字削除できる
    userEvent.type(input, '{backspace}{backspace}{backspace}{backspace}{backspace}');
    expect(input).toHaveValue('12345');

    // inputのフォーカスが外れたら表示モードに戻る
    // 表示内容を更新する
    userEvent.click(outer);
    heading = await findHeading();
    expect(input).toHaveValue('12345');
    expect(await findHeading()).toHaveTextContent('12345');
  });
});
