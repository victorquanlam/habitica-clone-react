import { useState } from 'react';

import { MainContentGoalTask, Tabs } from '../../';
import { useActions } from '../../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../../redux/typeHooks/useTypedSelector';

const MainContentGoal: React.FC = () => {
  const { setGoalItems } = useActions();
  const { items } = useTypedSelector((state) => state.goal);

  const [text, setText] = useState<string>('');
  const [active, setActive] = useState<string>('active');

  const onSendGoal = (titleText: string) => {
    setGoalItems({
      id: items.length + 1,
      titleText,
      category: 'active',
      isCompletedTask: false,
      diff: 1,
    });
  };
  const handleAddGoal = (e: React.FormEvent) => {
    e.preventDefault();
    onSendGoal(text);
    setText('');
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddGoal(e);
    }
  };
  return (
    <div className='main-content__column'>
      <div className='main-content__info'>
        <div className='main-content__name'>Tasks</div>
        <div className='main-content__tabs'>
          <ul className='main-content__list'>
            <Tabs
              active={active}
              setActive={setActive}
              categoryFirst='active'
              categorySecond='date'
              categoryThird='completed'
              titleFirst='Active'
              titleSecond='With date'
              titleThird='Made by'
            />
          </ul>
        </div>
      </div>
      <div className='main-content__item item-main-content'>
        <div className='item-main-content__top'>
          <div className='item-main-content__add'>
            <form onSubmit={handleAddGoal}>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder='Add task'></textarea>
              <div className='item-main-content__button'>
                <button className='btn'>Add task</button>
              </div>
            </form>
          </div>
        </div>
        <div className='item-main-content__wrapper'>
          {items.map((item, index: number) => (
            <MainContentGoalTask
              key={`${index}`}
              id={item.id}
              isCompletedTask={item.isCompletedTask}
              isShow={true ? item.category === active : false}
              titleText={item.titleText}
              supText={item.supText}
              taskDiff={item.diff}
              calculatedDate={item.remainDay}
            />
          ))}
          <div className='item-main-content__note note-item-main-content'>
            <div className='note-item-main-content__icon'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                <path
                  fillRule='evenodd'
                  d='M8.343 14.916c-.312 0-.61-.123-.831-.344l-3.831-3.831 1.662-1.662 2.934 2.934 5.938-6.929L16 6.613l-6.764 7.893a1.182 1.182 0 0 1-.848.409l-.045.001zM18 16c0 1.103-.897 2-2 2H4c-1.102 0-2-.897-2-2V4c0-1.103.898-2 2-2h12c1.103 0 2 .897 2 2v12zM16 0H4a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4z'></path>
              </svg>
            </div>
            <div className='note-item-main-content__title'>These are your tasks</div>
            <p className='note-item-main-content__text'>
            Tasks can only be completed once. Add lists to your tasks to increase their reward.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContentGoal;
