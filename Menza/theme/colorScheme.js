import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';

const _themeLight = {
  ...NavigationDefaultTheme,
  roundness: 2,
  colors: {
    ...NavigationDefaultTheme.colors,
    primary: '#FFA62B',
    accent: '#16697A',
    background: '#489FB5',
    surface: '#82C0CC',
    onSurface: '#0d5c63',
    text: '#EDE7E3',
  },
};

const themeLight = {
  ...PaperDefaultTheme,
  roundness: 2,
  colors: {
    ...PaperDefaultTheme.colors,
    primary: '#FFA62B',
    accent: '#16697A',
    background: '#489FB5',
    surface: '#82C0CC',
    onSurface: '#0d5c63',
    text: '#EDE7E3',
  },
};

const lightTheme = {
  ...themeLight,
  ..._themeLight,
  colors: {
    ...themeLight.colors,
    ..._themeLight.colors,
  },
};

const _themeDark = {
  ...NavigationDarkTheme,
  roundness: 2,
  colors: {
    ...NavigationDarkTheme.colors,
    primary: '#FFA62B',
    accent: '#00111C',
    background: '#00253E',
    surface: '#00406C',
    onSurface: '#EDE7E3',
    text: '#EDE7E3',
  },
};

const themeDark = {
  ...PaperDarkTheme,
  roundness: 2,
  colors: {
    ...PaperDarkTheme.colors,
    primary: '#FFA62B',
    accent: '#00111C',
    background: '#00253E',
    surface: '#00406C',
    onSurface: '#EDE7E3',
    text: '#EDE7E3',
  },
};

const darkTheme = {
  ...themeDark,
  ..._themeDark,
  colors: {
    ...themeDark.colors,
    ..._themeDark.colors,
  },
};

export {lightTheme, darkTheme};
