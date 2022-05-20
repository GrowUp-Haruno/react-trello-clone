import { Box, Stack, useColorModeValue } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { TaskAddInput } from './TaskAddInput';
import { TaskCardDeleteButton } from './TaskCardDeleteButton';
import { TaskCardTitle } from './TaskCardTitle';
import { TaskList } from './TaskList';

export const TaskCard: FC = () => {
  const [taskList, setTaskList] = useState<string[]>([]);
  console.log(taskList)
  return (
    <Box h="100%" w="300px">
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
        <TaskAddInput setTaskList={setTaskList} />
        <TaskList taskList={taskList} setTaskList={setTaskList} />
        <TaskCardDeleteButton />
      </Stack>
    </Box>
  );
};
