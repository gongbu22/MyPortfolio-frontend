import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams(); // URL에서 id 파라미터를 가져옴

  return (
    <div className="max-w-4xl mx-auto mt-12 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Project {id} Detail</h1>
      <p className="text-lg text-gray-600">
        프로젝트 {id}에 대한 세부 정보입니다. <br />
        개요, 설계 등등 이미지도 넣어야지
      </p>
    </div>
  );
};

export default Detail;
