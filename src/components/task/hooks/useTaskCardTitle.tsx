import { useEffect, useState } from 'react';
import { putTaskCard } from '../../../db/localDB';
import { TaskCardType } from '../../../models/TaskCardList';

export const useTaskCardTitle: (taskCard: TaskCardType) => {
  states: {
    isEdit: boolean;
    cardTitleValue: string;
  };
  handlers: {
    handleClick: () => void;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    handleBlur: () => void;
    handleSubmit: React.FormEventHandler<HTMLFormElement>;
  };
} = (taskCard) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [cardTitleValue, setCardTitleValue] = useState<string>('');

  useEffect(() => {
    setCardTitleValue(taskCard.taskTitle);
  }, [taskCard.taskTitle]);

  const handleClick = () => {
    setIsEdit(true);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setCardTitleValue(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setIsEdit(false);
  };

  // フォーカスが外れたタイミングでDBを処理する
  const handleBlur = () => {
    putTaskCard({ ...taskCard, taskTitle: cardTitleValue });
    setIsEdit(false);
  };

  const states = { isEdit, cardTitleValue };
  const handlers = { handleClick, handleChange, handleBlur, handleSubmit };
  return { states, handlers };
};
