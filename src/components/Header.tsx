import { NavLink } from 'react-router-dom';

import { CoinIcon, Burger } from '.';
import { useTypedSelector } from '../redux/typeHooks/useTypedSelector';

const Header: React.FC = () => {
  const { money } = useTypedSelector((state) => state.user);

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__row'>
          <NavLink exact to='/'>
            <div className='header__logo'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 28'>
                <g fill='none' fillRule='evenodd'>
                  <path
                    fill='#FFF'
                    d='M24.052 26.3c-.832-.09-.841-.462-.832-5.421 0 0-.083-.312.395-.582.477-.27 1.93-2.679 1.037-4.734-.892-2.056-.248-1.952.125-1.744.374.208.554-.055.332-1.183-.457-2.325-1.17-3.113-2.851-4.162-1.104-.69-.704-1.94.866-1.848.766.045.766.046.862-.555.152-.947-.15-2.565-1.327-2.788-.81-.154-1.817.713-3.015.109-1.198-.604-3.178.904-3.988 1.254s-1.479.354-2.403.331c-.925-.022.49 1.531 1.906 1.881 1.216.3.743.516.674 1.51-.078 1.113.24 1.59-.279 1.707-.796.178-1.686-1.961-3.052-2.857C9.4 5.183 7.56 6.152 2.15.201c-.939-1.031-.558 2.159.02 3.862 1.543 4.55 4.532 5.153 5.942 5.29 1.18.116 1.984-.158 1.984.297 0 .33-1.391.48-1.93.482a9.469 9.469 0 0 1-1.762-.173c-1.073-.2.569 2.535 1.624 3.402 1.78 1.465 3.818 2.014 5.456 2.18.473.048 1.146.04 1.146.41 0 .352-.354.438-.773.441-2.294.017-3.612 1.849-3.986 3.967-.237 1.346-.06 2.868-.035 4.005l.09.812c.18 1.426-4.948 1.975-5.627-.322-.743-2.51 3.309-3.837 3.383-6.232.047-1.509-1.333-2.194-1.333-2.194v-2.204H4.76v-1.587H3.174V11.05H1.587v4.761h1.587V17.4h2.613c.594 0 1.07.392 1.015 1.24-.137 2.093-4.589 3.379-3.365 6.716.884 2.41 4.696 2.441 8.513 2.441l7.118-.006c.222 0 .534-.107.08-1.255-.367-.927-1.632-.276-2.706-.276-1.137 0-1.176-.96-.446-1.973.446-.618 1.014-1.078 1.979-1.527 1.486-.693 2.617.198 3.174.963.8 1.099 1.054 2.355.348 2.552-.851.238-1.113.27-1.141 1.08-.022.581.256.422 1.595.422h4.445c.688 0 .637-.53-.055-1.45-.491-.653-1.028.11-2.289-.027z'></path>
                  <path
                    fill='#FFF'
                    d='M0 10.827h1.587V9.24H0zm113.986 9.067a1.385 1.385 0 0 0-1.942.25 2.804 2.804 0 0 1-2.236 1.101 2.82 2.82 0 0 1-2.815-2.645 416.05 416.05 0 0 1-.005-1.947 2.824 2.824 0 0 1 2.82-2.821c.781 0 1.508.312 2.046.879a1.385 1.385 0 0 0 2.008-1.907 5.614 5.614 0 0 0-4.054-1.741 5.596 5.596 0 0 0-5.59 5.59c0 .019.001 1.937.009 2.078a5.589 5.589 0 0 0 5.581 5.283 5.553 5.553 0 0 0 4.429-2.178 1.385 1.385 0 0 0-.251-1.942m8.237 1.351a2.819 2.819 0 0 1-2.815-2.644 419.52 419.52 0 0 1-.006-1.949 2.824 2.824 0 0 1 2.82-2.82 2.824 2.824 0 0 1 2.821 2.82c0 .2-.002 1.734-.005 1.946a2.818 2.818 0 0 1-2.815 2.647m4.205-10.422c-.645 0-1.183.444-1.336 1.04a5.55 5.55 0 0 0-2.87-.8 5.596 5.596 0 0 0-5.589 5.59c0 .019.001 1.936.008 2.078a5.589 5.589 0 0 0 8.517 4.447 1.384 1.384 0 0 0 2.655-.548V12.208c0-.765-.62-1.385-1.385-1.385M58.861 21.245a2.819 2.819 0 0 1-2.815-2.646c-.003-.213-.005-1.747-.005-1.947a2.824 2.824 0 0 1 2.82-2.82 2.824 2.824 0 0 1 2.82 2.82c0 .2-.001 1.734-.005 1.946a2.818 2.818 0 0 1-2.815 2.647m4.206-10.422c-.646 0-1.183.444-1.337 1.04a5.55 5.55 0 0 0-2.869-.8 5.596 5.596 0 0 0-5.59 5.59c0 .019.001 1.937.009 2.078a5.589 5.589 0 0 0 8.516 4.447 1.384 1.384 0 0 0 2.655-.548V12.208c0-.765-.62-1.385-1.384-1.385m20.384 0c-.764 0-1.384.62-1.384 1.385V22.63a1.385 1.385 0 0 0 2.769 0V12.208c0-.765-.62-1.385-1.385-1.385m16.308 0c-.765 0-1.385.62-1.385 1.385V22.63a1.385 1.385 0 0 0 2.77 0V12.208c0-.765-.62-1.385-1.385-1.385M76.266 18.6a2.82 2.82 0 0 1-2.815 2.645 2.82 2.82 0 0 1-2.815-2.647c-.004-.214-.005-1.746-.005-1.946a2.824 2.824 0 0 1 2.82-2.82 2.824 2.824 0 0 1 2.82 2.82c0 .193-.002 1.733-.005 1.949m-2.815-7.538c-1.03 0-1.991.284-2.82.772v-5.17a1.385 1.385 0 0 0-2.77 0V22.63a1.385 1.385 0 0 0 2.655.548c.856.529 1.86.836 2.935.836a5.59 5.59 0 0 0 5.582-5.288c.007-.137.008-2.054.008-2.074a5.596 5.596 0 0 0-5.59-5.59m-27.787.001a5.58 5.58 0 0 0-2.674.677V6.665a1.385 1.385 0 0 0-2.77 0V22.63a1.385 1.385 0 1 0 2.77 0v-7.157c.106-.09.203-.191.281-.315a2.808 2.808 0 0 1 2.393-1.326 2.824 2.824 0 0 1 2.82 2.82c0 .254-.002 5.635-.006 5.944a1.385 1.385 0 0 0 2.767.104c.007-.137.008-5.989.008-6.048a5.596 5.596 0 0 0-5.59-5.59m48.84-.239h-1.616V6.665a1.385 1.385 0 0 0-2.77 0v4.158h-1.614a1.385 1.385 0 0 0 0 2.77h1.615v9.037a1.385 1.385 0 0 0 2.77 0v-9.038h1.615a1.385 1.385 0 0 0 0-2.769'></path>
                  <path
                    fill='#FF6066'
                    d='M84.785 6.665a1.385 1.385 0 1 1-2.77 0 1.385 1.385 0 0 1 2.77 0'></path>
                  <path
                    fill='#4FB5E8'
                    d='M101.092 6.665a1.385 1.385 0 1 1-2.77 0 1.385 1.385 0 0 1 2.77 0'></path>
                </g>
              </svg>
            </div>
          </NavLink>

          <div className='menu__icon icon-menu'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Burger />
          <div className='header__right'>
            <div className='header__money'>
              <div className='header__coin'>
                <CoinIcon />
              </div>
              <span>{money}</span>
            </div>
            <div className='header__message'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                <path
                  fillRule='evenodd'
                  d='M21 0H3C1.3 0 0 1.3 0 3v14c0 1.7 1.3 3 3 3h4l2.9 3.1c1.2 1.2 3.1 1.2 4.2 0L17 20h4c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zm1 17c0 .6-.4 1-1 1h-4.9l-3.5 3.7c-.2.2-.4.3-.6.3-.2 0-.4-.1-.7-.3L7.9 18H3c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1h18c.6 0 1 .4 1 1v14zM19 7H5V5h14v2zm0 4H5V9h14v2zm0 4H5v-2h14v2z'></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
