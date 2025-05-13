function ProfileSection({ toggleChatbot }) {
  return (
    <div className=" bg-yellow-100 p-6 rounded-lg shadow-md z-20 h-screen">
      <h1 className="md:mt-5 text-4xl font-bold text-gray-800 mb-4 text-center">
        Yujin's Portfolio
      </h1>

      <div className="flex justify-center mb-2 md:mt-10">
        <img
          src="/public/imgs/yujin2.jpg"
          alt="Yujin Profile"
          className="w-32 h-40 rounded-none object-cover border-2 border-gray-300"
        />
      </div>

      <p className="text-lg md:mt-5 text-gray-800 text-center leading-relaxed font-semibold">
        책임감있고 성실한<br />
        백엔드 개발자 박유진입니다 <br />
        <br />
      </p>

    

      <div className="md:mt-3 mb-5 ml-6 text-md text-left text-gray-600 grid grid-cols-[90px_1fr] gap-x-2">
        {/* <span className="text-sm text-gray-500 mt-8">간단 소개: 책임감 있고 성실한 IT개발자 입니다.</span> <br /> */}
        <span className="mt-3 font-bold">경험 및 경력</span> 
        <span className="mt-3">: 웹 개발, 클라우드 관련 교육 수료, 1년간 실무 경험 보유</span>
        <span className="mt-5 font-bold">주요 기술</span> 
        <span className="mt-5">: Python, JS, FastAPI, MySQL, Docker, AWS, GitHub 등</span>
        <span className="mt-5 font-bold">💎Phone</span> 
        <span className="mt-5">: 010-5173-0245</span>
        <span className="mt-5 font-bold">📩Email</span> 
        <span className="mt-5">: pyujin42@gmail.com</span>
      </div>

      <div className="flex flex-col items-center space-y-2 md:mt-10">
        <button
          onClick={toggleChatbot}
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          About me
        </button>
        <span className="text-sm text-gray-500">☝️저에 대해 더 알고 싶다면 'About me'를 눌러보세요</span>
        <br />
      </div>

      {/* <div className="mt-50 text-sm text-center text-gray-700 text-sm md:hidden">
        ⬇️ 아래로 스크롤해서 프로젝트를 확인해보세요!
      </div> */}


    </div>
  );
}

export default ProfileSection;
