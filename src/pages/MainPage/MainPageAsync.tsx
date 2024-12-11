import { lazy } from 'react';

const MainPageAsync = lazy(() => import('./ui/MainPage'));

export default MainPageAsync;
