export default {
  mode: 'jit',
  plugins: [],
    theme: {
    extend: {
      colors: {
        'gPrimaryColor': "#B94EFE",
        'gBackgroundColor': "#252525",
        'gSecondaryColor': "#EEE7F2"
      }
    },
    fontFamily: {
      'changa': ['"Changa"', 'sans-serif'],
    }
  },
  variants: {
    extend: {},
  },
  purge: ["./index.html",'./src/**/*.{svelte,js,ts,html,md}']
}
