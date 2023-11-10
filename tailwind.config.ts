import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
export default {
  content: [],
  theme: {
    colors: {
      current: 'currentColor',
      cool: colors.gray,
      blue: {
        '50': '#eff7ff',
        '100': '#daedff',
        '200': '#bde1ff',
        '300': '#90ceff',
        '400': '#4facfe',
        '500': '#3691fb',
        '600': '#2072f0',
        '700': '#185cdd',
        '800': '#1a4bb3',
        '900': '#1b438d',
        '950': '#152956',
      },
      red: {
        '50': '#fff0f1',
        '100': '#ffdee1',
        '200': '#ffc3c9',
        '300': '#ff99a3',
        '400': '#ff5f6e',
        '500': '#ff2d41',
        '600': '#ef0a20',
        '700': '#ce071a',
        '800': '#aa0a19',
        '900': '#8c101c',
        '950': '#4d0209',
      },
      dark: {
        '50': '#f1f6fe',
        '100': '#e2edfc',
        '200': '#bed9f9',
        '300': '#84baf5',
        '400': '#4397ed',
        '500': '#1a79dd',
        '600': '#0d5ebc',
        '700': '#0c4a98',
        '800': '#1f2533',
        '900': '#0e1118',
        '950': '#02060c',
      }
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'black': '#02060c',
        'white': '#fff',

      },
      fontFamily: {
        sans: ['Lato', 'PingFangSC-Regular', '宋体'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config

