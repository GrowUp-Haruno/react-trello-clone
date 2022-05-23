import { Button } from '@chakra-ui/react';
import { FC } from 'react';
import { cleareTaskList } from '../../db/localDB';
import { TaskCardType } from '../../models/TaskCardList';

export const TaskCardDeleteButton: FC<{ taskCard: TaskCardType }> = ({ taskCard }) => {
  return (
    <Button
      w="15rem"
      h="1.75rem"
      size="sm"
      onClick={(event) => {
        event.preventDefault();
        cleareTaskList(taskCard);
      }}
    >
      このタスクカードを削除する
    </Button>
  );
};
