
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { MessageSquare, HelpCircle, BookOpen } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Help: React.FC = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl w-full mx-auto py-8 px-4">
        <div className="mb-10 text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-omni-light text-omni-primary font-semibold text-sm animate-bounce-soft">
            Help Center
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-omni-primary to-omni-secondary">
            How Can We Help?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Find answers to common questions and learn how to get the most out of OmniMind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="w-12 h-12 rounded-full bg-omni-light flex items-center justify-center mb-4">
              <MessageSquare className="h-6 w-6 text-omni-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Chat Support</h3>
            <p className="text-gray-600 mb-4">
              Need help? Chat directly with our support team for personalized assistance.
            </p>
            <a href="#" className="text-omni-primary font-medium hover:underline">
              Start a conversation &rarr;
            </a>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Documentation</h3>
            <p className="text-gray-600 mb-4">
              Browse our detailed guides and documentation to learn all OmniMind features.
            </p>
            <a href="#" className="text-blue-600 font-medium hover:underline">
              View documentation &rarr;
            </a>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
              <HelpCircle className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">FAQs</h3>
            <p className="text-gray-600 mb-4">
              Find quick answers to the most common questions about OmniMind.
            </p>
            <a href="#faq-section" className="text-purple-600 font-medium hover:underline">
              Jump to FAQs &rarr;
            </a>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-8 mb-8" id="faq-section">
          <h3 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h3>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I start using OmniMind?</AccordionTrigger>
              <AccordionContent>
                Getting started is easy! Simply type your question in the chat box on the home page and press enter. You can also click the microphone icon to use voice input.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>Can OmniMind understand images?</AccordionTrigger>
              <AccordionContent>
                Yes! OmniMind can analyze and describe images. To use this feature, click the image upload button in the chat interface and select an image from your device.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>Is my conversation with OmniMind private?</AccordionTrigger>
              <AccordionContent>
                We take privacy seriously. Your conversations are encrypted and not shared with third parties. We only use anonymized data to improve our services with your consent.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>Can I use OmniMind on my mobile device?</AccordionTrigger>
              <AccordionContent>
                Absolutely! OmniMind is fully responsive and works on smartphones, tablets, and desktop computers. Simply visit our website on any device.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>How accurate is OmniMind's voice recognition?</AccordionTrigger>
              <AccordionContent>
                OmniMind uses state-of-the-art speech recognition technology with high accuracy rates. It works best in quiet environments and with clear speech.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div className="bg-omni-light rounded-xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-omni-primary">Still Have Questions?</h3>
          <p className="text-gray-700 mb-6 max-w-md mx-auto">
            Our support team is available 24/7 to help you with any questions or issues you might have.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#" className="px-6 py-2 bg-white rounded-full font-medium text-omni-primary hover:shadow-md transition-shadow">
              Contact Support
            </a>
            <a href="#" className="px-6 py-2 bg-omni-primary rounded-full font-medium text-white hover:bg-omni-secondary transition-colors">
              Schedule a Demo
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Help;
