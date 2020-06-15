import { Carousel } from 'antd';
import React from 'react';
import RichText from '../../components/RichText/RichText';
import Spinner from '../../components/Spinner/Spinner';
import { LayoutStore } from '../../contentful/useLayout';
import { useCookies } from 'react-cookie';
import { LOCALES } from '../../contentful/constants';
import { Divider } from 'antd';
import './DynamicContent.scss';

const DynamicContent: React.FC<{ layoutStore: LayoutStore; showLocaleSwitch: boolean }> = ({
  layoutStore,
  showLocaleSwitch,
}) => {
  const [{ locale = LOCALES['en-US'] }, setCookie] = useCookies(['locale']);

  const handleCookieSet = (locale: LOCALES) => () => {
    const CookieDate = new Date();
    CookieDate.setFullYear(CookieDate.getFullYear() + 1);
    setCookie('locale', locale, { expires: CookieDate });
  };

  if (layoutStore.loading) {
    return <Spinner />;
  }
  return (
    <div className={'dynamicContent'}>
      <Carousel autoplay={true} dots={true}>
        {layoutStore.layout.bannerImages?.map((img, index) => (
          <div key={index} style={{ display: 'flex', position: 'relative' }}>
            <img src={img.url} alt={img.description} />
            <h5>{img.description}</h5>
          </div>
        ))}
      </Carousel>
      {showLocaleSwitch ? (
        <div className="locale-switch">
          <span className={locale === LOCALES['en-US'] ? 'active' : ''} onClick={handleCookieSet(LOCALES['en-US'])}>
            EN
          </span>
          <Divider type="vertical" />
          <span className={locale === LOCALES['ml-IN'] ? 'active' : ''} onClick={handleCookieSet(LOCALES['ml-IN'])}>
            MAL
          </span>
        </div>
      ) : null}
      <RichText data={layoutStore.layout.textContent} />
    </div>
  );
};

export default DynamicContent;
