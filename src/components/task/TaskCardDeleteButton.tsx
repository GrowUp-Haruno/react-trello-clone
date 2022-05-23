import { Button } from '@chakra-ui/react';
import { FC } from 'react';
import { TaskCardType } from '../../models/TaskCardList';

export const TaskCardDeleteButton: FC<{ taskCard?: TaskCardType }> = ({ taskCard }) => {
  return (
    <Button w="15rem" h="1.75rem" size="sm">
      このタスクカードを削除する
    </Button>
  );
};
