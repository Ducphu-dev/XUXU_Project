import { RouterString } from '../../../src/Component/Modules/routesString';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import About from '../About/About';

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
  {
    path: RouterString.About,
    component: About,
    exact: true,
  }
];

export default pages;
