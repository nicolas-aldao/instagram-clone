import React from 'react';
import { Helmet } from 'react-helmet';
import { ListOfCategories } from '../../../components/organisms/ListOfCategories';
import { Title, Subtitle } from '../../atoms/Typography';
import { Div } from './styles';

export const BasicLayout = ({
  children,
  title,
  subtitle,
  showCategories,
  marginTop,
}) => {
  return (
    <>
      <Helmet>
        <title> Artgram </title>
        {subtitle && <meta name="description" content={subtitle} />}
      </Helmet>
      <Div>
        {showCategories && <ListOfCategories />}
        <div
          style={{ position: 'relative', top: marginTop ? marginTop : '16px' }}>
          {title && <Title>{title}</Title>}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
          {children}
        </div>
      </Div>
    </>
  );
};
