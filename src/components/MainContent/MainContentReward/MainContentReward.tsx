import { useState } from 'react';

import { MainContentRewardTask, Tabs, MainContentRewardItem } from '../..';
import { useActions } from '../../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../../redux/typeHooks/useTypedSelector';

import SwordOneImg from '../../helpers/images/Item__00.png';
import SwordSecondImg from '../../helpers/images/Item__01.png';
import HealthFlaskImg from '../../helpers/images/HealthFlask.png';

const shopItems = [
  {
    category: 'Health flask',
    name: 'Health flask',
    price: 5,
    img: HealthFlaskImg,
  },
  {
    category: 'Thing',
    name: 'Sword 1 type',
    price: 5,
    img: SwordOneImg,
  },
  {
    category: 'Thing',
    name: 'Sword 2 type',
    price: 5,
    img: SwordSecondImg,
  },
];
const MainContentReward: React.FC = () => {
  const { setRewardItems } = useActions();
  const { items } = useTypedSelector((state) => state.reward);

  const [text, setText] = useState<string>('');
  const [active, setActive] = useState('all');

  const onSendReward = (titleText: string) => {
    setRewardItems({ id: items.length - 1 + 1, titleText, category: 'season', cost: 10 });
  };
  const handleAddReward = (e: React.FormEvent) => {
    e.preventDefault();
    onSendReward(text);
    setText('');
  };
  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddReward(e);
    }
  };
  return (
    <div className='main-content__column'>
      <div className='main-content__info'>
        <div className='main-content__name'>Awards</div>
        <div className='main-content__tabs'>
          <ul className='main-content__list'>
            <Tabs
              active={active}
              setActive={setActive}
              categoryFirst='all'
              categorySecond='season'
              categoryThird='later'
              titleFirst='Everything'
              titleSecond='Seasonal'
              titleThird='Deferred'
            />
          </ul>
        </div>
      </div>
      <div className='main-content__item item-main-content'>
        <div className='item-main-content__top'>
          <div className='item-main-content__add'>
            <form onSubmit={handleAddReward}>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder='Add reward'></textarea>
              <div className='item-main-content__button'>
                <button className='btn'>Add reward</button>
              </div>
            </form>
          </div>
        </div>
        <div className='item-main-content__wrapper'>
          <div className='dragle-test'>
            {items.map((item: any, index: number) => (
              <MainContentRewardTask
                id={item.id}
                key={`${index}`}
                titleText={item.titleText}
                supText={item.supText}
                cost={item.cost}
                isShow={true ? item.category === active || active === 'all' : false}
              />
            ))}
          </div>
          <div className='item-main-content__shop shop-main-content'>
            <div className='shop-main-content__row'>
              {shopItems.map((shopItem, index) => (
                <MainContentRewardItem key={`${shopItem.price}__${index}`} {...shopItem} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContentReward;
