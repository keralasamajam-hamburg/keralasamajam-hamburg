import React from 'react';
import DynamicContent from '../../components/DynamicContent/DynamicContent';
import { useLayout } from '../../contentful/useLayout';
import { useBlogs } from '../../contentful/useBlogs';
import { Empty } from 'antd';

const Blogs: React.FC = () => {
  const layoutStore = useLayout('BLOGS');
  const blogsStore = useBlogs();

  return (
    <>
      <DynamicContent layoutStore={layoutStore} showLocaleSwitch={false} />;
      {blogsStore.loading ? null : blogsStore.blogs.length > 0 ? (
        blogsStore.blogs.map((blog) => {
          return blog.title;
        })
      ) : (
        <Empty
          description={
            <h1>
              No blog posts found{' '}
              <span role="img" aria-label="heart broken">
                💔
              </span>
            </h1>
          }
        />
      )}
    </>
  );
};
export default Blogs;
