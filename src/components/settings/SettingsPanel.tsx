
import React from 'react';
import { X } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';

interface SettingsPanelProps {
  onClose: () => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ onClose }) => {
  return (
    <div className="settings-panel animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-lg">Settings</h3>
        <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
          <X size={18} />
          <span className="sr-only">Close</span>
        </Button>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="voice-feedback" className="text-sm">Voice Feedback</Label>
          <Switch id="voice-feedback" />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="voice-volume" className="text-sm">Voice Volume</Label>
            <span className="text-xs text-gray-500">70%</span>
          </div>
          <Slider id="voice-volume" defaultValue={[70]} max={100} step={1} />
        </div>
        
        <div className="flex items-center justify-between">
          <Label htmlFor="auto-read" className="text-sm">Auto-read responses</Label>
          <Switch id="auto-read" />
        </div>
        
        <div className="flex items-center justify-between">
          <Label htmlFor="dark-mode" className="text-sm">Dark Mode</Label>
          <Switch id="dark-mode" />
        </div>
        
        <div className="pt-2">
          <Button variant="outline" size="sm" className="w-full">
            Clear Conversation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
