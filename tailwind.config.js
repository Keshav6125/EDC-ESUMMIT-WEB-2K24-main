
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Orbitron:["Orbitron","cursive","sans-serif"],
        Quicksand:['Quicksand'],
        Barlow:['Barlow'],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}