import { useState } from 'react';
import Shirt from './Shirt';

const Field = () => {
  const [positions, setPositions] = useState<any>({
    0: [320, 10],
    1: [80, 200],
    2: [230, 150],
    3: [410, 150],
    4: [560, 200],
    5: [200, 375],
    6: [440, 375],
    7: [320, 550],
    8: [80, 700],
    9: [320, 800],
    10: [560, 700],
  });

  const [positionToChange, setPositionToChange] = useState({
    shirt: 0,
    position: [0, 0],
  });

  const changePosition = (shirt: number, positionsArray: number[]) => {
    setPositions((old: any) => {
      return {
        ...old,
        [shirt]: positionsArray,
      };
    });
  };

  return (
    <div
      id='field'
      className='relative top-[calc(50%-20rem)] left-[calc(50%-30rem)] h-[40rem] w-[60rem] bg-green-500 border-4 border-white'
      onDrop={(e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
      }}
      onDragOver={(e) => {
        e.preventDefault();

        console.log(window.innerHeight);

        changePosition(positionToChange.shirt, [
          e.clientY - window.innerHeight / 2 + 362 - positionToChange.position[0],
          e.clientX - window.innerWidth / 2 + 476 - positionToChange.position[1],
        ]);
      }}
    >
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
      <Shirt shirtId='0' position={positions[0]} setPositionToChange={setPositionToChange} />
      <Shirt shirtId='1' position={positions[1]} setPositionToChange={setPositionToChange} />
      <Shirt shirtId='2' position={positions[2]} setPositionToChange={setPositionToChange} />
      <Shirt shirtId='3' position={positions[3]} setPositionToChange={setPositionToChange} />
      <Shirt shirtId='4' position={positions[4]} setPositionToChange={setPositionToChange} />
      <Shirt shirtId='5' position={positions[5]} setPositionToChange={setPositionToChange} />
      <Shirt shirtId='6' position={positions[6]} setPositionToChange={setPositionToChange} />
      <Shirt shirtId='7' position={positions[7]} setPositionToChange={setPositionToChange} />
      <Shirt shirtId='8' position={positions[8]} setPositionToChange={setPositionToChange} />
      <Shirt shirtId='9' position={positions[9]} setPositionToChange={setPositionToChange} />
      <Shirt shirtId='10' position={positions[10]} setPositionToChange={setPositionToChange} />
    </div>
  );
};

export default Field;
