import { Asset, Entry } from 'contentful';
import { useEffect, useState } from 'react';
import { CONTENTFUL_CLIENT } from './index';

export interface IGalleryItem {
  name: string;
  id: string;
  postedBy?: string;
  images: {
    description: string;
    url: string;
    id: string;
  }[];
}
interface GalleriesStore {
  loading: boolean;
  galleries: IGalleryItem[];
}

export const useGalleries = (): GalleriesStore => {
  const [galleries, setGalleries] = useState<GalleriesStore>({
    loading: true,
    galleries: [],
  });

  useEffect(() => {
    type ExpectedOutput = {
      title: string;
      images: Asset[];
      postedBy?: Entry<{ name: string }>;
    };

    const query = {
      content_type: 'imageCollection',
      order: '-fields.publishedDate',
    };

    CONTENTFUL_CLIENT.getEntries<ExpectedOutput>(query).then((response) => {
      const galleriesMapped = response.items.map((collection) => {
        return {
          name: collection.fields.title,
          id: collection.sys.id,
          postedBy: collection.fields.postedBy?.fields?.name,
          images: collection.fields.images.map((img) => ({
            description: img.fields?.description,
            url: img.fields?.file.url,
            id: img.sys.id,
          })),
        };
      });
      setGalleries({
        loading: false,
        galleries: galleriesMapped,
      });
    });
  }, []);

  return galleries;
};
