module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  important: true,
  theme: {
    extend: {
      colors: {
        light: {
          10: '#FFF1',
          20: '#FFF2',
          30: '#FFF3',
          40: '#FFF4',
          50: '#FFF5',
          60: '#FFF6',
        },
        dark: {
          10: '#0001',
          20: '#0002',
          30: '#0003',
          40: '#0004',
          50: '#0005',
          60: '#0006',
        },
        primary: {
          main: '#CFB675',
        },
      },
      borderRadius: {
        '60px': '60px',
        '120px': '120px',
      },
    },
    flex: {
      1: '1 1 0%',
      2: '2 2 0%',
      4: '3 3 0%',
      3: '4 4 0%',
    },
  },
  variants: {},
  plugins: [],
};
