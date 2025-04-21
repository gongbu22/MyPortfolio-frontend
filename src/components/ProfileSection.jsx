function ProfileSection({ toggleChatbot }) {
    return (
      <div className="w-[320px] bg-yellow-100 p-6 rounded-lg shadow-md z-20">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 mt-10">Yujin's Portfolio</h1>
        <p className="text-lg text-gray-600 mb-6">
          책임감있고 성실한 웹개발자 박유진입니다.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={toggleChatbot}
            className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            About Me
          </button>
        </div>
      </div>
    );
  }
  
  export default ProfileSection;
  