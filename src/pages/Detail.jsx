import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
const VITE_FASTAPI_URL = import.meta.env.VITE_FASTAPI_URL || "http://localhost:8000";

const Detail = () => {
  const { num } = useParams();
  const navigate = useNavigate(); 
  const [detail, setDetail] = useState([]);

  // console.log("num: "+num)

  const fetchDetails = async () => {
    const res = await fetch(`${VITE_FASTAPI_URL}/detail/${num}`);
    const data = await res.json();
    setDetail(data);
  };

  useEffect(() => {
    fetchDetails();
  }, [num]);

  // 슬라이더 설정
  const settings = {
    dots: true,             // 하단에 점을 표시
    infinite: true,         // 무한 루프 활성화
    speed: 500,             // 전환 속도
    slidesToShow: 1,        // 한 번에 보일 슬라이드 개수
    slidesToScroll: 1,      // 한 번에 넘길 슬라이드 개수
    arrows: true,           // 좌우 화살표
    adaptiveHeight: true,   // 각 슬라이드에 맞게 높이 조정
  };

  return (
    <div className="max-w-4xl mx-auto p-4 text-left">
      
      <button
        onClick={() => navigate('/')}
        className="mb-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition"
      >
        ← 이전
      </button>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-4 border-b-2 border-gray-500 pb-6 text-center">
        " {detail.title} " 상세 정보
      </h1>

      {/* 웹사이트 이미지 */}
      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">웹사이트</h2>
        <div className="text-xl font-semibold text-gray-700 mb-2 mt-5">
          <div className="w-full">
            {/* 슬라이더 적용 */}
            <Slider {...settings}>
              {detail.web?.map((web, index) => (
                <div key={index}>
                  <img
                    src={`/public/imgs/${web}`}
                    alt={`Design ${index}`}
                    className="w-full h-[400px] object-contain"
                  />
                </div>
              ))}
            </Slider>
            </div>
        </div>
      </section>

      {/* 설계 이미지 - 슬라이드 적용 */}
      <section className="mb-8 mt-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2 mt-5">설계 구조</h2>
        <div className="w-full">
          {/* 슬라이더 적용 */}
          <Slider {...settings}>
            {detail.design?.map((design, index) => (
              <div key={index}>
                <img
                  src={`/public/imgs/${design}`}
                  alt={`Design ${index}`}
                  className="w-full h-[400px] object-contain mx-auto"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* GitHub 주소 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2 mt-2 pt-4">GitHub 주소</h2>
        <ul className="list-disc list-inside">
          {detail.github?.map((github) => (
            <button
              onClick={() => window.location.href = `https://github.com/gongbu22/${github}`}
              className="bg-gray-500 hover:bg-gray-600 text-white m-1"
            >
              {github}
            </button>
          ))}
        </ul>
      </section>

      {/* 프로젝트 개요 */}
      <section className="mb-8 p-6 bg-white rounded-xl shadow-md border border-gray-200-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-3">프로젝트 개요</h2>
        <ul className="list-disc pl-6 m-1">
          {detail.overview?.map((overview) => (
            <li className="m-2">{overview}</li>
          ))}
        </ul>
      </section>

      {/* 특징 */}
      <section className="mb-8 p-6 bg-white rounded-xl shadow-md border border-gray-200-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">특징</h2>
        <ul className="list-disc pl-6 m-1">
          {detail.features?.map((features) => (
            <li className="m-1">{features}</li>
          ))}
        </ul>
      </section>

      {/* 기술 스택 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">기술 스택</h2>
        <ul className="list-disc list-inside text-gray-600">
          {detail.tech_stack?.map((tech_stack) => (
            <button className="bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full m-1 cursor-not-allowed text-sm shadow-sm">
              {tech_stack}
            </button>
          ))}
        </ul>
      </section>

      {/* 기대 효과 */}
      <section className="mb-8 p-6 bg-white rounded-xl shadow-md border border-gray-200-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">기대 효과</h2>
        <ul className="list-disc pl-6 m-1">
          {detail.expected_outcomes?.map((expected_outcomes) => (
            <li className="m-1">{expected_outcomes}</li>
          ))}
        </ul>
      </section>

      
    </div>
  );
};

export default Detail;
