import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FC, useState } from 'react';

const inputMaxLength = 20;

export const Task: FC<{
  taskText: string;
  setTaskList: React.Dispatch<React.SetStateAction<string[]>>;
  index: number;
}> = ({ taskText, setTaskList, index }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleClick = () => {
    setIsEdit(true);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setTaskList((prevList) =>
      prevList.map((prev, prevIndex) => (prevIndex === index ? event.target.value : prev))
    );
  };

  const handleBlur = () => {
    setIsEdit(false);
    setTaskList((prevList) => prevList.filter(Boolean));
  };

  const handleSubmit: React.FormEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    setIsEdit(false);
    setTaskList((prevList) => prevList.filter(Boolean));
  };

  const handleDelete = () => {
    setTaskList((prevList) => prevList.filter((_, prevIndex) => prevIndex !== index));
  };

  return (
    <HStack h="3rem" pr={!isEdit ? 3 : 0}>
      {!isEdit ? (
        <>
          <Text onClick={handleClick} flex="1" px={4}>
            {taskText}
          </Text>
          <Button w="3rem" h="1.75rem" size="sm" onClick={handleDelete}>
            削除
          </Button>
        </>
      ) : (
        <InputGroup size="md" width="100%" as="form" onSubmit={handleSubmit}>
          <Input
            value={taskText}
            type="text"
            maxLength={inputMaxLength}
            onChange={handleChange}
            onBlur={handleBlur}
            width="100%"
            autoFocus
          />
          <InputRightElement width="4.5rem">
            <Button w="3rem" h="1.75rem" size="sm" onClick={handleClick}>
              更新
            </Button>
          </InputRightElement>
        </InputGroup>
      )}
    </HStack>
  );
};
