/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './js/**/*.js'],
  theme: {
    extend: {
      colors: {
        bianco: { DEFAULT: '#F3F3EE', pure: '#FFFFFF' }, // Bianco Avus
        nero: '#0C0D0E',                                  // Nero Daytona
        brg: {                                            // British Racing Green
          DEFAULT: '#004225',
          bright: '#3DBB7E',
          tint: '#DCEBE0',
        },
        muted: '#57635B',
        line: { DEFAULT: '#DAD9D1', dark: '#2A2D2B' },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        body: ['"Instrument Sans"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'Menlo', 'monospace'],
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(.22, 1, .36, 1)',
      },
    },
  },
  plugins: [],
};
