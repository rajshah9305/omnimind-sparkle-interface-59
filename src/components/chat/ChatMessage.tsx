
import React from 'react';
import { Avatar } from '@/components/ui/avatar';

export type MessageType = 'user' | 'ai';

export interface MessageProps {
  content: string;
  type: MessageType;
  timestamp?: string;
  isLoading?: boolean;
}

const ChatMessage: React.FC<MessageProps> = ({
  content,
  type,
  timestamp,
  isLoading
}) => {
  // Format timestamp or use default
  const formattedTime = timestamp || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // AI thinking animation when loading
  if (isLoading && type === 'ai') {
    return (
      <div className="ai-bubble">
        <Avatar className="w-8 h-8 bg-gradient-to-br from-omni-primary to-omni-secondary text-white shadow-sm">
          <span>AI</span>
        </Avatar>
        <div>
          <div className="thinking-indicator">
            <div className="thinking-dot animate-thinking"></div>
            <div className="thinking-dot animate-thinking" style={{ animationDelay: '0.2s' }}></div>
            <div className="thinking-dot animate-thinking" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <span className="text-xs text-gray-500 mt-1">{formattedTime}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`message-bubble ${type === 'user' ? 'user-bubble' : 'ai-bubble'}`}>
      {type === 'ai' && (
        <Avatar className="w-8 h-8 bg-gradient-to-br from-omni-primary to-omni-secondary text-white shadow-sm">
          <span>AI</span>
        </Avatar>
      )}
      <div className="flex-1">
        <div className="message-content">
          {content.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < content.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
        <span className="text-xs text-gray-500 mt-2 block">{formattedTime}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
