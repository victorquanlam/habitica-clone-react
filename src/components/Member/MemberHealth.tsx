import { HealthIcon } from '..';

interface IMemberHealth {
  healthPoint: number;
  maxHealthPoint: number;
}

const MemberHealth: React.FC<IMemberHealth> = ({ healthPoint, maxHealthPoint }) => {
  return (
    <div className='member__health member__data'>
      <div className='member__icon'>
        <HealthIcon />
      </div>
      <div className='progress-bar'>
        <span
          className='progress-bar-fill'
          style={{
            width: (healthPoint > 0 ? healthPoint / maxHealthPoint : 0) * 100 + '%',
          }}></span>
      </div>
      <div className='member__count'>
        {healthPoint > 0 ? healthPoint : 0}/{maxHealthPoint}
      </div>
    </div>
  );
};

export default MemberHealth;
