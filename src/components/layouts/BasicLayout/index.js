import React from 'react';
import { Helmet } from 'react-helmet';
import { ListOfCategories } from '../../../components/organisms/ListOfCategories';
import { Div, Title, Subtitle } from './styles';

export const BasicLayout = ({ children, title, subtitle, showCategories }) => {
  return (
    <>
      <Helmet>
        {title && <title> Artgram | {title} </title>}
        {subtitle && <meta name="description" content={subtitle} />}
      </Helmet>
      <Div>
        {showCategories && <ListOfCategories />}
        <div
          style={{ position: 'relative', top: '110px' }}>
          {title && <Title>{title}</Title>}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
          {children}
        </div>
      </Div>
    </>
  );
};
