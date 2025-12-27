
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { chat } from '@/ai/flows/chat';
import { Avatar, AvatarFallback } from './ui/avatar';
import { cn } from '@/lib/utils';

interface Message {
  sender: 'user' | 'ai';
  text: string;
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await chat({ message: input, history: messages.map(m => `${m.sender}: ${m.text}`).join('\n') });
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
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          size="icon"
          className="h-16 w-16 rounded-full shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-8 w-8" /> : <MessageSquare className="h-8 w-8" />}
        </Button>
      </div>

      {isOpen && (
        <Card className="fixed bottom-28 right-8 z-50 w-80 h-[28rem] flex flex-col shadow-2xl animate-fade-in">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>AI Music Assistant</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 p-0">
            <ScrollArea className="h-full px-4">
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
                         <AvatarFallback>AI</AvatarFallback>
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
                            <AvatarFallback>AI</AvatarFallback>
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
