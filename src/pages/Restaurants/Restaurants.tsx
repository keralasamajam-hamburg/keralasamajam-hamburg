import React from 'react';
import { useRestaurants } from '../../contentful/useRestaurants';
import { Divider, Card } from 'antd';
import { Comments, Like } from 'react-facebook';
import DynamicContent from '../../components/DynamicContent/DynamicContent';
import { useLayout } from '../../contentful/useLayout';
import './Restaurants.scss';
import { Helmet } from 'react-helmet-async';

const Restaurants: React.FC = () => {
  const restaurantDetails = useRestaurants();
  const layoutStore = useLayout('RESTAURANT');
  let restaurantsArray = restaurantDetails.restaurants;
  return (
    <>
      <Helmet>
        <title>Restaurants in Hamburg - Kerala Samajam Hamburg</title>
      </Helmet>
      <DynamicContent layoutStore={layoutStore} showLocaleSwitch={false} />;
      <Divider>
        <h3>Indian Restaurants</h3>
      </Divider>
      <div className="restaurants">
        {restaurantsArray.map((item, index) => {
          return (
            <Card key={index} title={<h3>{item.restaurantName}</h3>} hoverable={true}>
              <h4>{item.address}</h4>
              <a href={item.website} target="_blank" rel="noopener noreferrer">
                {item.website}
              </a>
            </Card>
          );
        })}
        <div className="fb">
          <Like href={window.location.href} colorScheme="dark" showFaces share />
          <Comments width="100%" href={window.location.href} />
        </div>
      </div>
    </>
  );
};
export default Restaurants;
