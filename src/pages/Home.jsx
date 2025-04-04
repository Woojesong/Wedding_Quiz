
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < rules.length - 1) {
      setStep(step + 1);
    } else {
      navigate('/invitation');
    }
  };

  const rules = [
    '【수칙 1】<br/><span class="text-red-400">낯선 초대장</span>은 절대 <span class="font-bold text-white">혼자 열지 마십시오</span>.<br/>창문이 열려 있다면 먼저 닫고,<br/>거울은 천으로 덮은 뒤에 봉투를 여는 것이 안전합니다.',
    '【수칙 2】<br/>금박 문양이 새겨진 봉투는 반드시 <span class="text-red-300">양손으로 받으십시오</span>.<br/>한 손으로만 받으면 초대장은 당신을 인정하지 않을 수 있습니다.',
    '【수칙 3】<br/>초대장을 펼쳤을 때, 신랑의 이름을 <span class="text-pink-400 font-bold text-xl">크게 세 번</span> 읽으십시오:<br/><span class="text-pink-500 font-extrabold text-2xl">송우제</span><br/>읽지 않으면 뒤에서 누군가 속삭일 수 있습니다.<br/>읽었다면, <span class="italic text-gray-300">등 뒤로 스치는 한기</span>를 느낄지도 모릅니다.',
    '【수칙 4】<br/>신부의 이름은 <span class="text-pink-300 italic">속삭이듯 조용히</span> 부르십시오:<br/><span class="text-pink-400 font-bold text-xl">김연두</span><br/>큰 소리로 부르면 당신이 아닌 <span class="text-red-400">다른 이가 응답</span>할 수 있습니다.',
    '【수칙 5】<br/>날짜가 흐릿하게 보이더라도 <span class="text-blue-200">정확히 기억</span>하십시오.<br/><span class="font-bold text-white">2025년 7월 19일</span>, 그날은 이미 정해진 날입니다.',
    '【수칙 6】<br/>시간을 착각하지 마십시오. <span class="text-yellow-300">오후 2시 정각</span>입니다.<br/>5분이라도 늦는다면, 문은 다시 열리지 않습니다.',
    '【수칙 7】<br/>장소는 <span class="text-green-300 font-medium">동대문 JK 아트컨벤션</span>입니다.<br/>다른 장소를 검색하지 마십시오.<br/>지도에는 나타나지 않을 수도 있습니다.',
    '【수칙 8】<br/><span class="text-gray-300">초대장을 읽는 동안</span>,<br/>누군가 당신 뒤에 있더라도 <span class="text-red-400 font-semibold">절대 돌아보지 마십시오</span>.<br/>그 시선과 마주치면, <span class="text-red-500">초대의 주체가 바뀔 수도 있습니다.</span>',
    '【수칙 9】<br/>수칙을 모두 읽은 뒤에만 <span class="underline text-white">참석 여부를 결정</span>하십시오.<br/>결정 전에는 아무것도 시작되지 않지만,<br/>결정한 후엔, 되돌릴 수 없습니다.',
    '【수칙 10】<br/><span class="text-red-400">이 모든 수칙을 기억하고도 참석하신다면...</span><br/>결혼식 정보는 다음과 같습니다:'
  ];

  const finalInfo = (
    <div className="text-left text-base leading-relaxed mt-6 space-y-2 text-white">
      <p>📍 <span className="font-bold">신랑:</span> <span className="text-pink-400">송우제</span></p>
      <p>📍 <span className="font-bold">신부:</span> <span className="text-pink-300">김연두</span></p>
      <p>📍 <span className="font-bold">일시:</span> 2025년 7월 19일 (토) 오후 2시</p>
      <p>📍 <span className="font-bold">장소:</span> <span className="text-green-300">동대문 JK 아트컨벤션</span></p>
    </div>
  );

  return (
    <div
      className="flex items-center justify-center min-h-screen w-full px-6 py-12 bg-[#111111] text-white font-serif"
      style={{ fontFamily: '"Creepster", "Nanum Gothic Coding", monospace' }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Creepster&family=Nanum+Gothic+Coding&display=swap"
        rel="stylesheet"
      />
      <div className="text-center max-w-xl w-full p-6 border border-gray-700 bg-black/70 backdrop-blur-md rounded-lg shadow-lg">
        <p
          className="text-lg md:text-xl leading-relaxed tracking-wide drop-shadow-[0_1px_1px_rgba(255,255,255,0.2)] whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: rules[step] }}
        />
        {step === rules.length - 1 && finalInfo}
        <button
          onClick={handleNext}
          className="mt-10 bg-red-700 hover:bg-red-800 px-6 py-3 text-base md:text-lg rounded-lg shadow-lg transition-all duration-300"
        >
          {step === rules.length - 1 ? '청첩장 확인 완료' : '다음 수칙 보기'}
        </button>
      </div>
    </div>
  );
}
