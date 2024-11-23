// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Add paths to your content files
  ],
  theme: {
    extend: {
      fontFamily: {
        'canva-sans': ['Canva Sans', 'sans-serif'],
      },
      screens: {
        'xs': '360px', // Custom screen size
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      animation: {
        marquee: "marquee 45s linear infinite", // Adjust the duration (10s) for speed
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
}
