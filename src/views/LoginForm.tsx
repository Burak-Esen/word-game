import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, IconButton, Menu, MenuButton, MenuList, Text } from '@chakra-ui/react';
import { Field, Formik } from 'formik';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@src/store/store';
import { login, setIsError } from '@src/store/user';
import { InputField } from '../components/Forms/fields/inputField';

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state);
  useEffect(() => {
    if (user.isError) {
      setTimeout(() => dispatch(setIsError(false)), 3000);
    }
  }, [user.isError]);
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon />}
        variant='outline'
      />
      <MenuList>
        {user.isError && <Text pl='1' color={'pink.400'}>{user.errorMessage}</Text>}
        <Box rounded="md" maxW={'xs'}>
          <Formik
            onSubmit={ (data) => dispatch(login(data))}
            initialValues={{
              username: '',
              password: ''
            }}
          >
            {({ values, handleSubmit }) => <form onSubmit={handleSubmit}>
              <Flex flexDirection={'column'} gap='1'>
                <Field name='username' placeholder='username' component={InputField} />
                <Field name='password' placeholder='* * * * * *' type='password' component={InputField} />
                <Button bg='purple.200' px='5' type='submit'>Log In</Button>
              </Flex>
            </form>}
          </Formik>
        </Box>
      </MenuList>
    </Menu>
  );
};
