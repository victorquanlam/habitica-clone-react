import React from 'react';
import classNames from 'classnames';
import { StarIcon, HealthIcon, notifyError, notifySuccess } from '../..';
import { useActions } from '../../../redux/typeHooks/useActions';

interface IMainContentTaskDaily {
  titleText: string;
  supText: string;
  id: number;
  isCompletedTask: boolean;
  isShow: boolean;
  count: number;
  exp: number;
  health: number;
}

const MainContentTaskDaily: React.FC<IMainContentTaskDaily> = ({
  titleText,
  supText,
  id,
  isCompletedTask,
  isShow,
  count,
  health,
  exp,
}) => {
  const {
    setUserLevel,
    setMinusUserLevel,
    setUserHealth,
    setMinusUserHealth,
    setUserMoney,
    setDailySuccessTask,
    setDailyDefaultTask,
  } = useActions();

  const onClickLevelUpdate =
    (level: number, health: number) => (event: React.MouseEvent<HTMLElement>) => {
      setDailySuccessTask(id);
      if (isCompletedTask) {
        setMinusUserLevel(level);
        setMinusUserHealth(health);
        setDailyDefaultTask(id);
        notifyError('life', health, <HealthIcon />);
        notifyError('experience', level, <StarIcon />);
      } else {
        setUserLevel(level);
        setUserHealth(health);
        setUserMoney(Math.floor(Math.random() * 10));
        notifySuccess('experience', level, <StarIcon />);
        notifySuccess('life', health, <HealthIcon />);
      }
    };
  return (
    <div className='item-main-content__wrapper'>
      <div
        className={classNames('item-main-content__task', {
          'item-main-content__show-task': isShow,
        })}>
        <div
          className={classNames('item-main-content__left item-main-content__func', {
            'item-main-content__left-active': isCompletedTask,
          })}>
          <div onClick={onClickLevelUpdate(exp, health)} className='item-main-content__checkbox'>
            <span>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 13 10'>
                <path
                  fillRule='evenodd'
                  d='M4.662 9.832c-.312 0-.61-.123-.831-.344L0 5.657l1.662-1.662 2.934 2.934L10.534 0l1.785 1.529-6.764 7.893a1.182 1.182 0 0 1-.848.409l-.045.001'></path>
              </svg>
            </span>
          </div>
        </div>
        <div className='item-main-content__middle'>
          <div className='item-main-content__text-wrapper'>
            <p className='item-main-content__text'>{titleText}</p>
          </div>
          <p className='item-main-content__suptext'>{supText}</p>
          <div className='item-main-content__counter'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'>
              <path
                fillRule='evenodd'
                d='M11.376 3.15L6.777.086A.5.5 0 0 0 6 .5v6.132a.5.5 0 0 0 .777.416l4.599-3.066a.5.5 0 0 0 0-.832M.777.085L6 3.567.777 7.049A.5.5 0 0 1 0 6.633V.5A.5.5 0 0 1 .777.085'></path>
            </svg>
            <span className='item-main-content__count'>
              {count >= 0 ? `+${count}` : `-${count}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContentTaskDaily;
