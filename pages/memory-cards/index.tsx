import { Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { CardGame } from '@src/components/cards/CardGame';
import { NextHead } from '@src/components/Head';
import { Header } from '@src/views/Header';

const index: NextPage = () => {
  return (
    <Flex height="100vh" flexDirection={'column'} backgroundColor={'gray.100'}>
      <NextHead />
      <Header />
      <main >
        <Flex height="80vh" alignItems="center" justifyContent="center">
          <CardGame />
        </Flex>
      </main>
    </Flex>
  );
};

export default index;
