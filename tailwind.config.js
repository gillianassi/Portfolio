export default {
  plugins: [],
    theme: {
    extend: {},
    colors: {
      'gPrimaryColor': "#B94EFE",
      'gBackgroundColor': "#252525",
      'gSecondaryColor': "#EEE7F2"
    }
  },
  content: ["./index.html",'./src/**/*.{svelte,js,ts}'], // for unused CSS
  variants: {
    extend: {},
  },
}