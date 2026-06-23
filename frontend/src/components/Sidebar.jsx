import { Plus, Trash2 } from "lucide-react";

function Sidebar({
  handleNewChat,
  chatHistory,
  handleOpenChat,
  handleDeleteChat,
  selectedChatId,
}) {
  return (
    <aside className="hidden w-72 border-r border-slate-800 bg-slate-900 md:flex md:flex-col">
      {/* New Chat Button */}
      <div className="p-5">
        <button
          onClick={handleNewChat}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-3 font-semibold transition hover:scale-105"
        >
          <Plus size={20} />
          New Chat
        </button>
      </div>

      {/* Chat History */}
      <div className="flex-1 space-y-3 overflow-y-auto px-4 pb-5">
        {chatHistory.length === 0 ? (
          <p className="text-sm text-slate-500">
            No chats yet
          </p>
        ) : (
          chatHistory.map((chat) => (
            <div
              key={chat.id}
              onClick={() => handleOpenChat(chat)}
              className={`group flex cursor-pointer items-center justify-between rounded-xl p-4 transition ${
                selectedChatId === chat.id
                  ? "bg-violet-700"
                  : "bg-slate-800 hover:bg-slate-700"
              }`}
            >
              <p className="truncate text-sm">
                {chat.title}
              </p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteChat(chat.id);
                }}
                className="rounded-lg p-1 opacity-0 transition hover:bg-slate-600 group-hover:opacity-100"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))
        )}
      </div>
    </aside>
  );
}

export default Sidebar;