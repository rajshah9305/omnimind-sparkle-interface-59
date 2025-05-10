
import React from 'react';
import { X, Moon, Sun, Volume2, VolumeX } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SettingsPanelProps {
  onClose: () => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ onClose }) => {
  return (
    <div className="settings-panel">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-lg text-omni-dark">Settings</h3>
        <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 hover:bg-gray-100">
          <X size={18} />
          <span className="sr-only">Close</span>
        </Button>
      </div>
      
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="w-full mb-4">
          <TabsTrigger value="general" className="flex-1">General</TabsTrigger>
          <TabsTrigger value="voice" className="flex-1">Voice</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Moon size={16} className="text-gray-600" />
              <Label htmlFor="dark-mode" className="text-sm">Dark Mode</Label>
            </div>
            <Switch id="dark-mode" />
          </div>
          
          <div className="flex items-center justify-between">
            <Label htmlFor="animations" className="text-sm">Enable Animations</Label>
            <Switch id="animations" defaultChecked />
          </div>
          
          <div className="pt-2">
            <Button variant="outline" size="sm" className="w-full hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors">
              Clear Conversation
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="voice" className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Volume2 size={16} className="text-gray-600" />
              <Label htmlFor="voice-feedback" className="text-sm">Voice Feedback</Label>
            </div>
            <Switch id="voice-feedback" />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="voice-volume" className="text-sm">Voice Volume</Label>
              <span className="text-xs text-gray-500">70%</span>
            </div>
            <Slider id="voice-volume" defaultValue={[70]} max={100} step={1} className="h-1.5" />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <VolumeX size={16} className="text-gray-600" />
              <Label htmlFor="auto-read" className="text-sm">Mute Microphone</Label>
            </div>
            <Switch id="auto-read" />
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">OmniMind v1.0.0</p>
      </div>
    </div>
  );
};

export default SettingsPanel;
