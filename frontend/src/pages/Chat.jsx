import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatHeader from "../components/ChatHeader";
import ChatMessages from "../components/ChatMessages";
import ChatInput from "../components/ChatInput";

function Chat() {
  const welcomeMessage = {
    sender: "bot",
    text: "👋 Hi! I am PathPilot AI. What do you want to become?",
  };

  const [messages, setMessages] = useState([welcomeMessage]);
  const [loading, setLoading] = useState(false);

  const [chatHistory, setChatHistory] = useState(() => {
    const saved = localStorage.getItem("pathpilot-history");
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedChatId, setSelectedChatId] = useState(null);

  // Save history
  useEffect(() => {
    localStorage.setItem(
      "pathpilot-history",
      JSON.stringify(chatHistory)
    );
  }, [chatHistory]);

  // Create or update chats
  useEffect(() => {
    const firstUserMessage = messages.find(
      (msg) => msg.sender === "user"
    );

    if (!firstUserMessage) return;

    // Existing chat update
    if (selectedChatId) {
      setChatHistory((prev) =>
        prev.map((chat) =>
          chat.id === selectedChatId
            ? {
                ...chat,
                messages,
              }
            : chat
        )
      );

      return;
    }

    // New chat create
    const newChat = {
      id: Date.now(),
      title:
        firstUserMessage.text.length > 30
          ? firstUserMessage.text.slice(0, 30) + "..."
          : firstUserMessage.text,
      messages,
    };

    setChatHistory((prev) => [
      newChat,
      ...prev,
    ]);

    setSelectedChatId(newChat.id);
  }, [messages]);

  // New Chat
  const handleNewChat = () => {
    setMessages([welcomeMessage]);
    setSelectedChatId(null);
    setLoading(false);
  };

  // Open old chat
  const handleOpenChat = (chat) => {
    setMessages(chat.messages);
    setSelectedChatId(chat.id);
    setLoading(false);
  };

  // Delete chat
  const handleDeleteChat = (id) => {
    const updatedChats = chatHistory.filter(
      (chat) => chat.id !== id
    );

    setChatHistory(updatedChats);

    if (selectedChatId === id) {
      setMessages([welcomeMessage]);
      setSelectedChatId(null);
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-950 via-slate-950 to-violet-900/10 text-white">
      <Sidebar
        handleNewChat={handleNewChat}
        chatHistory={chatHistory}
        handleOpenChat={handleOpenChat}
        handleDeleteChat={handleDeleteChat}
        selectedChatId={selectedChatId}
      />

      <div className="flex flex-1 flex-col">
        <ChatHeader />

        <ChatMessages
          messages={messages}
          loading={loading}
        />

        <ChatInput
  setMessages={setMessages}
  setLoading={setLoading}
  loading={loading}
/>
      </div>
    </div>
  );
}

export default Chat;