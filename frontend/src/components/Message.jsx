import { Bot, User } from "lucide-react";
import ReactMarkdown from "react-markdown";

function Message({ sender, text }) {
  const isBot = sender === "bot";

  return (
    <div
      className={`flex items-end gap-3 ${
        isBot
          ? "justify-start"
          : "justify-end"
      }`}
    >
      {isBot && (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 shadow-lg">
          <Bot size={20} />
        </div>
      )}

      <div
        className={`max-w-3xl rounded-3xl px-6 py-4 shadow-xl whitespace-pre-wrap break-words ${
          isBot
            ? "bg-slate-800/90 text-white backdrop-blur-xl"
            : "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white"
        }`}
      >
        {isBot ? (
          <ReactMarkdown>
            {text}
          </ReactMarkdown>
        ) : (
          text
        )}
      </div>

      {!isBot && (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-700 shadow-lg">
          <User size={20} />
        </div>
      )}
    </div>
  );
}

export default Message;