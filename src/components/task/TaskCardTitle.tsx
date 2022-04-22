import { Box, Heading, Input } from '@chakra-ui/react';
import { FC } from 'react';
import { useTaskCardTitle } from './hooks/useTaskCardTitle';

const defaultTitle = 'Today';
const inputMaxLength = 10;

export const TaskCardTitle: FC = () => {
  const {
    states: { isEdit, cardTitleValue },
    handlers: { handleBlur, handleChange, handleClick, handleSubmit },
  } = useTaskCardTitle();

  return (
    <Box >
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
