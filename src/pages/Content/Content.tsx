import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import BoardMembers from '../Team/Team';
import RentalApartments from '../RentalAppartments/RentalApartments';
import Restaurants from '../Restaurants/Restaurants';
import Contact from '../Contact/Contact';
import styles from './Content.module.scss';
import Gallery from '../Gallery/Gallery';
import News from '../News/News';
import NewsContent from '../NewsContent/NewsContent';
// import Blogs from '../Blogs/Blogs';
import NotFound from '../NotFound/NotFound';
import Register from '../../components/Register/Register';

const Content: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window['scrollTo']({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);

  return (
    <div className={styles.content}>
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route path="/about" component={About}></Route>
        <Route path="/team" component={BoardMembers}></Route>
        <Route path="/rental-apartments">
          <RentalApartments />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/restaurants">
          <Restaurants />
        </Route>
        {/* <Route path="/blogs">
          <Blogs />
        </Route> */}
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/news" exact={true}>
          <News />
        </Route>
        <Route path="/news/:newsId">
          <NewsContent />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};
export default Content;
