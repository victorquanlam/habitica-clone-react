import classNames from 'classnames';

interface ITabs {
  categoryFirst: string;
  categorySecond: string;
  categoryThird: string;
  titleFirst: string;
  titleSecond: string;
  titleThird: string;
  active: string;
  setActive: any;
}

type tabItemsType = {
  category: string;
  title: string;
};

const Tabs: React.FC<ITabs> = ({
  categoryFirst,
  categorySecond,
  categoryThird,
  titleFirst,
  titleSecond,
  titleThird,
  setActive,
  active,
}) => {
  const tabItems = [
    {
      category: categoryFirst,
      title: titleFirst,
    },
    {
      category: categorySecond,
      title: titleSecond,
    },
    {
      category: categoryThird,
      title: titleThird,
    },
  ];
  return (
    <>
      {tabItems.map((tabItem: tabItemsType, index) => (
        <li
          key={`${tabItem.title}__${index}`}
          onClick={() => setActive(tabItem.category)}
          className={classNames('main-content__list-item', {
            'list-item-active': active === tabItem.category,
          })}>
          {tabItem.title}
        </li>
      ))}
    </>
  );
};

export default Tabs;
