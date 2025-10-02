import { useTheme } from '@/contexts/ThemeContext';
import { useState } from 'react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      {/* Tooltip */}
      <div 
        className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 transition-all duration-300 ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}
      >
        <div className="bg-white dark:bg-jet text-jet dark:text-white px-3 py-1 rounded-lg shadow-xl border border-gray-200 dark:border-gray-600 whitespace-nowrap text-xs font-vivant">
          {theme === 'light' ? 'Modo Escuro' : 'Modo Claro'}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white dark:border-t-jet"></div>
        </div>
      </div>

      <button
        onClick={toggleTheme}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          theme === 'light' 
            ? 'bg-gray-100 hover:bg-gray-200 text-gray-600' 
            : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
        }`}
      >
        {theme === 'light' ? (
          // Ícone lua (modo escuro)
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        ) : (
          // Ícone sol (modo claro)
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle; 