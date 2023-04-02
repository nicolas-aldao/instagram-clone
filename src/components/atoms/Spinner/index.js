import React from 'react';
import { Spinner } from './styles';

export const SpinnerAtom = () => {
  return (
    <Spinner>
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Spinner>
  );
};
