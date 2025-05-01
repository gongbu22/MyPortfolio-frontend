import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const fastapiUrl = process.env.REACT_APP_FASTAPI_URL || "127.0.0.1";

function ProjectList() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const res = await fetch(`http://${fastapiUrl}/projects`);
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
      id="projects"
      className="mt-5 min-h-screen flex flex-col items-center justify-center px-4"
    >
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
