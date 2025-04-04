import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Home() {
  const navigate = useNavigate();
  const [showButtons, setShowButtons] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleYes = () => {
    setFadeOut(true);
    setTimeout(() => navigate('/quiz'), 800);
  };

  const handleNo = () => {
    setShowButtons(false);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 transition-opacity duration-700 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
      style={{ fontFamily: '"Creepster", cursive' }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Creepster&display=swap"
        rel="stylesheet"
      />
      <h1 className="text-4xl md:text-5xl text-center mb-10">
        김연두 x 송우제 결혼식에...<br />
        <span className="text-red-500">진짜 참여하시겠습니까?</span>
      </h1>
      {showButtons ? (
        <div className="flex gap-6">
          <button
            onClick={handleYes}
            className="bg-green-600 hover:bg-green-700 px-6 py-3 text-xl rounded shadow"
          >
            YES
          </button>
          <button
            onClick={handleNo}
            className="bg-gray-700 hover:bg-gray-800 px-6 py-3 text-xl rounded shadow"
          >
            NO
          </button>
        </div>
      ) : (
        <p className="text-lg mt-10 italic text-gray-400">종료되었습니다...</p>
      )}
    </div>
  );
}