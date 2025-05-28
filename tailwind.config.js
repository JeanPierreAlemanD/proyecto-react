// tailwind.config.js
export default {
  darkMode: 'class', // para usar dark mode con clases
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // escanea estos archivos para generar estilos
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}