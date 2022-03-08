module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'desktop-img': "url('/public/bg-main-desktop.png')",
      })
    },
  },
  plugins: [],
}
