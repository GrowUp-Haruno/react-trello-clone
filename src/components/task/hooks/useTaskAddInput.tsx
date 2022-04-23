import { useState } from 'react';

export const useTaskAddInput: (setTaskList: React.Dispatch<React.SetStateAction<string[]>>) => {
  states: {
    taskAddValue: string;
  };
  handlers: {
    handleClick: () => void;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    handleSubmit: React.FormEventHandler<HTMLFormElement>;
  };
} = (setTaskList) => {
  const [taskAddValue, setTaskAddValue] = useState('');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setTaskAddValue(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setTaskList((prev) => [...prev, taskAddValue]);
    setTaskAddValue('');
  };

  const handleClick = () => {
    setTaskList((prev) => [...prev, taskAddValue]);
    setTaskAddValue('');
  };

  const states = { taskAddValue };
  const handlers = { handleClick, handleChange, handleSubmit };
  return { states, handlers };
};
