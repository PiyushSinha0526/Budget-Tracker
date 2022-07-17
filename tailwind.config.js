module.exports = {
  mode: 'jit',
   purge: [
     './public/**/*.html',
     './src/**/*.{js,jsx,ts,tsx,vue}',
   ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue_dark: '#1E293B',
        purple_mid: '#845ec2',
        purple_light: '#9b89b3',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
