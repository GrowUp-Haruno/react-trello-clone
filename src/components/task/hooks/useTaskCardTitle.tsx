import { useState } from 'react';

export const useTaskCardTitle: () => {
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
} = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [cardTitleValue, setCardTitleValue] = useState<string>('');

  const handleClick = () => {
    setIsEdit(true);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setCardTitleValue(event.target.value);
  };

  const handleBlur = () => {
    setIsEdit(false);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setIsEdit(false);
  };

  const states = { isEdit, cardTitleValue };
  const handlers = { handleClick, handleChange, handleBlur, handleSubmit };
  return { states, handlers };
};
