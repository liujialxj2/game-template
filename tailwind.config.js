/** @type {import('tailwindcss').Config} */

import { loadSiteConfig } from './scripts/load-config.js';

// 加载站点配置
const siteConfig = loadSiteConfig();

// 获取主题配置，如果不存在则使用默认值
const themeConfig = siteConfig?.themeConfig || {
  colors: {
    primary: '#3b82f6',
    secondary: '#10b981',
    accent: '#8b5cf6',
    background: '#0f172a',
    text: '#f8fafc',
  },
  fontFamily: {
    sans: ['Inter', 'sans-serif'],
    heading: ['Poppins', 'sans-serif'],
  }
};

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: themeConfig.colors.primary,
        secondary: themeConfig.colors.secondary,
        accent: themeConfig.colors.accent,
        background: themeConfig.colors.background,
        'text-primary': themeConfig.colors.text,
      },
      fontFamily: {
        sans: themeConfig.fontFamily.sans,
        heading: themeConfig.fontFamily.heading,
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
