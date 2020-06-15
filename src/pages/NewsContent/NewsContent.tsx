import { Divider } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';
import RichText from '../../components/RichText/RichText';
import Spinner from '../../components/Spinner/Spinner';
import { useNewsDetail } from '../../contentful/useNewsDetail';
import './NewsContent.scss';
import { Helmet } from 'react-helmet-async';

const NewsContent: React.FC = () => {
  const { newsId } = useParams();
  const newsUrlSplit = newsId.split('-');
  const contentId = newsUrlSplit[newsUrlSplit.length - 1];

  const newsDetailData = useNewsDetail(contentId);

  if (newsDetailData.loading) {
    return <Spinner />;
  }
  if (!newsDetailData.news) {
    return <h1>News not available</h1>;
  }

  return (
    <div className="newsContent">
      <Helmet>
        <title>{newsDetailData.news?.headline} - Kerala Samajam Hamburg</title>
        <meta property="og:title" content={`${newsDetailData.news?.headline} - Kerala Samajam Hamburg`} />
        <meta
          name="description"
          content={"Kerala Samajam Hamburg: " + newsDetailData.news?.headline}
        />
      </Helmet>
      <div className="header">
        <Divider>
          <h1>{newsDetailData.news?.headline}</h1>
          <h3>Published on: {newsDetailData.news?.date}</h3>
        </Divider>
      </div>
      <RichText data={newsDetailData.news?.content} />

    </div>
  );
};
export default NewsContent;
