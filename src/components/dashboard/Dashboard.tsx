import { Box } from '@chakra-ui/react';
import { AddTaskCard } from '../task/AddTaskCard';
import { TaskCard } from '../task/TaskCard';

export const Dashboard = () => {
  return (
    <Box
      bgImage="url('mountain.jpeg')"
      style={{ height: 'calc(100vh - 40px)', backgroundSize: 'cover' }}
    >
      Dashboard
      <TaskCard></TaskCard>
      <AddTaskCard></AddTaskCard>
    </Box>
  );
};
