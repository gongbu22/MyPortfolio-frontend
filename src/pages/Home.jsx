import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProjectList() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const res = await fetch('http://localhost:8000/projects');
    const data = await res.json();
    setProjects(data.projects);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section
  id="projects"
  className="mt-5 min-h-screen flex flex-col items-center justify-center px-4"
>
  {/* <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center">Projects</h2> */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl w-full justify-items-center">
    {projects.map((project) => (
      <Link
        key={project.id}
        to={`/detail/${project.id}`}
        className="bg-white rounded-lg border border-gray-100 shadow-xl p-4 transform transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer w-full max-w-sm min-h-[300px] -translate-y-1"
      >
        <img
          src={`/src/assets/${project.web[0]}`}
          alt={project.name}
          className="w-full h-[200px] object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-700 mb-2">{project.title}</h3>
        {/* <p className="text-gray-500">{project.description}</p> */}
      </Link>
    ))}
  </div>
</section>

  );
}

const Home = () => {
  const [chatbotOpen, setChatbotOpen] = useState(false); 

  // 챗봇 열기/닫기
  const toggleChatbot = () => setChatbotOpen(!chatbotOpen);

  return (
    <main className="h-screen bg-yellow-400 flex md:px-0">
      {/* 왼쪽 프로필 + 오른쪽 챗봇 */}
      <section className="flex w-full relative">
        {/* 왼쪽 프로필 */}
        <div className="w-[320px] bg-yellow-100 p-6 rounded-lg shadow-md z-20">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 mt-10">Yujin's Portfolio</h1>
          <p className="text-lg text-gray-600 mb-6">
            책임감있고 성실한 웹개발자 박유진입니다.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={toggleChatbot} // 버튼 클릭 시 챗봇 열기
              className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              About Me
            </button>
          </div>
        </div>

        {/* 오른쪽 챗봇 창 */}
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
            <div className="flex-1 overflow-auto">
              <div className="flex flex-col space-y-2">
                <div className="bg-gray-100 p-3 rounded-lg self-start max-w-[70%]">
                  <p className="text-gray-800">안녕하세요! 저에 대해 궁금한 점이 무엇인가요?</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg self-end max-w-[70%]">
                  <p className="text-gray-800">답변~</p>
                </div>
              </div>
            </div>
            <input
              type="text"
              placeholder="메시지를 입력하세요..."
              className="p-3 border-t border-gray-300 rounded-b-lg w-full"
            />
          </div>
        </div>

        {/* 오른쪽 프로젝트 */}
        <div className="w-3/4 pl-10">
          <ProjectList />
        </div>
      </section>
    </main>
  );
};

export default Home;
