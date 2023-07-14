/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
  theme: {
    extend: {
      //via Victor Yoalli
        'animation': {
            'gradient-x':'gradient-x 5s ease infinite',
            'test-anim':'test-anim 9s ease infinite',
        },
        'keyframes': {
            'gradient-x': {
                '0%, 100%': {
                    'background-size':'200% 200%',
                    'background-position': 'left center'
                },
                '50%': {
                    'background-size':'200% 200%',
                    'background-position': 'right center'
                }
            },
            'test-anim': {
              '0%, 40%, 100%': {  
                'opacity': '0',
                'margin-top': '-5vh'
              },
              '10%, 30%': {
                'opacity': '1',
                'margin-top': '-2vh'
              }
          }
        }
    }
}
}
