import classNames from 'classnames';
import { useState } from 'react';

import { StarIcon, HealthIcon, notifyError, notifySuccess, Modal } from '../..';
import { useActions } from '../../../redux/typeHooks/useActions';

interface IMainContentTaskHabit {
  text: string;
  isBadTask: boolean;
  id: number;
  isSucsessTask: boolean;
  isShow: boolean;
  count: number;
  supText: string;
  taskDiff: number;
}
export const diff = ['Trifle', 'Easily', 'Normal', 'Hard'];

const MainContentTaskHabit: React.FC<IMainContentTaskHabit> = ({
  text,
  isBadTask,
  id,
  isSucsessTask,
  isShow,
  count,
  supText,
  taskDiff,
}) => {
  const {
    setMinusUserHealth,
    setUserLevel,
    setHabitSuccessTask,
    setPlusHabitCount,
    setMinusHabitCount,
    setHabitChangeTask,
    setDeleteHabitTask,
  } = useActions();

  const [modalActive, setModalActive] = useState<boolean>(false);
  const [selectedDiff, setSelectedDiff] = useState(diff[0]);
  const [modalText, setModalText] = useState<string>(text);
  const [modalSupText, setModalSupText] = useState<string>(supText);
  const [isBadTaskModal, setIsBadTaskModal] = useState<boolean>(isBadTask);

  // Selects hp when clicking on a bad habit
  const onClickBadHabitTask =
    (health: number, id: number) => (event: React.MouseEvent<HTMLElement>) => {
      if (isBadTask) {
        setMinusUserHealth(health * taskDiff);
        setMinusHabitCount(id);
        notifyError('life', health * taskDiff, <HealthIcon />);
      }
    };
  // Gives experience when clicking on a good habit (depending on the difficulty level of the task)
  const onClickSucsessTask =
    (id: number, level: number) => (event: React.MouseEvent<HTMLElement>) => {
      if (!isBadTask) {
        setHabitSuccessTask(id);
        setUserLevel(level * taskDiff);
        setPlusHabitCount(id);
        notifySuccess('опыта', level * taskDiff, <StarIcon />);
      }
    };

  // Editing difficulty, description, title, changing the task (good-bad) in the modal window
  const onSendChangeHabit = (titleText: string, supText: string, diff: number) => {
    setHabitChangeTask(id, isBadTaskModal, titleText, supText, diff, isBadTaskModal ? false : true);
    setModalActive(false);
  };

  // Display and change the ownership of the task (good or bad) in the modal window
  const handleChangeIsBadTask = (value: boolean) => () => {
    setIsBadTaskModal(value);
  };
  // Remove taxi
  const onClickDeleteTask = () => {
    setDeleteHabitTask(id);
    setModalActive(false);
  };
  return (
    <>
      <div
        className={classNames('item-main-content__task', {
          'item-main-content__bad-task': isBadTask,
          'item-main-content__sucsess-task': isSucsessTask,
          'item-main-content__show-task': isShow,
        })}>
        <div
          onClick={onClickSucsessTask(id, 10)}
          className='item-main-content__left item-main-content__func'>
          <div className='item-main-content__plus'>+</div>
        </div>
        <div className='item-main-content__middle'>
          <div className='item-main-content__text-wrapper'>
            <p className='item-main-content__text'>{text}</p>
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
        <div className='item-main-content__right item-main-content__func'>
          <div onClick={onClickBadHabitTask(7, id)} className='item-main-content__minus'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 2'>
              <path fillRule='evenodd' d='M0 0h10v2H0z'></path>
            </svg>
          </div>
        </div>
      </div>
      <Modal active={modalActive} setModalActive={setModalActive}>
        <div className='modal__header'>
          <div className='modal__top'>
            <div className='modal__title'>Change the habit</div>
            <div className='modal__buttons'>
              <button onClick={() => setModalActive(false)} className='modal__cancel'>
              Cancellation
              </button>
              <button
                onClick={() =>
                  onSendChangeHabit(modalText, modalSupText, diff.indexOf(selectedDiff))
                }
                className='modal__save btn'>
                Save
              </button>
            </div>
          </div>
          <div className='modal__text'>
            <label>Heading*</label>
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
          <div className='modal__icons'>
            <div onClick={handleChangeIsBadTask(false)} className='modal__icon-item'>
              <div
                className={classNames('modal__icon', {
                  'modal__icon-active': !isBadTaskModal,
                })}>
                <div className='item-main-content__plus'>+</div>
              </div>
              <div className='modal__description'>Useful</div>
            </div>
            <div onClick={handleChangeIsBadTask(true)} className='modal__icon-item'>
              <div
                className={classNames('modal__icon', {
                  'modal__icon-active': isBadTaskModal,
                })}>
                <div className='item-main-content__minus'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 2'>
                    <path fillRule='evenodd' d='M0 0h10v2H0z'></path>
                  </svg>
                </div>
              </div>
              <div className='modal__description'>Harmful</div>
            </div>
          </div>
          <div className='modal__title-select'>Complexity</div>
          <select
            className='modal__select'
            value={selectedDiff}
            onChange={(e) => setSelectedDiff(e.target.value)}>
            {diff.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <div onClick={onClickDeleteTask} className='modal__footer'>
          Remove the habit
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MainContentTaskHabit;
