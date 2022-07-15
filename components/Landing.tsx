import { Box, Flex } from '@chakra-ui/react';
import Header from './Header';
import Sidebar from './Sidebar';
import Graph from './Graph';
import SalesTable from './SalesTable';

type Props = {};

function Landing({}: Props) {
  return (
    <Box>
      <Header />

      <Flex justifyContent={'space-between'} dir='row' h='100vh' mt='20' mx='8'>
        <Box w='25%'>
          <Sidebar />
        </Box>

        <Box w='75%'>
          <Graph />
          <SalesTable />
        </Box>
      </Flex>
    </Box>
  );
}

export default Landing;
