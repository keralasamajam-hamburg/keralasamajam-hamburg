import React from 'react';
import { Divider, Card } from 'antd';
import { useNews } from '../../contentful/useNews';
import Spinner from '../../components/Spinner/Spinner';
import './News.scss';
import newsImage from '../../assets/images/news-announcement.jpg';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const { Meta } = Card;
const News: React.FC = () => {
  const newsContent = useNews();
  if (newsContent.loading) {
    return <Spinner />;
  }

  const newsArray = newsContent.news;
  return (
    <div className="news">
      <Helmet>
        <title>News - Kerala Samajam Hamburg</title>
        <meta property="og:title" content={"News - Kerala Samajam Hamburg"} />
      </Helmet>
      <Divider>
        <h2>News</h2>
      </Divider>
      {newsArray.map((item, index) => {
        const newsDetailLink = `/news/${item.headline.split(' ').join('-')}-${item.id}`;
        return (
          <Link to={newsDetailLink} key={index}>
            <Card
              hoverable
              cover={item.image !== undefined ? <img src={item.image} alt="" /> : <img src={newsImage} alt="" />}>
              <Meta title={item.headline} description={`Published on ${item.date}`} />
            </Card>
          </Link>
        );
      })}
    </div>
  );
};
export default News;
