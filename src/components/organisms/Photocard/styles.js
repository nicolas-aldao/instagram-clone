import styled from 'styled-components';
import { fadeIn } from '../../../styles/animations';

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

export const Img = styled.img`
  ${fadeIn()}
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const Title = styled.h4`
  margin: 0;
  margin-top: 5px;
`;

export const Subtitle = styled.h5`
  margin: 0;
  margin-top: 5px;
`;
