import React from 'react';
import DynamicContent from '../../components/DynamicContent/DynamicContent';
import { useLayout } from '../../contentful/useLayout';
import { Divider } from 'antd';
import BecomeAMember from '../../components/BecomeAMember/BecomeAMember';
import { Helmet } from 'react-helmet-async';

const About: React.FC = () => {
  const layoutStore = useLayout('ABOUT');

  return (
    <>
      <Helmet>
        <title>About - Kerala Samajam Hamburg</title>
        <meta property="og:title" content={"About - Kerala Samajam Hamburg"} />
        <meta
          name="description"
          content="Established in 1993, Kerala Samajam Hamburg e.V. (KSH) is a cultural association of Keralites (or  Malayalis) residing in and around Hamburg region of Germany. Annual events aligned with Vishu, Easter, Onam, Eid and Christmas brings the community together to celebrate the unique cultural heritage and traditions of Kerala"
        />
      </Helmet>
      <Divider>
        <h2>About Us</h2>
      </Divider>
      <DynamicContent layoutStore={layoutStore} showLocaleSwitch={false} />;
      <BecomeAMember />
    </>
  );
};
export default About;
