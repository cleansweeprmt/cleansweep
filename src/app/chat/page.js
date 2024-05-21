"use client";

import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { MessagesProvider } from "../(services)/useMessages";
import MessagesList from "../(components)/messageList";
import Navbar from "../(components)/navbar";
import MessageForm from "../(components)/messageForm";
import { auth } from "../(services)/firebase";

const ChatPage = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (!user) {
        toast.error(`🦄 you haven't signed in yet. Please create account!`, {
          // Toast configuration
        });
      } else {
        toast.success(`🦄 You are signed in as ${user.email}!`, {
          // Toast configuration
        });
      }
    });

    return () => {
      unsubscribeAuth();
    };
  }, [router]);
  return (
    <MessagesProvider>
        <div className="h-screen">
          <MessagesList />
        </div>
        <div className="fixed bottom-0 right-0 left-0">
          <MessageForm />
        </div>
    </MessagesProvider>
  );
};

export default ChatPage;
