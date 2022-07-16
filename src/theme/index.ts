import {
  DeepPartial,
  extendTheme, theme as chakraTheme, ThemeConfig
} from '@chakra-ui/react';

import { colors } from './colors';

const config: DeepPartial<ThemeConfig> = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: colors(chakraTheme),
  shadows: {
    outline: 'none',
    primary: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;',
  },
});

export default theme;
