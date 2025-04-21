import { useState } from 'react';
import ProjectList from '../components/ProjectList';
import Chatbot from '../components/Chatbot';
import ProfileSection from '../components/ProfileSection';

function Home() {
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const toggleChatbot = () => setChatbotOpen(!chatbotOpen);

  return (
    <main className="h-screen flex md:px-0">
      <section className="flex w-full relative">
        <ProfileSection toggleChatbot={toggleChatbot} />
        <Chatbot chatbotOpen={chatbotOpen} toggleChatbot={toggleChatbot} />
        <div className="w-3/4 pl-10">
          <ProjectList />
        </div>
      </section>
    </main>
  );
}

export default Home;
