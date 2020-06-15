import React from 'react';
import DynamicContent from '../../components/DynamicContent/DynamicContent';
import { useLayout } from '../../contentful/useLayout';
import { Helmet } from 'react-helmet-async';

const Home: React.FC = () => {
  const layoutStore = useLayout('HOME', true);

  return (
    <>
      <Helmet>
        <title>Kerala Samajam Hamburg</title>
        <meta property="og:title" content={"Kerala Samajam Hamburg"} />
        <meta
          name="description"
          content="Established in 1993, Kerala Samajam Hamburg e.V. (KSH) is a cultural association of Keralites (or  Malayalis) residing in and around Hamburg region of Germany. Annual events aligned with Vishu, Easter, Onam, Eid and Christmas brings the community together to celebrate the unique cultural heritage and traditions of Kerala"
        />
      </Helmet>
      <DynamicContent layoutStore={layoutStore} showLocaleSwitch />;
    </>
  );
};
export default Home;
