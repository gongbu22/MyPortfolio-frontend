function ProfileSection({ toggleChatbot }) {
  return (
    <div className=" bg-yellow-100 p-6 rounded-lg shadow-md z-20 h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 mt-10 text-center">
        Yujin's Portfolio
      </h1>

      <div className="flex justify-center mb-4">
        <img
          src="/public/imgs/yujin.jpg"
          alt="Yujin Profile"
          className="w-32 h-40 rounded-none object-cover border-2 border-gray-300"
        />
      </div>

      <p className="text-lg text-gray-600 mb-4 text-center leading-relaxed font-semibold">
        책임감있고 성실한<br />
        IT개발자 박유진입니다 <br />
        <br />
      </p>

      <div className="flex flex-col items-center space-y-2">
        <span className="text-sm text-gray-500">저에 대해 더 알고 싶다면 <br /> 버튼을 눌러보세요 👇</span>
        <button
          onClick={toggleChatbot}
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          About me
        </button>
        <span className="text-sm text-gray-500 mt-8">📩 pyujin42@gmail.com</span>
        <br />
        <div className="mt-50 text-center text-gray-700 text-sm md:hidden">
          ⬇️ 아래로 스크롤해서 프로젝트를 확인해보세요!
        </div>
      </div>


    </div>
  );
}

export default ProfileSection;
