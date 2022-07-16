import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';

interface Props extends ButtonProps {
  children: string;
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({
  children,
  ...props
}: Props) => {
  return (
    <ChakraButton {...props}>{children}</ChakraButton>
  );
};
