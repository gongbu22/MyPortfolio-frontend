import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);

  const fetchDetails = async () => {
    const res = await fetch(`http://localhost:8000/detail/${id}`);
    const data = await res.json();
    setDetail(data);
  };

  useEffect(() => {
    fetchDetails();
  }, [id]);

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
    <div className="max-w-4xl mx-auto mt-20 p-4 text-left">
      <h1 className="text-4xl font-bold text-gray-900 mb-4 border-b-2 border-gray-500 pb-6 text-center">
        "{detail.title}" 상세 정보
      </h1>

      {/* 웹사이트 이미지 */}
      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">웹사이트 미리보기</h2>
        <div className="text-xl font-semibold text-gray-700 mb-2 mt-5">
          <div className="w-full">
            {/* 슬라이더 적용 */}
            <Slider {...settings}>
              {detail.web?.map((web, index) => (
                <div key={index}>
                  <img
                    src={`/src/assets/${web}`}
                    alt={`Design ${index}`}
                    className="w-full h-[400px] object-contain mx-auto"
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
                  src={`/src/assets/${design}`}
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
