import { Input, InputProps } from '@chakra-ui/react';
import { FieldProps } from 'formik';

export const InputField = ({ field, form: _, ...props }: FieldProps & InputProps) => {
  return (
    <Input {...field} {...props} />
  );
};
