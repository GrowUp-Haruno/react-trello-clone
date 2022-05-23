import { ChakraProvider, VStack, theme } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Dashboard } from './components/dashboard/Dashboard';

import { Header } from './components/header/Header';
import { initialDatabase } from './db/localDB';

export function App() {
  useEffect(() => {
    initialDatabase();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <VStack spacing={0} align="stretch">
        <Header />
        <Dashboard />
      </VStack>
    </ChakraProvider>
  );
}
