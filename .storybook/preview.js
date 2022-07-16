import { ChakraProvider } from '@chakra-ui/react';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
const withThemeProvider=(Story,context)=>{
  return (
    <ChakraProvider>
      <Story {...context} />
    </ChakraProvider>
  )
}

export const decorators = [withThemeProvider];
