const Shape = () => {
  return (
    <>
      <div className="relative w-full h-[250px] md:h-[400px] lg:h-[500px]">
        <svg
          className="absolute w-full h-full translate-y-[400px] md:translate-y-[350px] lg:translate-y-1/3"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="50" style={{ fill: 'hsl(var(--primary))' }}/>
        </svg>        
      </div>     
    </>
  );
};

export default Shape;