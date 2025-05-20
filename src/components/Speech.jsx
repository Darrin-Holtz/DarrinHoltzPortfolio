import { TypeAnimation } from 'react-type-animation';


const Speech = () => {
  return (
    <div className='hidden w-1/2 lg:flex items-end gap-2 justify-between z-10'>
        <div className="w-full lg:h-[120px] bg-white text-[#555] px-6 py-6 text-[18px] rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl">
          <TypeAnimation
            sequence={[
              1000,
              'Creative mind with a builder\'s heart',
              1000,
              'Makes ideas real - with code and vision',
              1000,
              'Builds brands, websites and digital freedom',
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
          />
        </div>
        <img src="/man.png" alt="" className="w-[50px] h-[50px] rounded-full object-cover bg-[#dd4c62]"/>
    </div>
  )
}

export default Speech