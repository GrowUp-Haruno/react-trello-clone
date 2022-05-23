import { Box, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { FC } from 'react';
import { TaskCardType } from '../../models/TaskCardList';
import { useTaskAddInput } from './hooks/useTaskAddInput';

const inputPlaceholder = 'add a task';
const inputMaxLength = 20;

export const TaskAddInput: FC<{
  taskCard: TaskCardType;
}> = ({ taskCard }) => {
  const { state, ref, handle } = useTaskAddInput(taskCard);

  return (
    <Box>
      <form onSubmit={handle.Submit}>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            placeholder={inputPlaceholder}
            value={state.taskAddValue}
            type="text"
            maxLength={inputMaxLength}
            onChange={handle.Change}
            width="100%"
            ref={ref.inputRef}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handle.Click} onFocus={handle.Focus}>
              追加
            </Button>
          </InputRightElement>
        </InputGroup>
      </form>
    </Box>
  );
};
