import { InventoryThing } from '../../components/';
import { useTypedSelector } from '../../redux/typeHooks/useTypedSelector';

const Inventory: React.FC = () => {
  const { items } = useTypedSelector((state) => state.userThing);
  return (
    <div className='inventory'>
      <div className='inventory__content'>
        <div className='inventory__row'>
          <>
            {items.map((item) => (
              <InventoryThing {...item} />
            ))}
          </>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
