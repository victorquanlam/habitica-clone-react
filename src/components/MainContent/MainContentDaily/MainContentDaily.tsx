import { useState } from 'react';

import { MainContentTaskDaily, Tabs } from '../../';
import { useActions } from '../../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../../redux/typeHooks/useTypedSelector';

const MainContentDaily: React.FC = () => {
  const { setDailyItems } = useActions();
  const { items } = useTypedSelector((state) => state.dailyTask);

  const [text, setText] = useState<string>('');
  const [active, setActive] = useState('all');

  console.log(items)

  const onSendDaily = (titleText: string) => {
    setDailyItems({
      id: items.length - 1 + 1,
      titleText,
      count: 0,
      category: 'active',
      isCompletedTask: false,
      exp: 10,
      health: 7,
    });
  };
  const handleAddDaily = (e: React.FormEvent) => {
    e.preventDefault();
    onSendDaily(text);
    setText('');
  };
  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddDaily(e);
    }
  };
  return (
    <div className='main-content__column'>
      <div className='main-content__info'>
        <div className='main-content__name'>Daily chores</div>
        <div className='main-content__tabs'>
          <ul className='main-content__list'>
            <Tabs
              active={active}
              setActive={setActive}
              categoryFirst='all'
              categorySecond='active'
              categoryThird='other'
              titleFirst='Everything'
              titleSecond='Current'
              titleThird='Other'
            />
          </ul>
        </div>
      </div>
      <div className='main-content__item item-main-content'>
        <div className='item-main-content__top'>
          <div className='item-main-content__add'>
            <form onSubmit={handleAddDaily}>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder='Add a daily task'></textarea>
              <div className='item-main-content__button'>
                <button className='btn'>Add case</button>
              </div>
            </form>
          </div>
        </div>
        <div className='item-main-content__wrapper'>
          {items.map((item: any, index: number) => (
            <MainContentTaskDaily
              key={`${index}`}
              id={item.id}
              isCompletedTask={item.isCompletedTask}
              isShow={true ? item.category === active || active === 'all' : false}
              count={item.count}
              titleText={item.titleText}
              supText={item.supText}
              exp={item.exp}
              health={item.health}
            />
          ))}
          <div className='item-main-content__note note-item-main-content'>
            <div className='note-item-main-content__icon'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 20'>
                <path
                  fillRule='evenodd'
                  d='M13 16h2v-2h-2v2zm-4 0h2v-2H9v2zm-4 0h2v-2H5v2zm12-4h2v-2h-2v2zm-4 0h2v-2h-2v2zm-4 0h2v-2H9v2zm13-4H2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8zm2-2v10a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1V0h2v2h10V0h2v2h1a4 4 0 0 1 4 4zM5 12h2v-2H5v2z'></path>
              </svg>
            </div>
            <div className='note-item-main-content__title'>These are your daily chores</div>
            <p className='note-item-main-content__text'>
              Daily tasks are repeated regularly. Customize the schedule that suits you best!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContentDaily;
