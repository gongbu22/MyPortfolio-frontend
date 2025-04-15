import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();

  return (
    <div className="max-w-4xl mx-auto mt-24 p-6 text-left">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Project {id} 상세 정보</h1>

      {/* 프로젝트 개요 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">프로젝트 개요</h2>
        <p className="text-gray-600">
          이 프로젝트는 백엔드와 프론트엔드를 분리한 MSA 구조의 웹사이트입니다.
        </p>
      </section>

      {/* 설계 이미지 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">설계 구조</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img
            src="/images/design-diagram1.png"
            alt="설계 이미지 1"
            className="w-full h-auto object-contain rounded shadow-md"
          />
          <img
            src="/images/design-diagram2.png"
            alt="설계 이미지 2"
            className="w-full h-auto object-contain rounded shadow-md"
          />
        </div>
      </section>

      {/* 기술 스택 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">기술 스택</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>React + Tailwind CSS</li>
          <li>FastAPI</li>
          <li>MariaDB</li>
          <li>Jenkins, ArgoCD, Kubernetes</li>
        </ul>
      </section>

      {/* 기대 효과 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">기대 효과</h2>
        <p className="text-gray-600">
          배포 자동화, 빠른 유지보수, 모듈화된 구조를 통한 확장성 향상.
        </p>
      </section>

      {/* 웹사이트 이미지 */}
      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">웹사이트 미리보기</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img
            src="/images/project-preview1.png"
            alt="웹사이트 이미지 1"
            className="w-full h-auto object-contain rounded shadow-md"
          />
          <img
            src="/images/project-preview2.png"
            alt="웹사이트 이미지 2"
            className="w-full h-auto object-contain rounded shadow-md"
          />
        </div>
      </section>
    </div>
  );
};

export default Detail;
