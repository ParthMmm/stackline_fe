import { Box, Flex } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import Image from 'next/image';

type Props = {};

function Header({}: Props) {
  return (
    <Flex as='nav' w='full' backgroundColor='#052849'>
      <Box px='4'>
        <Image
          src='/stackline_logo.svg'
          alt='Stackline logo svg'
          height='75'
          width='75'
        />
      </Box>
    </Flex>
  );
}

export default Header;
