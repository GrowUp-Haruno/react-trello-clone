import { useState } from 'react';
import { putTaskCard } from '../../../db/localDB';
import { TaskCardType } from '../../../models/TaskCardList';

export const useTask = (taskText: string, index: number, taskCard: TaskCardType) => {
  const [inputValue, setInputValue] = useState(taskText);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const changeEdit = () => {
    setIsEdit(true);
  };

  const Change: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  const Blur: React.FocusEventHandler<HTMLInputElement> = (event) => {
    setIsEdit(false);
    if (inputValue !== '') taskCard.taskList.splice(index, 1, inputValue);
    if (inputValue === '') taskCard.taskList.splice(index, 1).filter(Boolean);
    putTaskCard({ ...taskCard, taskList: taskCard.taskList });
  };

  const Submit: React.FormEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    setIsEdit(false);
    if (inputValue !== '') taskCard.taskList.splice(index, 1, inputValue);
    if (inputValue === '') taskCard.taskList.splice(index, 1).filter(Boolean);
    putTaskCard({ ...taskCard, taskList: taskCard.taskList });
  };

  const Delete = () => {
    taskCard.taskList.splice(index, 1).filter(Boolean);
    putTaskCard({ ...taskCard, taskList: taskCard.taskList });
  };

  const state = { isEdit, inputValue };
  const handle = { changeEdit, Change, Blur, Submit, Delete };

  return { state, handle };
};
