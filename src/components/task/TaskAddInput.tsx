import { Box, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { FC } from 'react';
import { useTaskAddInput } from './hooks/useTaskAddInput';

const inputPlaceholder = 'add a task';
const inputMaxLength = 20;

export const TaskAddInput: FC<{
  setTaskList: React.Dispatch<React.SetStateAction<string[]>>;
}> = ({ setTaskList }) => {
  const {
    states: { taskAddValue },
    refs: { inputRef },
    handlers: { handleChange, handleClick, handleSubmit, handleFocus },
  } = useTaskAddInput(setTaskList);

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            placeholder={inputPlaceholder}
            value={taskAddValue}
            type="text"
            maxLength={inputMaxLength}
            onChange={handleChange}
            width="100%"
            ref={inputRef}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick} onFocus={handleFocus}>
              追加
            </Button>
          </InputRightElement>
        </InputGroup>
      </form>
    </Box>
  );
};
