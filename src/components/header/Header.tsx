import { Box, Center, Heading } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Center as="header" bg={'orange.400'} py={1}>
      <Heading fontSize='2xl' color="orange.100" >
        Trello Clone
      </Heading>
    </Center>
  );
}
