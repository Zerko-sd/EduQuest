'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, Send, User } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // TODO: Replace with actual API call
      const mockResponse = {
        role: 'assistant' as const,
        content: 'This is a sample response. In production, this would be replaced with an actual API response.'
      };
      
      setTimeout(() => {
        setMessages(prev => [...prev, mockResponse]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error sending message:', error);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">AI Learning Assistant</h1>
          <p className="text-lg text-muted-foreground">
            Ask questions and get personalized help with your studies
          </p>
        </motion.div>

        <Card className="p-6">
          <ScrollArea className="h-[500px] pr-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={`flex items-start space-x-3 ${
                    message.role === 'assistant' ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg ${
                      message.role === 'assistant'
                        ? 'bg-primary/10'
                        : 'bg-primary text-primary-foreground'
                    }`}
                  >
                    {message.role === 'assistant' ? (
                      <Bot className="h-5 w-5" />
                    ) : (
                      <User className="h-5 w-5" />
                    )}
                  </div>
                  <Card
                    className={`p-4 max-w-[80%] ${
                      message.role === 'assistant'
                        ? 'bg-card'
                        : 'bg-primary text-primary-foreground'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </Card>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center space-x-2"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Bot className="h-5 w-5 animate-pulse" />
                  </div>
                  <Card className="p-4">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce delay-200" />
                    </div>
                  </Card>
                </motion.div>
              )}
            </div>
          </ScrollArea>

          <div className="flex space-x-2 mt-4">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <Button onClick={handleSend} disabled={!input.trim() || isLoading}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}