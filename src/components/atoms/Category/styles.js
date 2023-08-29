import styled from "styled-components";
import { fadeIn } from "../../../styles/animations";

export const Image = styled.img`
  ${fadeIn()}
    border: 1px solid #ddd;
    box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
    border-radius: 50%;
    height: auto;
    overflow: hidden;
    object-fit: cover;
    height: 75px;
    width: 75px;
    cursor: pointer;
`;
