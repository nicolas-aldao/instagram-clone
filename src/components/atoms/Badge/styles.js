import styled from 'styled-components';

export const BadgeContainer = styled.div`
  font-size: 14px;
  font-weight: 400;
  border-radius: 3px;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : '#ededed'};
  color: ${props => props.fontColor ? props.fontColor : '#000000'};
  margin-top: 5px;
  padding: 7px;
  width: fit-content;
`;
