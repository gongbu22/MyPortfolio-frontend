import { useState } from 'react';
import ProjectList from '../components/ProjectList';
import Chatbot from '../components/Chatbot';
import ProfileSection from '../components/ProfileSection';

function Home() {
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const toggleChatbot = () => setChatbotOpen(!chatbotOpen);

  return (
    // <main className="h-screen flex md:px-0 md:flex-row">
    //   <section className="flex w-full relative">
    //     {/* 왼쪽 사이드바 */}
    //     <div className="relative md:static md:w-[320px] z-20">
    //       <ProfileSection toggleChatbot={toggleChatbot} />
    //     </div>

    //     {/* 프로젝트 리스트 */}
    //     <div className="flex-1 z-10">
    //       <ProjectList />
    //     </div>

    //     {/* 채팅봇: ProjectList 위에 겹치는 구조 */}
    //     <Chatbot chatbotOpen={chatbotOpen} toggleChatbot={toggleChatbot} />
    //   </section>
    // </main>

    <main className="h-screen flex flex-col md:flex-row relative">
      {/* 사이드바: 모바일에서는 상단 */}
      <div className="w-full md:w-[320px] z-20">
        <ProfileSection toggleChatbot={toggleChatbot} />
      </div>

      {/* 프로젝트 리스트: 모바일에서는 아래쪽 */}
      <div className="flex-1 z-10 bg-yellow-300">
        <ProjectList />
      </div>

      {/* 챗봇: 절대 위치로 우측에서 덮는 구조 */}
      <Chatbot chatbotOpen={chatbotOpen} toggleChatbot={toggleChatbot} />
    </main>

  );
}

export default Home;
