import {
  useEffect,
  useRef,
  useState,
} from "react";
import Message from "./Message";

function ChatMessages({
  messages,
  loading,
}) {
  const bottomRef = useRef(null);
  const [dots, setDots] = useState("");

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  useEffect(() => {
    if (!loading) {
      setDots("");
      return;
    }

    const interval = setInterval(() => {
      setDots((prev) =>
        prev.length >= 3
          ? ""
          : prev + "."
      );
    }, 400);

    return () => clearInterval(interval);
  }, [loading]);

  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-5">
        {messages.map((msg, index) => (
          <Message
            key={index}
            sender={msg.sender}
            text={msg.text}
          />
        ))}

        {loading && (
          <Message
            sender="bot"
            text={`🤔 Thinking${dots}`}
          />
        )}

        <div ref={bottomRef}></div>
      </div>
    </div>
  );
}

export default ChatMessages;