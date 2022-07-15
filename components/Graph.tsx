import { Box, Text } from '@chakra-ui/react';

type Props = {};

function Graph({}: Props) {
  return (
    <Box h='25vh' bg='white' color='black' mb='24' boxShadow={'md'}>
      <Text pt='6' pl='6' fontWeight={400}>
        Retail Sales
      </Text>
    </Box>
  );
}

export default Graph;
