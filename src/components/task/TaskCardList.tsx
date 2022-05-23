import { Box, Stack, useColorModeValue } from '@chakra-ui/react';
import { useLiveQuery } from 'dexie-react-hooks';
import { FC } from 'react';
import { getTaskCardList } from '../../db/localDB';
// import { TaskCardListType } from '../../models/TaskCardList';
import { TaskAddInput } from './TaskAddInput';
import { TaskCardDeleteButton } from './TaskCardDeleteButton';
import { TaskCardTitle } from './TaskCardTitle';
import { TaskList } from './TaskList';

export const TaskCardList: FC = () => {
  const bgColor = useColorModeValue('white', 'gray.700');
  const taskCardList = useLiveQuery(() => getTaskCardList());

  return (
    <>
      {taskCardList &&
        taskCardList.map((taskCard, index) => (
          <Box h="100%" w="300px" key={`${index}-${taskCard.taskTitle}`}>
            <Stack spacing={4} w={'full'} bg={bgColor} rounded={'xl'} boxShadow={'lg'} p={6}>
              <TaskCardTitle taskCard={taskCard} />
              <TaskAddInput taskCard={taskCard} />
              <TaskList taskCard={taskCard} />
              <TaskCardDeleteButton taskCard={taskCard} />
            </Stack>
          </Box>
        ))}
    </>
  );
};
