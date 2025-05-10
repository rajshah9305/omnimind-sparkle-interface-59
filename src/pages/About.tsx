
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { MessageSquare, Settings, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl w-full mx-auto py-8 px-4">
        <div className="mb-10 text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-omni-light text-omni-primary font-semibold text-sm animate-bounce-soft">
            About OmniMind
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-omni-primary to-omni-secondary">
            Our Mission & Vision
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            We're on a mission to create AI assistants that understand humans better and make technology more accessible to everyone.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
          <p className="text-gray-600 mb-6">
            OmniMind was founded in 2024 by a team of AI researchers and developers passionate about making artificial intelligence more helpful, accessible, and human-centered. We believe that AI should be a tool that enhances human capabilities rather than replacing them.
          </p>
          
          <h3 className="text-2xl font-semibold mb-4">Our Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-omni-light flex items-center justify-center mb-4">
                <MessageSquare className="h-8 w-8 text-omni-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Human-Centered</h4>
              <p className="text-gray-600">
                We design our AI to understand and adapt to human needs and preferences.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-omni-light flex items-center justify-center mb-4">
                <Settings className="h-8 w-8 text-omni-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Transparent</h4>
              <p className="text-gray-600">
                We believe in building AI systems that are explainable and trustworthy.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-omni-light flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-omni-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Constantly Learning</h4>
              <p className="text-gray-600">
                Our systems continuously improve through feedback and new information.
              </p>
            </div>
          </div>
          
          <h3 className="text-2xl font-semibold mb-4">Our Technology</h3>
          <p className="text-gray-600">
            OmniMind utilizes state-of-the-art large language models, speech recognition systems, and computer vision technologies. Our proprietary architecture allows for seamless integration of these modalities, enabling OmniMind to understand and respond to text, voice, and images with remarkable accuracy and usefulness.
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-omni-primary to-omni-secondary rounded-xl shadow-md p-8 text-white text-center">
          <h3 className="text-2xl font-semibold mb-4">Join Us on Our Journey</h3>
          <p className="max-w-2xl mx-auto leading-relaxed">
            We're constantly improving OmniMind and adding new capabilities. Your feedback and usage help us make OmniMind better every day.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
