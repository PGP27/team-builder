import Draggable from 'react-draggable';

interface Props {
  defaultPosition: number[];
  number: number;
}

const Shirt = ({ defaultPosition, number }: Props) => {
  return (
    <Draggable defaultPosition={{ y: defaultPosition[0] - 46, x: defaultPosition[1] }}>
      <div className='absolute z-50 h-fit w-fit flex flex-col items-center justify-center'>
        <div className='relative h-[4rem] w-[2rem] bg-white'>
          <div className='absolute top-[1px] -left-[14px] h-[2rem] w-[1rem] z-30 bg-white rotate-45 ' />
          <div className='absolute top-[1px] -right-[14px] h-[2rem] w-[1rem] z-30 bg-white -rotate-45 ' />
          <input
            type='text'
            defaultValue={number}
            className='absolute h-full w-full outline-none text-center text-xl z-40'
          />
        </div>
        <input type='text' className='w-28 mt-1 outline-none text-center z-40' />
      </div>
    </Draggable>
  );
};

export default Shirt;
