import {  VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { Task } from './Task';

export const TaskList: FC<{
  taskList: string[];
  setTaskList: React.Dispatch<React.SetStateAction<string[]>>;
}> = ({ taskList, setTaskList }) => {
  return (
    <VStack spacing={2} align="stretch">
      {taskList.map((taskText, index) => (
        <Task taskText={taskText} setTaskList={setTaskList} index={index} key={index} />
      ))}
    </VStack>
  );
};
