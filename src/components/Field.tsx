const Field = () => {
  return (
    <div className='relative h-[40rem] w-[60rem] bg-green-500 border-4 border-white'>
      <div className='absolute h-4 w-4 border-b-4 border-r-4 border-white rounded-br-full'></div>
      <div className='absolute right-0 border-b-4 border-l-4 h-4 w-4 border-white rounded-bl-full'></div>
      <div className='absolute bottom-0 border-t-4 border-r-4 h-4 w-4 border-white rounded-tr-full'></div>
      <div className='absolute bottom-0 border-t-4 border-l-4 right-0 h-4 w-4 border-white rounded-tl-full'></div>
      <div className='absolute left-[calc(50%-2px)] h-full w-1 bg-white'></div>
      <div className='absolute top-[calc(50%-6rem)] left-[calc(50%-6rem)] h-[12rem] w-[12rem] rounded-full border-4 border-white'></div>
      <div className='absolute top-[calc(50%-6px)] left-[calc(50%-6px)] h-3 w-3 rounded-full bg-white'></div>
      <div className='absolute top-[calc(50%-12rem)] z-10 h-[24rem] w-[10rem] border-l-0 border-4 border-white bg-green-500'></div>
      <div className='absolute top-[calc(50%-12rem)] z-10 right-0 h-[24rem] w-[10rem] border-r-0 border-4 border-white bg-green-500'></div>
      <div className='absolute top-[calc(50%-6rem)] z-10 h-[12rem] w-[4rem] border-l-0 border-4 border-white bg-green-500'></div>
      <div className='absolute top-[calc(50%-6rem)] z-10 right-0 h-[12rem] w-[4rem] border-r-0 border-4 border-white bg-green-500'></div>
      <div className='absolute top-[calc(50%-4rem)] left-[4rem] h-[8rem] w-[8rem] rounded-full border-4 border-white'></div>
      <div className='absolute top-[calc(50%-4rem)] right-[4rem] h-[8rem] w-[8rem] rounded-full border-4 border-white'></div>
    </div>
  );
};

export default Field;
