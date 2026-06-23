import { useState } from "react";
import { Send } from "lucide-react";
import API from "../services/api";

function ChatInput({
  setMessages,
  setLoading,
}) {
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userText = input;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userText,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await API.post("/chat", {
        message: userText,
      });

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: response.data.reply,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "❌ Something went wrong",
        },
      ]);

      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-t border-slate-800 p-5 pb-8">
      <div className="flex gap-4">
        <input
          type="text"
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          placeholder="Type your message..."
          className="flex-1 rounded-2xl border border-slate-700 bg-slate-900/70 px-5 py-4 outline-none backdrop-blur focus:border-violet-500"
        />

        <button
          onClick={sendMessage}
          className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 transition hover:scale-105"
        >
          <Send />
        </button>
      </div>
    </div>
  );
}

export default ChatInput;