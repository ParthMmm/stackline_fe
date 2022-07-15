import type { NextPage } from 'next';
import { useEffect } from 'react';
import Head from 'next/head';
import { setData } from '@/app/dataSlice';
import { useAppDispatch } from '@/app/hooks';
import Landing from '@/components/Landing';
import { Box } from '@chakra-ui/react';
import { Item } from 'types';

const Home: NextPage = () => {
  const dispatch = useAppDispatch();

  //Fetches data from the NextJS server and dispatches it to the redux store
  useEffect(() => {
    fetch(`/api/stacklineData`)
      .then((res) => res.json())
      .then((data: [Item]) => dispatch(setData(data)))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <Head>
        <title>Stackline</title>
        <meta
          name='Stackline Assessment'
          content='Stackline Assessment by Parth Mangrola'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Box w='100%'>
        <Landing />
      </Box>
    </div>
  );
};

export default Home;
