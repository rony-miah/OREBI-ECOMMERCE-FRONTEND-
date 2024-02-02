/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '1620px',
      },
      fontFamily: {
        'DmSans': ['DM Sans', 'sans-serif']
      },
      fontSize: {
        'heading1textSize': '49px',
        'heading2textSize': '39px',
        'productnameSize': '20px',
        'paragraphtextSize': '16px',
        'buttontextSize': '14px',
        
      },
      colors: {
        'primaryColor': '#262626',
        'secondaryColor': '#6D6D6D',
        'paragraphColor': '#767676',
      },
      backgroundImage: {
        'slider1': "url('./assets/slider1.png')",
        'ad1': "url('./assets/ad1.png')",
        'ad2': "url('./assets/ad2.png')",
        'ad3': "url('./assets/ad3.png')",
        // 'newproduct1': "url('./assets/newproduct1.png')",
      }
    },
  },
  plugins: [],
}