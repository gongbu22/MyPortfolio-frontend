import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ProjectList() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const res = await fetch('http://localhost:8000/projects');
    const data = await res.json();
    console.log(data);
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="mt-12 max-w-4xl w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <Link key={project.id} to={`/detail/${project.id}`} className="bg-white rounded-lg shadow-md p-4 transform transition-transform hover:scale-105 hover:shadow-lg cursor-pointer">
            {/* 이미지 */}
            <img
              src={project.imageUrl || "https://via.placeholder.com/150"} // 이미지 URL이 없으면 placeholder 사용
              alt={project.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">{project.name}</h3>
            <p className="text-gray-500">{project.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

const Home = () => {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center pt-24 px-6 md:px-0">

      {/* Main */}
      <section className="mb-12 text-center max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Yujin's Portfolio</h1>
        <p className="text-lg text-gray-600 mb-6">책임감있고 성실한 웹개발자 박유진입니다.</p>
        <div className="flex justify-center space-x-4">
          <a href="#projects" className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Projects
          </a>
          <a href="#about" className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
            About me
          </a>
        </div>
      </section>

      {/* Projects 컴포넌트 추가 */}
      <ProjectList />

      {/* About Me */}
      <section id="about" className="mt-12 max-w-4xl w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">About Me</h2>
        <p className="text-lg text-gray-600">
          안녕하세요! 저는 백엔드 개발자를 꿈꾸는 신입 개발자 박유진입니다. <br />
          팀 프로젝트와 개인 프로젝트를 통해 실무에 가까운 구조를 구현하고, MSA 구조와 CI/CD 자동화에 흥미를 느껴 학습하고 있습니다.
          <br /><br />
          비전공자로 시작했지만, 탄탄한 백엔드 로직 구현과 안정적인 배포를 목표로 매일 성장 중입니다. 새로운 기술을 배우는 데 두려움이 없고,
          문제 해결에 대한 집요함이 제 강점입니다.
        </p>
      </section>

    </main>
  );
};

export default Home;
