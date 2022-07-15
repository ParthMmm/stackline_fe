import {
  Flex,
  Box,
  Spinner,
  Heading,
  Tag,
  Divider,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useAppSelector } from '@/app/hooks';

type Props = {};

function Sidebar({}: Props) {
  const { data } = useAppSelector((state) => state.data);

  //If data doesn't exist, show a spinner
  if (!data) {
    return <Spinner />;
  } else {
    return (
      <Flex
        bg='white'
        h='100vh'
        direction={'column'}
        align='center'
        mr={{ base: '2', md: '4', lg: '8' }}
        boxShadow={'md'}
      >
        <>
          {data.map((item) => (
            <Box key={item.id}>
              <Flex mt='4' align='center' justifyContent={'center'}>
                <Image
                  src={item.image}
                  layout='intrinsic'
                  alt='image of blender'
                  width={200}
                  height={200}
                />
              </Flex>
              <Flex direction={'column'} align='center'>
                <Heading
                  as='h1'
                  fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                  color='black'
                  mb='2'
                >
                  {item.title}
                </Heading>
                <Text
                  color={'gray.400'}
                  mx='12'
                  fontSize='sm'
                  textAlign={'center'}
                  mb='4'
                >
                  {item.subtitle}
                </Text>
              </Flex>
              <Divider
                orientation='horizontal'
                borderWidth={'0.1px'}
                borderColor='gray.200'
              />
              <Flex
                my='4'
                flexFlow={'row wrap'}
                alignContent='space-evenly'
                gap={4}
                mx='4'
                justifyContent='flex-start'
              >
                {item.tags.map((tag) => (
                  <Tag
                    key={tag}
                    size={{ base: 'sm', md: 'md', lg: 'lg' }}
                    variant={'outline'}
                    color='gray.600'
                  >
                    {tag}
                  </Tag>
                ))}
              </Flex>
              <Divider
                orientation='horizontal'
                borderWidth={'0.1px'}
                borderColor='gray.200'
              />
            </Box>
          ))}
        </>
      </Flex>
    );
  }
}

export default Sidebar;
