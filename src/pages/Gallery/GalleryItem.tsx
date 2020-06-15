import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Carousel, Collapse, Divider } from 'antd';
import React, { useState } from 'react';
import { IGalleryItem } from '../../contentful/useGalleries';

export const GalleryItem: React.FC<{ gallery: IGalleryItem }> = ({ gallery }) => {
  const [currentImageId, setCurrentImageId] = useState(gallery.images?.[0].id);
  const handleAfterChange = (currentSlide: number, nextSlide: number) => {
    setCurrentImageId(gallery.images[nextSlide].id);
  };

  return (
    <div className="gallery-item">
      <Divider>
        <h3>{gallery.name}</h3>
      </Divider>
      <Carousel
        dots
        lazyLoad="progressive"
        dotPosition="bottom"
        arrows
        beforeChange={handleAfterChange}
        prevArrow={<LeftOutlined />}
        nextArrow={<RightOutlined />}>
        {gallery.images.map((img) => {
          return (
            <div style={{ display: 'flex', position: 'relative' }} id={gallery.id + '-' + img.id}>
              <img src={img.url} alt={img.description} />
              <h5>{img.description}</h5>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
