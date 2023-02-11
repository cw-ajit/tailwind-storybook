// .storybook/preview.js

import '../src/tailwind.css';

import { DEFAULT_THEME, withTailwindTheme } from './withTailwindTheme.decorator';

export const decorators = [withTailwindTheme];