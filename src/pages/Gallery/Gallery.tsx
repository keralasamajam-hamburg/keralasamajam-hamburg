import { Divider } from 'antd';
import React from 'react';
import Spinner from '../../components/Spinner/Spinner';
import { useGalleries } from '../../contentful/useGalleries';
import './Gallery.scss';
import { GalleryItem } from './GalleryItem';
import { Helmet } from 'react-helmet-async';

const Gallery: React.FC = () => {
  const galleriesData = useGalleries();

  if (galleriesData.loading) {
    return <Spinner />;
  }

  return (
    <div className={'gallery'}>
      <Helmet>
        <title>Gallery - Kerala Samajam Hamburg</title>
      </Helmet>
      <Divider>
        <h2>Gallery</h2>
      </Divider>
      {galleriesData.galleries.map((gallery, index) => {
        return <GalleryItem gallery={gallery} key={index} />;
      })}
    </div>
  );
};
export default Gallery;
