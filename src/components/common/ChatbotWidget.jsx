import { useState, useRef, useEffect } from "react";
import { MessageSquare } from "lucide-react";
import ReactMarkdown from "react-markdown";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { chatbot } from "../../services/oprations/chatbotAPI";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content:
        "Hi! How can I help you today? Use either the project issue key or project name to get better insights",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const dispatch = useDispatch();

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setHistory((prev) => [...prev, input]);
    setInput("");
    setLoading(true);
    setHistoryIndex(-1);

    try {
      const botResponse = await dispatch(chatbot(input));
      const botMessage = { role: "bot", content: botResponse };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "Sorry, something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0 && historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 font-sans">
      {isOpen && (
        <div className="absolute bottom-14 right-2 bg-[#00254D] border border-[#1B3958] rounded-2xl shadow-2xl w-80 h-96 flex flex-col overflow-hidden animate-fadeIn transition-all duration-300">
          <div className="bg-[#1B3958] text-white px-4 py-2 font-bold text-sm tracking-wide shadow-inner">
            🤖 AI Assistant
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-sm scrollbar-thin scrollbar-thumb-blue-200">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={classNames(
                  "p-2 rounded-xl max-w-[90%] transition-all duration-300",
                  {
                    "bg-[#1E3A5F] self-end text-white text-right":
                      msg.role === "user",
                    "bg-[#1A2F45] self-start text-white text-left":
                      msg.role === "bot",
                  }
                )}
              >
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>
            ))}
            {loading && (
              <div className="text-blue-200 text-left animate-pulse">
                AI is thinking...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-2 border-t border-[#1B3958] flex items-center gap-2 bg-[#00254D]">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 rounded-md text-sm text-white bg-[#0F2C4C] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B85B2]"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className="bg-gradient-to-r from-[#1B4D6F] to-[#6B85B2] text-white px-4 py-2 rounded-md text-sm shadow-md hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
              onClick={sendMessage}
              disabled={loading}
            >
              Send
            </button>
          </div>
        </div>
      )}

      <button
        className="absolute bottom-0 right-0 bg-gradient-to-r from-[#1B4D6F] to-[#6B85B2] hover:from-[#6B85B2] hover:to-[#1B4D6F] text-white p-3 rounded-full shadow-xl transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageSquare className="w-5 h-5" />
      </button>
    </div>
  );
}
