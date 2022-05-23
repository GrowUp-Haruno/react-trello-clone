import { useRef, useState } from 'react';
import { putTaskCard } from '../../../db/localDB';
import { TaskCardType } from '../../../models/TaskCardList';

export const useTaskAddInput: (taskCard: TaskCardType) => {
  state: {
    taskAddValue: string;
  };
  ref: {
    inputRef: React.RefObject<HTMLInputElement>;
  };
  handle: {
    Click: () => void;
    Change: React.ChangeEventHandler<HTMLInputElement>;
    Submit: React.FormEventHandler<HTMLFormElement>;
    Focus: () => void;
  };
} = (taskCard) => {
  const [taskAddValue, setTaskAddValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const Change: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setTaskAddValue(event.target.value);
  };

  const Submit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (taskAddValue === '') return;
    putTaskCard({ ...taskCard, taskList: [...taskCard.taskList, taskAddValue] });
    setTaskAddValue('');
  };

  const Click = () => {
    if (taskAddValue === '') return;
    putTaskCard({ ...taskCard, taskList: [...taskCard.taskList, taskAddValue] });
    setTaskAddValue('');
    if (inputRef.current) inputRef.current.focus();
  };

  const Focus = () => {
    inputRef.current?.focus();
  };

  const state = { taskAddValue };
  const ref = { inputRef };
  const handle = { Click, Change, Submit, Focus };
  return { state, ref, handle };
};
