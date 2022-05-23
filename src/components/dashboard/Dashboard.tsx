import { HStack } from '@chakra-ui/react';
import { AddTaskCard } from '../task/AddTaskCard';
import { TaskCardList } from '../task/TaskCardList';

export const Dashboard = () => {
  return (
    <HStack
      bgImage="url('mountain.jpeg')"
      style={{ height: 'calc(100vh - 40px)', backgroundSize: 'cover' }}
      p={4}
      spacing={6}
    >
      <TaskCardList />
      <AddTaskCard />
    </HStack>
  );
};
