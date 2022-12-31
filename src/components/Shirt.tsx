interface Props {
  shirtId: string;
  position: number[];
  setPositionToChange: any;
}

const Shirt = ({ shirtId, position, setPositionToChange }: Props) => {
  return (
    <div
      id={shirtId}
      draggable
      className='absolute h-fit w-fit flex flex-col items-center justify-center'
      style={{ top: `${position[0] - 46}px`, left: `${position[1]}px` }}
      onDragStart={(e) => {
        const pos = e.currentTarget.getBoundingClientRect();
        setPositionToChange({ shirt: shirtId, position: [e.clientY - pos.y, e.clientX - pos.x] });
      }}
    >
      <div className='relative h-[4rem] w-[2rem] bg-white'>
        <div className='absolute top-[1px] -left-[14px] h-[2rem] w-[1rem] z-30 bg-white rotate-45 ' />
        <div className='absolute top-[1px] -right-[14px] h-[2rem] w-[1rem] z-30 bg-white -rotate-45 ' />
        <input
          type='text'
          defaultValue={Number(shirtId) + 1}
          className='absolute h-full w-full outline-none text-center text-xl z-40'
        />
      </div>
      <input type='text' className='w-28 mt-1 outline-none text-center z-40' />
    </div>
  );
};

export default Shirt;
