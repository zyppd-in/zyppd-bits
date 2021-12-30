module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'foreground': 'var(--color-foreground)',
        'warning': '#F4D217',
        'success': '#43E896',
        'error': '#E84747',
      },
      colors: {
        warning: '#F4D217',
        success: '#43E896',
        error: '#E84747',
        foreground: 'var(--color-foreground)',
        light: 'whitesmoke',
        dark: '#333'
      },
      minHeight: (theme) => ({
        ...theme('spacing'),
      }),
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
