import { useEffect } from 'react';
import { MemberHealth, MemberLevel } from '..';
import { SwordIcon } from '..';
import { useActions } from '../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../redux/typeHooks/useTypedSelector';

export interface IMemberInfo {
  level: number;
  point: number;
  health: number;
}

const MemberInfo: React.FC = () => {
  const { setResetUserLevel, setResetUserHealth, setIncreaseUserLevelPoint, setIncreaseUserLevel } =
    useActions();

  const { levelPoint, healthPoint, level, maxHealthPoint, maxLevelPoint } = useTypedSelector(
    (state) => state.user,
  );

  useEffect(() => {
    if (levelPoint > maxLevelPoint) {
      setIncreaseUserLevelPoint();
      setIncreaseUserLevel();
      setResetUserLevel();
    } else if (levelPoint < 0) {
      setResetUserLevel();
    }
  }, [levelPoint]);

  useEffect(() => {
    if (0 >= healthPoint) {
      setResetUserHealth();
    }
    if (healthPoint > maxHealthPoint) {
      setResetUserHealth();
    }
  }, [healthPoint]);

  return (
    <div className='member__item'>
      <div className='member__info'>
        <div className='member__text member__data'>
          <div className='member__icon'>
            <SwordIcon />
          </div>
          <div className='member__wrapper'>
            <div className='member__supinfo'>Level {level} Warrior</div>
          </div>
        </div>
        <MemberHealth healthPoint={healthPoint} maxHealthPoint={maxHealthPoint} />
        <MemberLevel levelPoint={levelPoint} maxLevelPoint={maxLevelPoint} />
      </div>
    </div>
  );
};

export default MemberInfo;
