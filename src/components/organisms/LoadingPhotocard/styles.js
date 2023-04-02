import styled from 'styled-components';

export const Article = styled.article`
  min-height: 200px;
`;

export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0; // push img content to
  // top, aspect ratio 16:9
  position: relative;
  width: 100%;
`;

export const LoadingPhoto = styled.div`
  background-color: #e2e5e7;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;

`;
