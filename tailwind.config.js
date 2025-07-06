/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Mustard Yellow Theme
        mustard: {
          50: '#FAF7F0',
          100: '#F5EFD7',
          200: '#FFDD57',
          300: '#F4C542',
          400: '#E0A800',
          500: '#D49C00',
          600: '#B8860B',
          700: '#9A7209',
          800: '#7D5E07',
          900: '#654A05',
        },
        // Text and Contrast Colors
        charcoal: {
          50: '#F8F8F8',
          100: '#E8E8E8',
          200: '#D1D1D1',
          300: '#B4B4B4',
          400: '#999999',
          500: '#4B4B4B',
          600: '#333333',
          700: '#2A2A2A',
          800: '#1A1A1A',
          900: '#0F0F0F',
        },
        // Surface and Background
        surface: {
          light: '#FAF7F0',
          white: '#FFFFFF',
          beige: '#F5EFD7',
        },
        // Legacy pastel colors (keeping for backward compatibility but will replace)
        pastel: {
          blue: '#E0F2FE',
          'blue-light': '#F0F9FF',
          'blue-dark': '#F4C542', // Replace with mustard
          pink: '#FCE7F3',
          'pink-light': '#FDF2F8',
          'pink-dark': '#E0A800', // Replace with darker mustard
          green: '#ECFDF5',
          'green-light': '#F0FDF4',
          'green-dark': '#F4C542', // Replace with mustard
          purple: '#F3E8FF',
          'purple-light': '#FAF5FF',
          'purple-dark': '#E0A800', // Replace with darker mustard
          orange: '#FFF7ED',
          'orange-light': '#FFFBEB',
          'orange-dark': '#F4C542', // Replace with mustard
          gray: '#F8FAFC',
          'gray-light': '#FCFCFD',
          'gray-dark': '#4B4B4B', // Replace with warm charcoal
        }
      },
      backgroundImage: {
        'mustard-gradient': 'linear-gradient(135deg, #F4C542, #E0A800)',
        'mustard-gradient-soft': 'linear-gradient(to right, #F4C542, #FFDD57)',
        'hero-gradient': 'linear-gradient(135deg, rgba(244, 197, 66, 0.9), rgba(224, 168, 0, 0.8))',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'loading-bar': 'loadingBar 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        loadingBar: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};