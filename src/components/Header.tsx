import {
  Box,
  BoxProps,
} from '@chakra-ui/react';
import Link from 'next/link';

interface Props extends BoxProps {}

export const Header: React.FC<Props> = (props: Props) => {
  return (
    <Box p="5" {...props}>
      <Link href="/">
        <a>Main Page</a>
      </Link>
    </Box>
  );
};
