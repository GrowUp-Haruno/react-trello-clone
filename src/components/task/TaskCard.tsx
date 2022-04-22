import { Box, Stack, useColorModeValue } from '@chakra-ui/react';
import { FC } from 'react';
import { TaskAddInput } from './TaskAddInput';
import { TaskCardDeleteButton } from './TaskCardDeleteButton';
import { TaskCardTitle } from './TaskCardTitle';
import { TaskListTaskList } from './TaskListTaskList';

export const TaskCard: FC = ({ children }) => {

  return (
    <Box h="100%" w='215px'>
      <Stack
        spacing={4}
        // maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
      >
        <TaskCardTitle />
        <TaskAddInput />
        <TaskListTaskList />
        <TaskCardDeleteButton />
      </Stack>
    </Box>
  );
};
