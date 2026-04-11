import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1e2a78',
          blue: '#2563eb',
          purple: '#6d28d9',
          pink: '#db2777'
        }
      }
    }
  },
  plugins: []
};

export default config;
