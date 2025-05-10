
import React, { useState, useEffect } from 'react';
import { Settings, HelpCircle, Star, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  
  // Check user's preferred color scheme
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, []);
  
  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  // Helper function to determine if a link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-roses-dark' : 'bg-roses-light'} bg-cover bg-center bg-fixed transition-all duration-300`}>
      <div className={`min-h-screen backdrop-blur-sm ${theme === 'dark' ? 'bg-black/40' : 'bg-white/30'} transition-all duration-300`}>
        <header className={`py-4 px-6 flex justify-between items-center backdrop-blur-md ${theme === 'dark' ? 'bg-black/50' : 'bg-white/70'} sticky top-0 z-20 border-b ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} transition-all duration-300`}>
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-omni-primary to-omni-secondary flex items-center justify-center text-white font-bold text-xl shadow-md">
              O
            </div>
            <h1 className="text-2xl font-bold">
              <span className={`bg-clip-text text-transparent bg-gradient-to-r ${theme === 'dark' ? 'from-white to-omni-accent' : 'from-omni-primary to-omni-secondary'}`}>
                OmniMind
              </span>
            </h1>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-4">
            <Link to="/features">
              <Button 
                variant="ghost" 
                className={`${theme === 'dark' ? 'text-white hover:bg-white/10' : 'text-omni-dark hover:bg-black/10'} hover:text-omni-accent transition-all duration-300 ${
                  isActive('/features') ? theme === 'dark' ? 'bg-white/10 text-omni-accent' : 'bg-black/10 text-omni-primary' : ''
                }`}
              >
                Features
              </Button>
            </Link>
            
            <Link to="/about">
              <Button 
                variant="ghost" 
                className={`${theme === 'dark' ? 'text-white hover:bg-white/10' : 'text-omni-dark hover:bg-black/10'} hover:text-omni-accent transition-all duration-300 ${
                  isActive('/about') ? theme === 'dark' ? 'bg-white/10 text-omni-accent' : 'bg-black/10 text-omni-primary' : ''
                }`}
              >
                About
              </Button>
            </Link>
            
            <Link to="/help">
              <Button 
                variant="ghost" 
                className={`${theme === 'dark' ? 'text-white hover:bg-white/10' : 'text-omni-dark hover:bg-black/10'} hover:text-omni-accent transition-all duration-300 ${
                  isActive('/help') ? theme === 'dark' ? 'bg-white/10 text-omni-accent' : 'bg-black/10 text-omni-primary' : ''
                }`}
              >
                Help
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              className={`rounded-full w-10 h-10 p-0 flex items-center justify-center ${theme === 'dark' ? 'bg-white/10 text-white' : 'bg-black/10 text-omni-dark'}`}
              onClick={toggleTheme}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </Button>
            
            <Button
              variant="outline"
              className={`border-omni-primary ${theme === 'dark' ? 'bg-black/30 text-white hover:bg-omni-primary/20' : 'bg-white/50 text-omni-dark hover:bg-omni-primary/10'} transition-all duration-300`}
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              className={`md:hidden ${theme === 'dark' ? 'text-white' : 'text-omni-dark'}`}
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </header>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden fixed inset-0 z-10 pt-20 ${theme === 'dark' ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-md flex flex-col items-center animate-fade-in`}>
            <nav className="flex flex-col w-full text-center gap-4 p-6">
              <Link to="/features" onClick={() => setMobileMenuOpen(false)}>
                <div className={`py-4 px-6 text-lg font-medium rounded-md transition-all ${
                  isActive('/features') 
                    ? theme === 'dark' 
                      ? 'bg-omni-primary/20 text-white' 
                      : 'bg-omni-primary/10 text-omni-dark'
                    : theme === 'dark'
                      ? 'text-gray-200 hover:bg-omni-primary/10'
                      : 'text-gray-700 hover:bg-omni-primary/5'
                }`}>
                  Features
                </div>
              </Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
                <div className={`py-4 px-6 text-lg font-medium rounded-md transition-all ${
                  isActive('/about') 
                    ? theme === 'dark' 
                      ? 'bg-omni-primary/20 text-white' 
                      : 'bg-omni-primary/10 text-omni-dark'
                    : theme === 'dark'
                      ? 'text-gray-200 hover:bg-omni-primary/10'
                      : 'text-gray-700 hover:bg-omni-primary/5'
                }`}>
                  About
                </div>
              </Link>
              <Link to="/help" onClick={() => setMobileMenuOpen(false)}>
                <div className={`py-4 px-6 text-lg font-medium rounded-md transition-all ${
                  isActive('/help') 
                    ? theme === 'dark' 
                      ? 'bg-omni-primary/20 text-white' 
                      : 'bg-omni-primary/10 text-omni-dark'
                    : theme === 'dark'
                      ? 'text-gray-200 hover:bg-omni-primary/10'
                      : 'text-gray-700 hover:bg-omni-primary/5'
                }`}>
                  Help
                </div>
              </Link>
            </nav>
          </div>
        )}
        
        <main className="container mx-auto py-8 px-4">
          {children}
        </main>
        
        <footer className={`py-6 ${theme === 'dark' ? 'bg-black/50' : 'bg-white/50'} backdrop-blur-md border-t ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} transition-all duration-300`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>© 2025 OmniMind AI Assistant. All rights reserved.</p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <Link to="/help">
                  <Button variant="ghost" size="sm" className={`text-xs ${theme === 'dark' ? 'text-gray-300 hover:text-omni-accent' : 'text-gray-700 hover:text-omni-primary'}`}>
                    <HelpCircle className="h-4 w-4 mr-1" />
                    Help Center
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" className={`text-xs ${theme === 'dark' ? 'text-gray-300 hover:text-omni-accent' : 'text-gray-700 hover:text-omni-primary'}`}>
                  <Star className="h-4 w-4 mr-1" />
                  Rate Us
                </Button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
