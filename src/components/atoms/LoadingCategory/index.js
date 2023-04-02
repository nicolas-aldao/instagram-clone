import React from 'react';
import { Skeleton } from './styles';

export const LoadingCategory = () => (
  <Skeleton>
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </Skeleton>
);
