import { useEffect, useState } from 'react';
import { CONTENTFUL_CLIENT } from './index';
import { RichTextContent, Asset } from 'contentful';

interface BlogsStore {
    loading: boolean;
    blogs: {
        title: string;
        content: RichTextContent;
        date: Date;
        thumbnail: string;
        id: string;
    }[];
}

export const useBlogs = (): BlogsStore => {
    const [blogsData, setBlogsData] = useState<BlogsStore>({
        loading: true,
        blogs: []
    });

    useEffect(() => {
        const query = {
            content_type: 'blogPost',
        };

        type ExpectedOutput = {
            title: string;
            content: RichTextContent;
            date: Date;
            thumbnail: Asset;
        };

        CONTENTFUL_CLIENT.getEntries<ExpectedOutput>(query)
            .then((response) => {
                const news = response.items
                    .map((item) => {
                        return {
                            title: item.fields.title,
                            content: item.fields.content,
                            date: item.fields.date,
                            thumbnail: item.fields.thumbnail?.fields?.file.url,
                            id: item.sys.id
                        };
                    })
                setBlogsData({
                    loading: false,
                    blogs: news,
                });
            });
    }, []);
    return blogsData;
};