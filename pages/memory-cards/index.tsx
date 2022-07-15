import type { NextPage } from 'next';
import { Flex } from '@chakra-ui/react';

import { NextHead } from '@src/components/Head';
import { Header } from '@src/components/Header';
import { CardGame } from '@src/components/cards/CardGame';

const index: NextPage = () => {
  return (
    <Flex height="100vh" flexDirection={'column'} backgroundColor={'gray.100'}>
      <NextHead />
      <Header />
      <main >
        <Flex height="90vh" alignItems="center" justifyContent="center">
          <CardGame />
        </Flex>
      </main>
    </Flex>
  );
};

export default index;
