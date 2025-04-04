
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
    '【수칙 1】 낯선 초대장은 절대 혼자 열지 마십시오. \n창문이 열려 있다면 먼저 닫고, 거울은 천으로 덮은 뒤에 봉투를 여는 것이 안전합니다.',
    '【수칙 2】 금박 문양이 새겨진 봉투는 반드시 양손으로 받으십시오. \n한 손으로만 받으면 초대장은 당신을 인정하지 않을 수 있습니다.',
    '【수칙 3】 초대장을 펼쳤을 때, 신랑의 이름을 크게 세 번 읽으십시오: 송우제.\n만약 읽지 않는다면, 뒤에서 누군가 속삭일 수 있습니다.\n읽었다면, 등 뒤로 스치는 한기를 느낄지도 모릅니다.',
    '【수칙 4】 신부의 이름은 속삭이듯 조용히 부르십시오: 김연두.\n큰 소리로 부르면 당신이 아닌 다른 이가 응답할 수 있습니다.',
    '【수칙 5】 날짜가 흐릿하게 보이더라도 정확히 기억하십시오.\n2025년 7월 19일, 그날은 이미 정해진 날입니다.',
    '【수칙 6】 시간을 착각하지 마십시오. 오후 2시 정각입니다.\n5분이라도 늦는다면, 문은 다시 열리지 않습니다.',
    '【수칙 7】 장소는 동대문 JK 아트컨벤션입니다.\n다른 장소를 검색하지 마십시오. 지도에는 나타나지 않을 수도 있습니다.',
    '【수칙 8】 초대장을 읽는 동안, 누군가 당신 뒤에 있더라도 절대 돌아보지 마십시오.\n그 시선과 마주치면, 초대의 주체가 바뀔 수도 있습니다.',
    '【수칙 9】 수칙을 모두 읽은 뒤에만 참석 여부를 결정하십시오.\n결정을 내리기 전에는 아무것도 시작되지 않습니다. 그러나 결정한 후엔, 되돌릴 수 없습니다.',
    '【수칙 10】 그리고 마지막으로, 이 모든 수칙을 기억하고도 참석하신다면...\n결혼식 정보는 다음과 같습니다:'
  ];

  const finalInfo = (
    <div className="text-left text-lg leading-relaxed mt-6">
      <p>📍 <strong>신랑:</strong> 송우제</p>
      <p>📍 <strong>신부:</strong> 김연두</p>
      <p>📍 <strong>일시:</strong> 2025년 7월 19일 (토) 오후 2시</p>
      <p>📍 <strong>장소:</strong> 동대문 JK 아트컨벤션</p>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 transition-opacity duration-700 font-serif">
      <link
        href="https://fonts.googleapis.com/css2?family=Nanum+Brush+Script&family=Creepster&display=swap"
        rel="stylesheet"
      />
      <div className="text-center max-w-xl">
        <p className="text-xl md:text-2xl font-[Creepster] text-red-400 leading-relaxed whitespace-pre-line">
          {rules[step]}
        </p>
        {step === rules.length - 1 && finalInfo}
        <button
          onClick={handleNext}
          className="mt-10 bg-gray-800 hover:bg-gray-700 px-6 py-3 text-lg rounded shadow"
        >
          {step === rules.length - 1 ? '청첩장 확인 완료' : '다음 수칙 보기'}
        </button>
      </div>
    </div>
  );
}
