
import React, { useState } from 'react';
import { Settings, HelpCircle, Star, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Helper function to determine if a link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-main-background bg-cover bg-center bg-fixed">
      <div className="min-h-screen backdrop-blur-[2px] bg-black/20 transition-all duration-300">
        <header className="py-3 px-6 flex justify-between items-center backdrop-blur-md bg-black/40 sticky top-0 z-20 border-b border-white/10 shadow-md">
          <Link to="/" className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-omni-primary to-omni-secondary flex items-center justify-center text-white font-bold text-xl shadow-md">
              O
            </div>
            <h1 className="text-2xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-omni-accent">
                OmniMind
              </span>
            </h1>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-4">
            <Link to="/features">
              <Button 
                variant="ghost" 
                className={`text-white hover:bg-white/10 hover:text-omni-accent transition-all duration-300 ${
                  isActive('/features') ? 'bg-white/10 text-omni-accent' : ''
                }`}
              >
                Features
              </Button>
            </Link>
            
            <Link to="/about">
              <Button 
                variant="ghost" 
                className={`text-white hover:bg-white/10 hover:text-omni-accent transition-all duration-300 ${
                  isActive('/about') ? 'bg-white/10 text-omni-accent' : ''
                }`}
              >
                About
              </Button>
            </Link>
            
            <Link to="/help">
              <Button 
                variant="ghost" 
                className={`text-white hover:bg-white/10 hover:text-omni-accent transition-all duration-300 ${
                  isActive('/help') ? 'bg-white/10 text-omni-accent' : ''
                }`}
              >
                Help
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="border-omni-primary bg-black/30 text-white hover:bg-omni-primary/20 transition-all duration-300"
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              className="md:hidden text-white"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </header>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-10 pt-20 bg-black/80 backdrop-blur-md flex flex-col items-center animate-fade-in">
            <nav className="flex flex-col w-full text-center gap-4 p-6">
              <Link to="/features" onClick={() => setMobileMenuOpen(false)}>
                <div className={`py-4 px-6 text-lg font-medium rounded-md transition-all ${
                  isActive('/features') 
                    ? 'bg-omni-primary/20 text-white'
                    : 'text-gray-200 hover:bg-omni-primary/10'
                }`}>
                  Features
                </div>
              </Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
                <div className={`py-4 px-6 text-lg font-medium rounded-md transition-all ${
                  isActive('/about') 
                    ? 'bg-omni-primary/20 text-white'
                    : 'text-gray-200 hover:bg-omni-primary/10'
                }`}>
                  About
                </div>
              </Link>
              <Link to="/help" onClick={() => setMobileMenuOpen(false)}>
                <div className={`py-4 px-6 text-lg font-medium rounded-md transition-all ${
                  isActive('/help') 
                    ? 'bg-omni-primary/20 text-white'
                    : 'text-gray-200 hover:bg-omni-primary/10'
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
        
        <footer className="py-4 bg-black/50 backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-300">© 2025 OmniMind AI Assistant. All rights reserved.</p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <Link to="/help">
                  <Button variant="ghost" size="sm" className="text-xs text-gray-300 hover:text-omni-accent">
                    <HelpCircle className="h-4 w-4 mr-1" />
                    Help Center
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" className="text-xs text-gray-300 hover:text-omni-accent">
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
