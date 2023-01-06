import styled, { css } from "styled-components";
import { fadeIn } from "../../../styles/animations";

export const List = styled.ul`
  display: flex;
  align-items: center;
  overflow: scroll;
  width: 100%;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  width: 100%;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  ${(props) =>
    props.fixed &&
    css`
       {
        background: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        left: 0;
        margin: 0 auto;
        max-width: 400px;
        padding: 15px 15px 0 15px;
        position: fixed;
        right: 0;
        top: -20px;
        transform: scale(0.8);
        z-index: 1;
        overflow: scroll;
        ${fadeIn({ time: "0.5s" })};
      }
    `}
`;

export const Item = styled.li`
  padding: 0 8px;
`;
