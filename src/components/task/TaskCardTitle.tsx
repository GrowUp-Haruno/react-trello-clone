import { Box, Heading, Input } from '@chakra-ui/react';
import { FC } from 'react';
import { TaskCardType } from '../../models/TaskCardList';
import { useTaskCardTitle } from './hooks/useTaskCardTitle';

const defaultTitle = 'Today';
const inputMaxLength = 10;

export const TaskCardTitle: FC<{ taskCard: TaskCardType }> = ({ taskCard }) => {
  const {
    states: { isEdit, cardTitleValue },
    handlers: { handleBlur, handleChange, handleClick, handleSubmit },
  } = useTaskCardTitle(taskCard);

  return (
    <Box>
      {!isEdit ? (
        <Heading as="h3" onClick={handleClick}>
          {cardTitleValue || defaultTitle}
        </Heading>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            placeholder={defaultTitle}
            value={cardTitleValue}
            type="text"
            maxLength={inputMaxLength}
            onChange={handleChange}
            onBlur={handleBlur}
            width="100%"
            autoFocus
          />
        </form>
      )}
    </Box>
  );
};
