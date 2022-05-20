import { Button, HStack, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useTask } from './hooks/useTask';

const inputMaxLength = 20;

export const Task: FC<{
    taskText: string;
    setTaskList: React.Dispatch<React.SetStateAction<string[]>>;
    index: number;
}> = ({ taskText, setTaskList, index }) => {
    const { state, handle } = useTask(setTaskList, index);

    return (
        <HStack h="3rem" pr={!state.isEdit ? 3 : 0}>
            {!state.isEdit ? (
                <>
                    <Text onClick={handle.changeEdit} flex="1" px={4}>
                        {taskText}
                    </Text>
                    <Button w="3rem" h="1.75rem" size="sm" onClick={handle.Delete}>
                        削除
                    </Button>
                </>
            ) : (
                <InputGroup size="md" width="100%" as="form" onSubmit={handle.Submit}>
                    <Input
                        value={taskText}
                        type="text"
                        maxLength={inputMaxLength}
                        onChange={handle.Change}
                        onBlur={handle.Blur}
                        width="100%"
                        autoFocus
                    />
                    <InputRightElement width="4.5rem">
                        <Button w="3rem" h="1.75rem" size="sm" >
                            更新
                        </Button>
                    </InputRightElement>
                </InputGroup>
            )}
        </HStack>
    );
};
