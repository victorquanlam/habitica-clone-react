import { MemberInfo } from '..';

const Member: React.FC = () => {
  return (
    <section className='member'>
      <div className='container'>
        <div className='member__row'>
          <div className='member__column'>
            <MemberInfo />
          </div>
          <div className='member__column'>
            <div className='member__text-wrapper'>
              <div className='member__title'>Motivate yourself to achieve your goals</div>
              <p className='member__main-text'>
                Time to have some fun doing things!
                Habitiki and improve your life by completing tasks one after another.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Member;
