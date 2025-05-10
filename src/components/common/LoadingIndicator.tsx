
import React from 'react';

interface LoadingIndicatorProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  size = 'medium',
  color = 'primary',
}) => {
  // Map size to dimensions
  const sizeMap = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
  };
  
  // Map color to Tailwind classes
  const colorMap = {
    primary: 'border-omni-primary',
    secondary: 'border-omni-secondary',
    white: 'border-white',
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={`${sizeMap[size]} border-2 ${colorMap[color as keyof typeof colorMap] || 'border-omni-primary'} border-t-transparent rounded-full animate-spin`}
      ></div>
    </div>
  );
};

export default LoadingIndicator;
