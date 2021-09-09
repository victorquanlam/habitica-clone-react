import { CoinIcon, HealthIcon, notifySuccess } from '../..';
import { useActions } from '../../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../../redux/typeHooks/useTypedSelector';

import { toast } from 'react-toastify';

interface IMainContentRewardItem {
  price: number;
  name: string;
  category: string;
  img: string;
}

const MainContentRewardItem: React.FC<IMainContentRewardItem> = ({
  price,
  name,
  category,
  img,
}) => {
  const { money } = useTypedSelector((state) => state.user);
  const { setMinusUserMoney, setUserHealth, setUserThing } = useActions();

  const notifySmallValueMoney = () => toast.error(<div>You are running out of coins</div>);
  const notifySuccessPursue = () =>
    toast.success(<div>Purchase successful, check inventory</div>);

  const onClickItem = (price: number) => () => {
    if (money >= price) {
      setMinusUserMoney(price);
      if (category === 'Health flask') {
        setUserHealth(25);
        notifySuccess('life', 25, <HealthIcon />);
      }
      if (category === 'Thing') {
        setUserThing({ category, name, price, img });
        notifySuccessPursue();
      }
    } else {
      notifySmallValueMoney();
    }
  };
  return (
    <div className='shop-main-content__column'>
      <div onClick={onClickItem(price)} className='shop-main-content__item'>
        <div className='shop-main-content__icon'>
          <img src={img} alt={name} />
        </div>
        <div className='shop-main-content__price'>
          <CoinIcon />
          {price}
        </div>
      </div>
    </div>
  );
};

export default MainContentRewardItem;
