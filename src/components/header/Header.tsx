import { Center, Heading } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Center as="header" bg={'orange.400'} h={10} >
      <Heading fontSize="2xl" color="orange.100">
        Trello Clone
      </Heading>
    </Center>
  );
};
