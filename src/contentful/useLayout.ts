import { useEffect, useState } from 'react';
import { CONTENTFUL_CLIENT } from './index';
import { Asset, RichTextContent } from 'contentful';
import { LOCALES } from './constants';
import { useCookies } from 'react-cookie';

export interface LayoutStore {
  loading: boolean;
  layout: {
    bannerImages?: {
      description: string;
      url: string;
    }[];
    textContent?: any;
  };
}

const ENTRY_ID_MAP = {
  HOME: '6DJ4AThsKH0TerlsLhk7W2',
  ABOUT: '1o1sjisGJhWUPfWHKwMwH9',
  RENTAL: 'qNi4x72BmMZczfEnvHcQ0',
  RESTAURANT: '1McLfQiBirwkTPl6IyxOe0',
  NEWS: '5ouDxOJWLK6l1hxnN6TVje',
  BLOGS: '2OWeRdyly6aNbvbQB3mmSo',
};

export const useLayout = (pageType: keyof typeof ENTRY_ID_MAP, useLocale: boolean = false): LayoutStore => {
  let [{ locale = LOCALES['en-US'] }] = useCookies(['locale']);
  if (useLocale === false) {
    locale = LOCALES['en-US'];
  }

  const [homeLayout, setHomeLayout] = useState<LayoutStore>({
    loading: true,
    layout: {},
  });

  useEffect(() => {
    type ExpectedOutput = {
      bannerImages: Asset[];
      textContent: RichTextContent;
    };

    CONTENTFUL_CLIENT.getEntry<ExpectedOutput>(ENTRY_ID_MAP[pageType], { locale }).then((response) => {
      setHomeLayout({
        loading: false,
        layout: {
          bannerImages: response.fields.bannerImages?.map((img) => ({
            description: img.fields.description,
            url: img.fields.file.url,
          })),
          textContent: response.fields.textContent,
        },
      });
    });
  }, [pageType, locale]);

  return homeLayout;
};
