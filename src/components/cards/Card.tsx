import {
  Box,
  Center,
  CenterProps,
  Heading,
  Stack
} from '@chakra-ui/react';

interface Props extends CenterProps {
  cardText: string,
}

export const Card: React.FC<Props> = ({
  cardText = 'Inner card text',
  bg = 'white',
  as = undefined,
  onClick = undefined
}: Props) => {
  return (
    <Center as={as} onClick={onClick} w="lg" bg={bg}>
      <Box
        role={'group'}
        p={6}
        w={'full'}
        boxShadow={'xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Stack p={10} align={'center'}>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {cardText}
          </Heading>
          {/* <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              $57
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              $199
            </Text>
          </Stack> */}
        </Stack>
      </Box>
    </Center>
  );
};
