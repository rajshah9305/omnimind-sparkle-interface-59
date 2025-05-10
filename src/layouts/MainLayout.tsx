
import React from 'react';
import { Settings, HelpCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  
  // Helper function to determine if a link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-omni-light">
      <header className="py-4 px-6 flex justify-between items-center backdrop-blur-sm bg-white/80 sticky top-0 z-10 border-b border-gray-100">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-omni-primary to-omni-secondary flex items-center justify-center text-white font-bold text-xl shadow-md">
            O
          </div>
          <h1 className="text-2xl font-bold text-omni-dark">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-omni-dark to-omni-primary">
              OmniMind
            </span>
          </h1>
        </Link>
        
        <div className="hidden md:flex gap-4">
          <Link to="/features">
            <Button 
              variant="ghost" 
              className={`hover:bg-omni-light hover:text-omni-primary transition-all duration-300 ${
                isActive('/features') ? 'bg-omni-light text-omni-primary' : ''
              }`}
            >
              Features
            </Button>
          </Link>
          
          <Link to="/about">
            <Button 
              variant="ghost" 
              className={`hover:bg-omni-light hover:text-omni-primary transition-all duration-300 ${
                isActive('/about') ? 'bg-omni-light text-omni-primary' : ''
              }`}
            >
              About
            </Button>
          </Link>
          
          <Link to="/help">
            <Button 
              variant="ghost" 
              className={`hover:bg-omni-light hover:text-omni-primary transition-all duration-300 ${
                isActive('/help') ? 'bg-omni-light text-omni-primary' : ''
              }`}
            >
              Help
            </Button>
          </Link>
        </div>
        
        <Button
          variant="outline"
          className="border-omni-primary text-omni-primary hover:bg-omni-light transition-all duration-300"
        >
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </header>
      
      <main className="container mx-auto py-8 px-4">
        {children}
      </main>
      
      <footer className="py-6 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">© 2025 OmniMind AI Assistant. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link to="/help">
                <Button variant="ghost" size="sm" className="text-xs text-gray-500 hover:text-omni-primary">
                  <HelpCircle className="h-4 w-4 mr-1" />
                  Help Center
                </Button>
              </Link>
              <Button variant="ghost" size="sm" className="text-xs text-gray-500 hover:text-omni-primary">
                <Star className="h-4 w-4 mr-1" />
                Rate Us
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
