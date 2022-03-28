import React from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import BackToTop from '../../Component/BackToTop/BackToTop';
import Header from '../../Component/Header/Header';
import { RouterString } from '../../Component/Modules/routesString';
import Footer from '../Footer/Footer';
import pages from './pages';

const RenderHeader = (isHeader: boolean) => {
  let active = false;
  if (!isHeader) {
    return <Header />;
  }
};
const RenderFooter = (isFooter: boolean) => {
  let active = false;
  if (!isFooter) {
    return <Footer />;
  }
};

function RouterWrapper() {
  const history = useHistory();

  const isHistoryCheck = () => {
    if (history.location.pathname.toLowerCase() !== RouterString.PageNotFound) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      {RenderHeader(isHistoryCheck())}
      <Switch>
        <Redirect exact from="/" to="/main" />
        {pages.map((item) => {
          return (
            <Route
              key={item.path}
              path={item.path}
              component={item.component}
              exact={item.exact}
            ></Route>
          );
        })}
        <Redirect to={RouterString.PageNotFound} />
      </Switch>
      {RenderFooter(isHistoryCheck())}
      <BackToTop />
    </>
  );
}

export default RouterWrapper;
