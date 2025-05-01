import { useState, useEffect, useRef } from 'react';
const chatUrl = process.env.REACT_APP_CHATBOT_URL;

function Chatbot({ chatbotOpen, toggleChatbot }) {
  const [messages, setMessages] = useState([
    { from: 'bot', text: `저에 대해 궁금한 것이 무엇인가요?` }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  const suggestions = ['성격', '가치관', '수상경력'];

  const sendMessage = async (question) => {
    setMessages((prev) => [...prev, { from: 'user', text: question }]);

    const res = await fetch(`http://chatbot-service:8001/chatbot`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question })
    });
    const data = await res.json();
    // console.log(data)
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
    // chatEndRef.current.scrollIntoView()를 호출하여 최신 메시지로 스크롤
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="z-10">
      <div
        className={`${
          chatbotOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-1000 ease-out absolute left-0 top-0 w-[320px] h-full bg-white/90 shadow-xl p-4 rounded-l-lg flex flex-col`}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">About Me</h3>
          <button onClick={toggleChatbot} className="text-gray-500 text-m mr-5">X</button>
        </div>

        {/* 추천 질문 버튼 영역 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {suggestions.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleSuggestionClick(item)}
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-300 transition"
            >
              {item}
            </button>
          ))}
        </div>

        {/* 채팅 메시지 영역 */}
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
          </div>
        </div>


        {/* 입력창 */}
        <input
          type="text"
          placeholder="메시지 작성 후 Enter를 눌러주세요."
          className="p-3 border-t border-gray-700 rounded-b-lg w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}

export default Chatbot;
