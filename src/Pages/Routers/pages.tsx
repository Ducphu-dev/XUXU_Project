import { RouterString } from '../../../src/Component/Modules/routesString';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';

const pages = [
  {
    path: RouterString.PageNotFound,
    component: PageNotFound,
    exact: true,
  },

  // Home
  {
    path: RouterString.Main,
    component: Main,
    exact: false,
  },
];

export default pages;
