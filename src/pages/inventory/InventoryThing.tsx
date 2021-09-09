import React from 'react';

interface IInvetoryThing {
  img: string;
  name: string;
}

const InventoryThing: React.FC<IInvetoryThing> = ({ img, name }) => {
  return (
    <div className='inventory__column'>
      <div className='inventory__item'>
        <div className='inventory__img'>
          <img src={img} alt={name} />
        </div>
        <div className='inventory__title'>{name}</div>
      </div>
    </div>
  );
};

export default InventoryThing;
