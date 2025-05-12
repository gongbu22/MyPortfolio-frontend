import { useState } from 'react';
import ProjectList from '../components/ProjectList';
import Chatbot from '../components/Chatbot';
import ProfileSection from '../components/ProfileSection';

function Home() {
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const toggleChatbot = () => setChatbotOpen(!chatbotOpen);

  return (

    <main className="h-screen flex flex-col md:flex-row relative">
      <div className="w-full md:w-[400px] z-20">
        <ProfileSection toggleChatbot={toggleChatbot} />
      </div>

      <div className="flex-1 z-10 bg-yellow-300 pt-10">
        <ProjectList />
      </div>

      <Chatbot chatbotOpen={chatbotOpen} toggleChatbot={toggleChatbot} />
    </main>

  );
}

export default Home;
