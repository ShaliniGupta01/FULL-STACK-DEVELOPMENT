/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./**/*.{html,js}"],
  theme: {
    extend: {
         screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
        fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
        rotate: {
        17: '17deg',
      }
    },
  },
  plugins: [],
}

// Customize own

// @type {import('tailwindcss').Config} 
// export default {
//   theme: {
//     //override here
//     colors: {
//       red: '#4DA1A9',
//     },
//     screens: {
//       xs: '437px',
//     },
//     extend: {
//       colors: {
//         customBlue: '#2E5077',
//       },
//       spacing: {
//         33: '18rem',
//       },
//       fontFamily: {
//         roboto: ['Roboto', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// }

