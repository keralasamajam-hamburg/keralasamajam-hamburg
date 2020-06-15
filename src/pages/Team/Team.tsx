import React from 'react';
import { Card, Divider } from 'antd';
import './Team.scss';
import { useBoardMembers } from '../../contentful/useBoardMembers';
import Spinner from '../../components/Spinner/Spinner';
import { Helmet } from 'react-helmet-async';
const { Meta } = Card;

const BoardMembers: React.FC = () => {
  const boardMembersData = useBoardMembers();
  if (boardMembersData.loading) {
    return <Spinner />;
  }

  const membersArray = boardMembersData.members;
  const committeMmbers = membersArray.map((element, index) => {
    return (
      <div key={index} className="memberCard">
        <Card
          className="card"
          hoverable
          cover={<img alt={element.name} src={element.image} style={{ height: 320, objectFit: 'cover' }} />}>
          <Meta className="text" title={element.name} description={element.role} />
        </Card>
      </div>
    );
  });
  return (
    <>
      <Helmet>
        <title>Team - Kerala Samajam Hamburg</title>
        <meta property="og:title" content={"Team - Kerala Samajam Hamburg"} />
      </Helmet>
      <Divider>
        <h2>Executive Committee</h2>
      </Divider>
      <div className="wrapper">
        <div className="committeMembers">
          <div className="grid-of-2">{committeMmbers.slice(0, 2)}</div>
          <div className="grid-of-3">{committeMmbers.slice(2)}</div>
        </div>
      </div>
    </>
  );
};
export default BoardMembers;
