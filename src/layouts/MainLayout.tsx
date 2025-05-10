
import React from 'react';
import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-omni-light">
      <header className="py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-omni-primary to-omni-secondary flex items-center justify-center text-white font-bold text-xl">
            O
          </div>
          <h1 className="text-xl font-bold text-omni-dark">OmniMind</h1>
        </div>
        
        <div className="hidden md:flex gap-4">
          <Button variant="ghost">Features</Button>
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Help</Button>
        </div>
        
        <Button
          variant="outline"
          className="border-omni-primary text-omni-primary hover:bg-omni-light"
        >
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </header>
      
      <main className="container mx-auto py-8 px-4">
        {children}
      </main>
      
      <footer className="text-center py-6 text-sm text-gray-500">
        <p>© 2025 OmniMind AI Assistant. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
