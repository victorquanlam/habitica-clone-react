import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { StarIcon, HealthIcon, notifySuccess, Modal } from '../..';
import { useActions } from '../../../redux/typeHooks/useActions';
import { diff } from '../MainContentHabit/MainContentTaskHabit';

interface IMainContentTaskGoal {
  titleText: string;
  supText: string;
  id: number;
  isCompletedTask: boolean;
  isShow: boolean;
  taskDiff: number;
  calculatedDate: number;
}

const MainContentTaskGoal: React.FC<IMainContentTaskGoal> = ({
  titleText,
  supText,
  id,
  isCompletedTask,
  isShow,
  taskDiff,
  calculatedDate,
}) => {
  const {
    setUserLevel,
    setUserHealth,
    setUserMoney,
    setGoalSuccessTask,
    setGoalChangeTask,
    setDeleteGoalTask,
    setGoalChangeCategoryTask,
  } = useActions();
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [selectedDiff, setSelectedDiff] = useState<string>(diff[0]);
  const [modalText, setModalText] = useState<string>(titleText);
  const [modalSupText, setModalSupText] = useState<string>(supText);
  const [userDateToFinish, setUserDateToFinish] = useState<Date>();
  const [calculatedRemainDate, setCalculatedRemainDate] = useState<number>(0);
  const [today] = useState<Date>(new Date());

  //Редактирование сложности, описания, названия,даты до выполнения задания в модальном окне
  const onSendChangeGoal = (titleText: string, supText: string, diff: number) => {
    setGoalChangeTask(id, titleText, supText, diff, calculatedRemainDate);

    if (userDateToFinish) {
      setGoalChangeCategoryTask(id, 'date');
    }
    setModalActive(false);
  };

  //Дает опыт, жизни, монеты, если таска выполнена
  const onClickLevelUpdate =
    (level: number, health: number) => (event: React.MouseEvent<HTMLElement>) => {
      if (!isCompletedTask) {
        setGoalSuccessTask(id);
        setUserLevel(level * taskDiff);
        setUserHealth(health * taskDiff);
        setUserMoney(Math.floor(Math.random() * 10));
        notifySuccess('опыта', level * taskDiff, <StarIcon />);
        notifySuccess('жизни', health * taskDiff, <HealthIcon />);
      }
    };

  //Высчитываем оставшиеся дни до выполнения задания
  const handleUserDateToFinish = (date: any) => {
    setUserDateToFinish(date);
    const calculatedRemainDay = Math.ceil(
      (date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
    );
    setCalculatedRemainDate(calculatedRemainDay);
  };

  //Склоняем слово день, в зависимости от числа
  const getCorrectName = useCallback(
    (number: number, one: string, two: string, five: string) => {
      let n = Math.abs(number);
      n %= 100;
      if (n >= 5 && n <= 20) {
        return five;
      }
      n %= 10;
      if (n === 1) {
        return one;
      }
      if (n >= 2 && n <= 4) {
        return two;
      }
      return five;
    },
    [calculatedDate],
  );

  //Отключение возможности выбора дней, которые уже прошли
  const isPassDay = (date: Date) => {
    return date > today;
  };

  //Удаление таски
  const onClickDeleteTask = () => {
    setDeleteGoalTask(id);
    setModalActive(false);
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
          <div onClick={onClickLevelUpdate(10, 7)} className='item-main-content__checkbox'>
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
            <svg
              onClick={() => setModalActive(true)}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 4 16'>
              <path
                fillRule='evenodd'
                d='M2 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z'></path>
            </svg>
          </div>
          <p className='item-main-content__suptext'>{supText}</p>
          {calculatedDate && calculatedDate !== 0 ? (
            <p className='item-main-content__days'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14'>
                <path
                  fill-rule='evenodd'
                  d='M2 12h10V6H2v6zM12 2V0h-2v2H4V0H2v2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z'></path>
              </svg>
              <span>Выполнить через {calculatedDate}</span>
              {getCorrectName(calculatedDate, 'day', 'of the day', 'days')}
            </p>
          ) : (
            ''
          )}
        </div>
      </div>
      <Modal active={modalActive} setModalActive={setModalActive}>
        <div className='modal__header'>
          <div className='modal__top'>
            <div className='modal__title'>Change task</div>
            <div className='modal__buttons'>
              <button onClick={() => setModalActive(false)} className='modal__cancel'>
              Cancellation
              </button>
              <button
                onClick={() =>
                  onSendChangeGoal(modalText, modalSupText, diff.indexOf(selectedDiff))
                }
                className='modal__save btn'>
                Save
              </button>
            </div>
          </div>
          <div className='modal__text'>
            <label>Title</label>
            <input
              placeholder='Добавить название'
              value={modalText}
              onChange={(e) => setModalText(e.target.value)}
              type='text'
            />
          </div>
          <div className='modal__notice'>
            <label>Notes</label>
            <textarea
              value={modalSupText}
              onChange={(e) => setModalSupText(e.target.value)}></textarea>
          </div>
        </div>
        <div className='modal__body'>
          <div className='modal__title-select'>Complexity</div>
          <select
            className='modal__select'
            value={selectedDiff}
            onChange={(e) => setSelectedDiff(e.target.value)}>
            {diff.map((item: string) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <div className='modal__title-select'>Run before</div>
          <div className='modal__calendar'>
            <DatePicker
              filterDate={isPassDay}
              popperPlacement='top-start'
              selected={userDateToFinish}
              onChange={(date) => handleUserDateToFinish(date)}
            />
          </div>
          <div onClick={onClickDeleteTask} className='modal__footer'>
          Delete task
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MainContentTaskGoal;
