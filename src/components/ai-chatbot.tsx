
'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageSquare, X, Send, Loader2, Bot } from 'lucide-react';
import { chat } from '@/ai/flows/chat';
import { Avatar, AvatarFallback } from './ui/avatar';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface Message {
  sender: 'user' | 'ai';
  text: string;
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (scrollAreaRef.current) {
        // A slight delay to allow the new message to render before scrolling
        setTimeout(() => {
            const viewport = scrollAreaRef.current?.querySelector('[data-radix-scroll-area-viewport]');
            if (viewport) {
                viewport.scrollTop = viewport.scrollHeight;
            }
        }, 100);
    }
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage: Message = { sender: 'user', text: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    const messageHistory = newMessages.map(m => `${m.sender}: ${m.text}`).join('\n');
    setInput('');
    setIsLoading(true);

    try {
      const response = await chat({ message: input, history: messageHistory });
      const aiMessage: Message = { sender: 'ai', text: response.response };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = {
        sender: 'ai',
        text: 'Sorry, I am having trouble connecting. Please try again later.',
      };
      setMessages((prev) => [...prev, errorMessage]);
      console.error('Chatbot error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-52 right-8 z-50 md:bottom-28">
        <Button
          size="icon"
          className="h-12 w-12 rounded-full shadow-lg dark:bg-white/20 dark:hover:bg-white/30 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
        </Button>
      </div>

      {isOpen && (
        <Card className={cn(
            "fixed bottom-64 right-8 z-50 flex flex-col shadow-2xl animate-fade-in md:bottom-44",
            isMobile ? "w-[calc(100vw-4rem)] h-[60vh]" : "w-80 h-[28rem]"
        )}>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>AI Music Assistant</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 p-0">
            <ScrollArea className="h-full px-4" ref={scrollAreaRef}>
              <div className="space-y-4 py-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={cn(
                      'flex items-start gap-3',
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    )}
                  >
                    {message.sender === 'ai' && (
                       <Avatar className="h-8 w-8">
                         <AvatarFallback><Bot className="h-5 w-5" /></AvatarFallback>
                       </Avatar>
                    )}
                     <div
                        className={cn(
                          'max-w-[75%] rounded-lg p-3 text-sm',
                          message.sender === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        )}
                      >
                       {message.text}
                     </div>
                  </div>
                ))}
                {isLoading && (
                    <div className="flex items-start gap-3 justify-start">
                         <Avatar className="h-8 w-8">
                            <AvatarFallback><Bot className="h-5 w-5" /></AvatarFallback>
                        </Avatar>
                        <div className="bg-muted rounded-lg p-3">
                            <Loader2 className="h-5 w-5 animate-spin" />
                        </div>
                    </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter className="p-4 border-t">
            <div className="flex w-full items-center space-x-2">
              <Input
                placeholder="Ask about music..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <Button onClick={handleSend} size="icon" disabled={isLoading}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
