import { Routes, Route, NavLink } from 'react-router-dom';
import { Suspense } from 'react';

import { useSwitchingTheme } from '../../../shared/hooks/hookSwitchingTheme';
import { classNames } from '../../../shared/helpers/classNames';

import MainPageAsync from '../../../pages/MainPage/MainPageAsync';
import AboutPageAsync from '../../../pages/AboutPage/AboutPageAsync';

import './style/index.scss';

const App = () => {
  const { theme, onSwitchingTheme } = useSwitchingTheme();

  return (
    <div className={classNames('wrapper', [theme])}>
      <div className="container">
        <Suspense fallback="Loading...">
          <div className="links">
            <NavLink to={'/'}>Main</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <button className="btnSwTheme" onClick={onSwitchingTheme}>
              switching theme
            </button>
          </div>
          <Routes>
            <Route path="/" element={<MainPageAsync />} />
            <Route path="/about" element={<AboutPageAsync />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
