import { Asset, RichTextContent } from 'contentful';
import { useEffect, useState } from 'react';
import { CONTENTFUL_CLIENT } from './index';

interface NewsStore {
  loading: boolean;
  news?: {
    headline: string;
    content: RichTextContent;
    date: Date;
    image: string;
    id: string;
  };
}

export const useNewsDetail = (newsId: string): NewsStore => {
  const [newsData, setnewsData] = useState<NewsStore>({
    loading: true,
    news: undefined,
  });

  useEffect(() => {
    type ExpectedOutput = {
      headline: string;
      content: RichTextContent;
      date: Date;
      image: Asset;
    };

    CONTENTFUL_CLIENT.getEntry<ExpectedOutput>(newsId).then((item) => {
      setnewsData({
        loading: false,
        news: {
          headline: item.fields.headline,
          content: item.fields.content,
          date: item.fields.date,
          image: item.fields.image?.fields.file.url,
          id: item.sys.id,
        },
      });
    });
  }, [newsId]);
  return newsData;
};
