import { toast } from 'react-toastify';
import { useState } from 'react';
import classNames from 'classnames';

import { useActions } from '../../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../../redux/typeHooks/useTypedSelector';
import { CoinIcon, Modal } from '../..';

interface IMainContentRewardTask {
  titleText: string;
  supText: string;
  cost: number;
  isShow: boolean;
  id: number;
}

const MainContentRewardTask: React.FC<IMainContentRewardTask> = ({
  titleText,
  supText,
  cost,
  isShow,
  id,
}) => {
  const { money } = useTypedSelector((state) => state.user);
  const { setMinusUserMoney, setRewardChangeTask, setDeleteRewardTask } = useActions();

  const [modalActive, setModalActive] = useState<boolean>(false);
  const [modalText, setModalText] = useState<string>(titleText);
  const [modalSupText, setModalSupText] = useState<string>(supText);
  const [modalCost, setModalCost] = useState<number>(cost);

  const notifyLevel = () => toast.error(<div>You are running out of coins</div>);

  const onClickSpendMoney = () => {
    if (money >= cost) {
      setMinusUserMoney(cost);
    } else {
      notifyLevel();
    }
  };

  const onSendChangeReward = (titleText: string, supText: string, cost: number) => {
    setRewardChangeTask(id, titleText, supText, cost);
    setModalActive(false);
  };

  const onClickDeleteTask = () => {
    setDeleteRewardTask(id);
    setModalActive(false);
  };
  return (
    <>
      <div
        className={classNames('item-main-content__task', {
          'item-main-content__show-task': isShow,
        })}>
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
        </div>
        <div onClick={onClickSpendMoney} className='item-main-content__coin'>
          <div className='svg-icon'>
            <CoinIcon />
          </div>
          <span>{cost}</span>
        </div>
      </div>
      <Modal active={modalActive} setModalActive={setModalActive}>
        <div className='modal__header'>
          <div className='modal__top'>
            <div className='modal__title'>Change reward</div>
            <div className='modal__buttons'>
              <button onClick={() => setModalActive(false)} className='modal__cancel'>
              Cancellation
              </button>
              <button
                onClick={() => onSendChangeReward(modalText, modalSupText, modalCost)}
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
          <div className='modal__notice modal-change'>
            <label>Change the price</label>
            <input
              placeholder='Добавить награду'
              value={modalCost}
              onChange={(e: any) => setModalCost(e.target.value)}
              type='text'
            />
          </div>
          <div onClick={onClickDeleteTask} className='modal__footer'>
          Remove reward
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MainContentRewardTask;
