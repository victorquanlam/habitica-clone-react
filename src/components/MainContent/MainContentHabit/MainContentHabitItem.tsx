import { MainContentTaskHabit } from '../..';

interface IMainContentHabitItem {
  active: string;
  items: any;
}

const MainContentHabitItem: React.FC<IMainContentHabitItem> = ({ active, items }) => {
  return (
    <>
      {items.map((item: any, index: number) => (
        <MainContentTaskHabit
          key={`${index}__${item[0]}`}
          text={item.titleText}
          isBadTask={item.isBadTask}
          id={item.id}
          isSucsessTask={item.isSucsessTask}
          isShow={true ? item.category === active || active === 'all' : false}
          count={item.count}
          supText={item.supText}
          taskDiff={item.diff}
        />
      ))}
    </>
  );
};

export default MainContentHabitItem;
