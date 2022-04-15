import { ChakraProvider, VStack, theme } from '@chakra-ui/react';
import { Dashboard } from './components/dashboard/Dashboard';
import { Header } from './components/header/Header';

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <VStack spacing={0} align='stretch'>
        <Header />
        <Dashboard/>
      </VStack>
    </ChakraProvider>
  );
}
