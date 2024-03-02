export default {
  mode: 'jit',
  plugins: [],
    theme: {
    extend: {
      colors: {
        'gPrimaryColor': "#d13639",
        'gDarkPrimaryColor' : "#9c2424",
        'gLightPrimaryColor' : "#fff1f2",
        'gBackgroundColor': "#10151c",
        'gSecondaryColor': "#cbc5cf"
      },
      screens: {
        'widescreen': '2160px',
        // => @media (min-width: 2160px) { ... }
      },
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
