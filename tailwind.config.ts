import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
export default <Partial<Config>> {
  darkMode: 'class',
  content: [],
  theme: {
    colors: {
      current: 'currentColor',
      gray: colors.gray,
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
      spacing: {
        'base': 'var(--padding)',
      }
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#0052d9",
          "primary-content": "#ffffff",

          "secondary": "#149bff",
          "secondary-content": "#fff1f2",

          "accent": "#0845a0",
          "accent-content": "#b2e5ff",

          "neutral": "#b2e5ff",
          "neutral-content": "#0061ff",

          "base-100": "#e5e7eb",
          "base-200": "#f3f4f6",
          "base-300": "#ffffff",
          "base-content": "#181818",

          "info": "#40bdff",
          "success": "#2ba471",
          "warning": "#e37318",
          "error": "#d54941",
        },
      },
      {
        dark: {
          "primary": "#157cff",
          "primary-content": "#fff",

          "secondary": "#161d27",
          "secondary-content": "#f3fbff",

          "accent": "#0085ec",
          "accent-content": "#f3fbff",

          "neutral": "#000f198c",
          "neutral-content": "#f3fbff",

          "base-100": "#02060c",
          "base-200": "#0e1118",
          "base-300": "#1f2533",
          "base-content": "#fff",

          "info": "#3CB1FB",
          "success": "#07A872",
          "warning": "#ED8139",
          "error": "#FB6E77",
        }
      },
      {
        lichi: {
          "primary": "#ff2d41",
          "primary-content": "#ffffff",

          "secondary": "#ff6473",
          "secondary-content": "#fff1f2",

          "accent": "#a50f1d",
          "accent-content": "#fff1f2",

          "neutral": "#ff9da6",
          "neutral-content": "#88141f",

          "base-100": "#e5e7eb",
          "base-200": "#f3f4f6",
          "base-300": "#ffffff",
          "base-content": "#181818",

          "info": "#fff1f2",
          "success": "#2ba471",
          "warning": "#e37318",
          "error": "#d54941",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
