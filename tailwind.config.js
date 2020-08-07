module.exports = {
  theme: {
      container: {
        center: true
    },
        extend: {
            colors: {
                'blue': '#1DA1F2',
                'darkblue': '#2795D9',
                'lightblue': '#EFF9FF',
                'dark': '#657786',
                'light': '#AAB8C2',
                'lighter': '#E1E8ED',
                'lightest': '#F5F8FA',
            },
        },
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './public/**/*.html',
      './src/**/*.vue'
    ]
  }
}