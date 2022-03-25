import { RouterString } from '../../../src/Component/Modules/routesString';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Works from '../Works/Works';

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
  },
  {
    path: RouterString.Contact,
    component: Contact,
    exact: true,
  },
  {
    path: RouterString.Works,
    component: Works,
    exact: true,
  },
];

export default pages;
