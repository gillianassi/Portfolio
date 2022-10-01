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
    extend: {
      display: ['group-focus'],
      opacity: ['group-focus'],
      inset: ['group-focus']
    },
  },
  purge: {
    content: ["./index.html",'./src/**/*.{svelte,js,ts,html,md}'],
    safelist: [
      'text-3xl',
      'text-xl',
      'list-disc'
    ]
  }
}
