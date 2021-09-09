import { StarIcon } from '..';

interface IMemberLevel {
  levelPoint: number;
  maxLevelPoint: number;
}

const MemberLevel: React.FC<IMemberLevel> = ({ levelPoint, maxLevelPoint }) => {
  return (
    <div className='member__star member__data'>
      <div className='member__icon'>
        <StarIcon />
      </div>
      <div className='progress-bar'>
        <span
          className='progress-bar-fill progress-bar-yellow'
          style={{
            width: (levelPoint > 0 ? levelPoint / maxLevelPoint : 0) * 100 + '%',
          }}></span>
      </div>
      <div className='member__count'>
        {levelPoint > 0 ? levelPoint : 0}/{maxLevelPoint}
      </div>
    </div>
  );
};

export default MemberLevel;
