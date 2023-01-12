import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { ListOfCategories } from '../../../components/organisms/ListOfCategories';
import { Div, Title, Subtitle } from './styles';

export const BasicLayout = ({ children, title, subtitle, showCategories }) => {
  return (
    <Fragment>
      <Helmet>
        {title && <title> Instagram Clone | {title} </title>}
        {subtitle && <meta name="description" content={subtitle} />}
      </Helmet>
      <Div>
        {showCategories && <ListOfCategories />}
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </Div>
    </Fragment>
  );
};
