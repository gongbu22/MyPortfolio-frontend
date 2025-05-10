import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const VITE_FASTAPI_URL = import.meta.env.VITE_FASTAPI_URL || "http://localhost:8000";

function ProjectList() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const res = await fetch(`${VITE_FASTAPI_URL}/projects`);
      // console.log(`VITE_FASTAPI_URL: ${VITE_FASTAPI_URL}`);
      const data = await res.json();
      setProjects(data.projects);
    } catch (error) {
      console.error('프로젝트 로딩 실패:', error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl w-full justify-items-center">
        {projects.map((project) => (
          <Link
            key={project.num}
            to={`/detail/${project.num}`}
            className="bg-white rounded-lg border border-gray-100 shadow-xl p-4 transform transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer w-full max-w-sm min-h-[300px] -translate-y-1"
          >
            <img
              src={`/public/imgs/${project.web[0]}`}
              alt={project.name}
              className="w-full h-[200px] object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {project.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ProjectList;
