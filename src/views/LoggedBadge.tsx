import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

import { useAppDispatch } from '@src/store/store';
import { removeUser } from '@src/store/user';

export const LoggedBadge = ({ username } : { username: string }) => {
  const dispatch = useAppDispatch();
  return (
    <Menu>
      <MenuButton
        as={Button}
        color={'green.900'}
        bg={'green.100'}
      >{username}</MenuButton>
      <MenuList>
        <MenuItem onClick={() => { dispatch(removeUser()); }}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};
