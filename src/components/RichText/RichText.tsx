import React, { Fragment } from 'react';
import { Divider } from 'antd';
import './RichText.scss';

const RichText: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div className={'rows'}>
      {data?.content?.map((contentRow: any, index: number) => {
        const type = contentRow.nodeType;
        const imageUrl = contentRow.data.target?.fields.file.url;
        const textData = contentRow.content?.map((item: any) => {
          return item?.value
        }).join('');
        const listData = contentRow.content?.map((item: any) => {
          return item.content?.[0].content
        })
        const listItem = () => {
          switch (type) {
            case 'text':
              return <p>{textData}</p>;
            case 'heading-1':
              return <h1>{textData}</h1>;
            case 'heading-2':
              return <h2>{textData}</h2>;
            case 'heading-3':
              return <h3>{textData}</h3>;
            case 'heading-4':
              return <h4>{textData}</h4>;
            case 'heading-5':
              return <h5>{textData}</h5>;
            case 'heading-6':
              return <h6>{textData}</h6>;
            case 'paragraph':
              return <p>{textData}</p>;
            case 'hyperlink':
              return <a href={textData}>{textData}</a>;
            case 'entry-hyperlink':
              return <a href={textData}>{textData}</a>;
            case 'asset-hyperlink':
              return <a href={textData}>{textData}</a>;
            case 'unordered-list':
              return <ul>{
                listData.map((element: any) => {
                  console.log({ element })
                  return (
                    <li>{element?.[0].value}</li>
                  )
                })}</ul>;
            case 'ordered-list':
              return <ol>{
                listData.map((element: any) => {
                  console.log({ element })
                  return (
                    <li>{element?.[0].value}</li>
                  )
                })
              }</ol>;
            case 'list-item':
              return <li>{textData}</li>;
            case 'blockquote':
              return <blockquote>{textData}</blockquote>;
            case 'hr':
              return <Divider />;
            case 'embedded-asset-block':
              return <img src={imageUrl} alt={imageUrl} />;
            default:
              return null;
          }
        };
        if (imageUrl !== undefined || textData !== undefined) {
          return <Fragment key={index}>{listItem()}</Fragment>;
        }
      })}
    </div>
  );
};

export default RichText;
