import { Button, Flex, FlexProps } from '@chakra-ui/react';
import Link from 'next/link';

import { useAppSelector } from '@src/store/store';
import { LoggedBadge } from './LoggedBadge';
import { LoginForm } from './LoginForm';

interface Props extends FlexProps {
  hasLoginForm?: boolean;
}

export const Header: React.FC<Props> = ({ hasLoginForm = false, ...props }: Props) => {
  const { user } = useAppSelector((state) => state);
  return (
    <Flex p="5" justify={'space-between'} {...props}>
      <Link href="/">
        <Button color={'green.900'} bg={'green.100'}>Home</Button>
      </Link>
      {hasLoginForm && <LoginForm />}
      {user.isLoggedIn && <LoggedBadge username={user.user.username}/>}
    </Flex>
  );
};
