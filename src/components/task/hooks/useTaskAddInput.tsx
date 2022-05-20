import { useRef, useState } from 'react';

export const useTaskAddInput: (setTaskList: React.Dispatch<React.SetStateAction<string[]>>) => {
  states: {
    taskAddValue: string;
  };
  refs: {
    inputRef: React.RefObject<HTMLInputElement>;
  };
  handlers: {
    handleClick: () => void;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    handleSubmit: React.FormEventHandler<HTMLFormElement>;
    handleFocus: () => void;
  };
} = (setTaskList) => {
  const [taskAddValue, setTaskAddValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setTaskAddValue(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (taskAddValue === '') return;
    setTaskList((prev) => [...prev, taskAddValue]);
    setTaskAddValue('');
  };

  const handleClick = () => {
    if (taskAddValue === '') return;
    setTaskList((prev) => [...prev, taskAddValue]);
    setTaskAddValue('');
    if (inputRef.current) inputRef.current.focus();
  };

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const states = { taskAddValue };
  const refs = { inputRef };
  const handlers = { handleClick, handleChange, handleSubmit, handleFocus };
  return { states, refs, handlers };
};
