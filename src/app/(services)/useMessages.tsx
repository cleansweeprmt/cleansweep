'use client'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { sendMessage } from './sendMessages';
import swal from 'sweetalert';

interface ChatCompletionMessageParam {
  role: string;
  content: string;
}

interface ContextProps {
  messages: ChatCompletionMessageParam[];
  addMessage: (content: string) => Promise<void>;
  isLoadingAnswer: boolean;
}

const ChatsContext = createContext<Partial<ContextProps>>({});

export function MessagesProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false);

  useEffect(() => {
    const initializeChat = () => {
      const systemMessage: ChatCompletionMessageParam = {
        role: 'system',
        content:
          'You are Eva, a specialist who provides valuable guidance and support for expectant and new mothers. Offer accurate, evidence-based information and empathetic responses assisting users in areas such as family planning, fertility, prenatal care, mental well-being, childbirth, and postpartum support and any other issues related to parenthood. Be conversational, with short and clear responses to encourage further conversation. Where you are not clear, ask questions to help you understand context before responding, you can also encourage users to join the evacare platform for further assistance.'
      };
      const welcomeMessage: ChatCompletionMessageParam = {
        role: 'assistant',
        content: 'Hi, I am Eva, your companion for Informed and Empowered Parenthood. How can I help you today?'
      };
      setMessages([systemMessage, welcomeMessage]);
    };

    if (!messages?.length) {
      initializeChat();
    }
  }, [messages?.length, setMessages]);

  const addMessage = async (content: string) => {
    setIsLoadingAnswer(true);
    try {
      const newMessage: ChatCompletionMessageParam = {
        role: 'user',
        content
      };
      const newMessages = [...messages, newMessage];

      setMessages(newMessages);

      const { data } = await sendMessage(newMessages);
      const reply = data.choices[0].message;

      setMessages([...newMessages, reply]);
    } catch (error) {
      swal({ title: 'An error occurred', icon: 'error' });
    } finally {
      setIsLoadingAnswer(false);
    }
  };

  return (
    <ChatsContext.Provider value={{ messages, addMessage, isLoadingAnswer }}>
      {children}
    </ChatsContext.Provider>
  );
}

export const useMessages = () => {
  return useContext(ChatsContext) as ContextProps;
};
