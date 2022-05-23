import { VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { TaskCardType } from '../../models/TaskCardList';
import { Task } from './Task';

export const TaskList: FC<{ taskCard: TaskCardType }> = ({ taskCard }) => {
  return (
    <VStack spacing={2} align="stretch">
      {taskCard.taskList.map((taskText, index) => (
        <Task taskText={taskText} index={index} taskCard={taskCard} key={`${index}-${taskText}`} />
      ))}
    </VStack>
  );
};
