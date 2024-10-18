import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray1: '#A4ADAC',
        gray2: '#D6DBDB',
        gray3: '#E8EDEE',
        gray4: '#F2F6F6',
        black: '#1D1D1B',
        orange: '#FF5900',
        darkOrange: '#E0570E',
        error: '#FF4026',
      },
      screens: {
        md: '768px',
        lg: '1024px',
        xl: '1220px',
      },
      backgroundImage: {
        mainBG: "url('../../public/images/shapes.png')",
        checkBox: "url('../../public/images/checkBox.svg')",
      },
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
    },
  },
  plugins: [],
};
export default config;
