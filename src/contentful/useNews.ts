import { useEffect, useState } from 'react';
import { CONTENTFUL_CLIENT } from './index';
import { RichTextContent, Asset } from 'contentful';

interface NewsStore {
    loading: boolean;
    news: {
        headline: string;
        content: RichTextContent;
        date: Date;
        image: string;
        id: string;
    }[];
}

export const useNews = (): NewsStore => {
    const [newsData, setnewsData] = useState<NewsStore>({
        loading: true,
        news: []
    });

    useEffect(() => {
        const query = {
            content_type: 'news',
        };

        type ExpectedOutput = {
            headline: string;
            content: RichTextContent;
            date: Date;
            image: Asset;
        };

        CONTENTFUL_CLIENT.getEntries<ExpectedOutput>(query)
            .then((response) => {
                const news = response.items
                    .map((item) => {
                        return {
                            headline: item.fields.headline,
                            content: item.fields.content,
                            date: item.fields.date,
                            image: item.fields.image?.fields.file.url,
                            id: item.sys.id
                        };
                    })
                setnewsData({
                    loading: false,
                    news,
                });
            });
    }, []);
    return newsData;
};