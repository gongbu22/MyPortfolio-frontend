import { useState, useEffect, useRef } from 'react';
const VITE_CHATBOT_URL = import.meta.env.VITE_CHATBOT_URL || "http://127.0.0.1:8081";

function Chatbot({ chatbotOpen, toggleChatbot }) {
  const [messages, setMessages] = useState([
    { from: 'bot', text: ` ⬆️ 궁금한 것을 클릭해주세요! 한 문장으로 간단히 답해드립니다.` }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  const suggestions = ['지원동기', '가치관', '기술스택', '수상경력', '경험', '자격증' ];

  const sendMessage = async (question) => {
    setMessages((prev) => [...prev, { from: 'user', text: question }]);
    const res = await fetch(`${VITE_CHATBOT_URL}/chatbot`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question })
    });
    const data = await res.json();
    setMessages((prev) => [...prev, { from: 'bot', text: data.answer }]);
  };

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter' && input.trim()) {
      const question = input.trim();
      setInput('');
      sendMessage(question);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    sendMessage(suggestion);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div
      className={`${
    chatbotOpen ? 'translate-x-0' : 'translate-x-full'
  } transition-transform duration-700 ease-out fixed top-0 right-0 w-[320px] h-screen bg-white/90 shadow-xl p-4 flex flex-col z-50`}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">About Me</h3>
        <button onClick={toggleChatbot} className="text-gray-500 text-m mr-5 border-2 border-gray-300">X</button>
      </div>

      {/* 추천 질문 버튼 */}
      <div className="flex flex-wrap gap-2 mb-4">
        {suggestions.map((item, idx) => (
          <button
            key={idx}
            onClick={() => handleSuggestionClick(item)}
            className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-600 transition"
          >
            {item}
          </button>
        ))}
      </div>

      {/* 메시지 영역 */}
      <div className="flex-1 overflow-auto">
        <div className="flex flex-col space-y-2">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-lg max-w-[70%] ${
                msg.from === 'bot' ? 'bg-gray-100 self-start' : 'bg-blue-100 self-end'
              }`}
            >
              <p className="text-gray-800">{msg.text}</p>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
      </div>

      {/* 입력창 */}
      <input
        type="text"
        placeholder="질문 작성 후 Enter를 눌러주세요."
        className="p-3 border-t border-gray-700 rounded-b-lg w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default Chatbot;
