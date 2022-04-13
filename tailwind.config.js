module.exports = {
  content: ['./views/**/*.{jsx,tsx}', './components/**/*.{jsx,tsx}'],
  darkMode: 'media', // 'media' | 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#0065FF',
          200: '#E5EFFF',
          300: '#8AB8FF',
          400: '#0055D6',
          500: '#003585',
          600: '#0065FF33',
          main: '#0065FF',
          surface: '#E5EFFF',
          border: '#8AB8FF',
          hover: '#0055D6',
          pressed: '#003585',
          focus: '#0065FF33',
        },
        gray: {
          100: '#FAFAFA',
          200: '#F5F5F5',
          300: '#EDEDED',
          400: '#E0E0E0',
          500: '#E5E7EB',
          600: '#AFAFAF',
          700: '#757575',
          800: '#616161',
          900: '#424242',
          1000: '#0A0A0A',
          'light-hover': '#FAFAFA',
          background: '#F5F5F5',
          'background-pressed': '#EDEDED',
          surface: '#EDEDED',
          'background-selected': '#E0E0E0',
          border: '#E5E7EB',
          disabled: '#AFAFAF',
          placeholder: '#757575',
          caption: '#616161',
          body: '#424242',
          headings: '#0A0A0A',
          active: '#0A0A0A',
        },
        error: {
          main: '#FF3D3D',
          surface: '#FFEFED',
          border: '#FF9494',
          hover: '#DD2A2A',
          pressed: '#BB1A1A',
          focused: '#FF3D3D33',
          100: '#FF3D3D',
          200: '#FFEFED',
          300: '#FF9494',
          400: '#DD2A2A',
          500: '#BB1A1A',
          600: '#FF3D3D33',
        },
        warning: {
          main: '#FFAB00',
          surface: '#FFF6E5',
          border: '#FFD88A',
          hover: '#D69000',
          pressed: '#AD7400',
          focused: '#FFAB00',
          100: '#FFAB00',
          200: '#FFF6E5',
          300: '#FFD88A',
          400: '#D69000',
          500: '#AD7400',
          600: '#FFAB00',
        },
        success: {
          100: '#36B37E',
          200: '#DDFFF1',
          300: '#8AFFCD',
          400: '#249163',
          500: '#156F49',
          600: '#36B37E33',
          main: '#36B37E',
          surface: '#DDFFF1',
          border: '#8AFFCD',
          hover: '#249163',
          pressed: '#156F49',
          focus: '#36B37E33',
        },
        info: {
          100: '#0065FF',
          200: '#E5EFFF',
          300: '#8AB8FF',
          400: '#0055D6',
          500: '#003585',
          600: '#0065FF33',
          main: '#0065FF',
          surface: '#E5EFFF',
          border: '#8AB8FF',
          hover: '#0055D6',
          pressed: '#003585',
          focus: '#0065FF33',
        },
      },
      borderRadius: {
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '1rem',
        '2xl': '1.125rem',
        '3xl': '1.375rem',
        '4xl': '1.75rem',
      },
      fontFamily: {},
      fontSize: {
        '3xs': '0.5rem',
        '2xs': '0.625rem',
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.25rem',
        xl: '1.375rem',
        '2xl': '1.5rem',
        '3xl': '1.75rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        '7xl': '4rem',
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['active', 'disabled'],
    },
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
};
