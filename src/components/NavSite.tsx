import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

interface INavSite {
  open: boolean;
}

const NavSite: React.FC<INavSite> = ({ open }) => {
  return (
    <nav
      className={classNames('header__navTop', {
        open: open,
      })}>
      <ul className='menu__list'>
        <li>
          <NavLink exact to='/'>
          Tasks
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/inventory'>
          Inventory
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavSite;
