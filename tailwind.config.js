module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: "'Bebas Neue', cursive",
        indie: "'Indie Flower', cursive",
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        beat: 'beat 1s ease-out infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {transform: 'rotate(-3deg)'},
          '50%': {transform: 'rotate(3deg)'},
        },
        beat: {
          '0%, 100%': {transform: 'scale(1)'},
          '25%': {transform: 'scale(1.2)'},
        }
      },
      visibility: ["group-hover"]
    },
  },
  plugins: [],
}
