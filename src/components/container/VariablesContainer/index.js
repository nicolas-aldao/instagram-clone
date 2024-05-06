import React, { useEffect, useContext } from 'react';
import { getDeviceType } from '../../../utils/getDeviceType';
import { Context } from '../../../Context';

const VariablesContainer = ({ children }) => {
  const { setScreenType } = useContext(Context);

  const setDeviceTypeFlags = async () => {
    const windowExist = typeof window !== 'undefined';
    if (windowExist) {
      let deviceTypes = getDeviceType();
      await setScreenType(deviceTypes);
    }
  };

  const onChangeOrientation = () => {
    setTimeout(() => {
      setDeviceTypeFlags();
    }, 500);
  };

  useEffect(() => {
    //Set initial values of device type flags on window object
    setDeviceTypeFlags();
    window.addEventListener('orientationchange', onChangeOrientation, true);

    return () => {
      window.removeEventListener(
        'orientationchange',
        onChangeOrientation,
        true,
      );
    };
  }, []);

  return <div style={{ overflow: "hidden", paddingBottom: "40px" }}>{children}</div>;
};

export default VariablesContainer;
