import React from 'react';
import DynamicContent from '../../components/DynamicContent/DynamicContent';
import { useLayout } from '../../contentful/useLayout';
import { Card } from 'antd';
import { useRentalApartments } from '../../contentful/useRentalApartments';
import './RentalApartments.scss';
import { Helmet } from 'react-helmet-async';

const RentalApartments: React.FC = () => {
  const layoutStore = useLayout('RENTAL');
  const apartmentDetails = useRentalApartments();
  let apartmentsArray = apartmentDetails.rentalApartments;
  return (
    <>
      <Helmet>
        <title>Rental Apartments - Kerala Samajam Hamburg</title>
      </Helmet>
      <DynamicContent layoutStore={layoutStore} showLocaleSwitch={false} />
      <div className="rental">
        {apartmentsArray.map((item: any, index) => {
          return (
            <Card key={index} title={<h3>{item.name}</h3>} hoverable={true}>
              <a href={item.website} target="_blank" rel="noopener noreferrer">
                {item.website}
              </a>
            </Card>
          );
        })}
      </div>
    </>
  );
};
export default RentalApartments;
