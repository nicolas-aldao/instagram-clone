export const getDeviceType = () => {
  let width = window.innerWidth;
  return {
    isMobile: width < 601,
    isTablet: width > 600 && width < 992,
    isDesktop: width > 991,
  };
};
