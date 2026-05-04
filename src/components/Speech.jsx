import { useState, useEffect } from 'react';

const phrases = [
  "Creative mind with a builder's heart",
  "Makes ideas real — with code and vision",
  "Builds brands, websites and digital freedom",
];

const Speech = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hold = setTimeout(() => {
      setVisible(false);
      const swap = setTimeout(() => {
        setIndex(i => (i + 1) % phrases.length);
        setVisible(true);
      }, 400);
      return () => clearTimeout(swap);
    }, 3000);
    return () => clearTimeout(hold);
  }, [index]);

  return (
    <div className='flex items-end gap-2 justify-between z-10 w-full'>
      <div className="w-full h-[120px] bg-white text-[#555] px-6 py-6 text-[18px] rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl flex items-center overflow-hidden">
        <span
          style={{
            display: 'block',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}
        >
          {phrases[index]}
        </span>
      </div>
      <img src="/man.png" alt="" className="w-[50px] h-[50px] flex-shrink-0 rounded-full object-cover bg-[#dd4c62]"/>
    </div>
  );
};

export default Speech;