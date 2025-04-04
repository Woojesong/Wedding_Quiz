
export default function Invitation() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 font-serif">
      <link
        href="https://fonts.googleapis.com/css2?family=Creepster&family=Nanum+Gothic+Coding&display=swap"
        rel="stylesheet"
      />
      <div className="max-w-xl w-full text-center border border-gray-700 bg-black/60 backdrop-blur-md p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-[Creepster] text-red-400 mb-4">결혼식 안내</h1>
        <p className="text-lg leading-relaxed text-gray-100 mb-6">
          당신은 모든 수칙을 기억한 채 이곳까지 도달했습니다.<br/>
          이제, 진짜 초대장을 전해드립니다.
        </p>
        <div className="text-left space-y-2 text-white text-base">
          <p>📍 <span className="font-bold">신랑:</span> <span className="text-pink-400">송우제</span></p>
          <p>📍 <span className="font-bold">신부:</span> <span className="text-pink-300">김연두</span></p>
          <p>📍 <span className="font-bold">일시:</span> 2025년 7월 19일 (토) 오후 2시</p>
          <p>📍 <span className="font-bold">장소:</span> <span className="text-green-300">동대문 JK 아트컨벤션</span></p>
        </div>
        <div className="mt-6">
          <a
            href="https://map.naver.com/" target="_blank"
            className="inline-block bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded shadow transition-all"
          >
            지도 보기
          </a>
        </div>
      </div>
    </div>
  );
}
