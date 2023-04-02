import styled from 'styled-components';

export const Spinner = styled.div`
  height: auto;
  overflow: hidden;
  object-fit: cover;
  height: 75px;
  width: 75px;
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 75px;
    height: 75px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 50px;
    height: 50px;
    margin: 11px;
    border: 3px solid #a9a9a9;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #a9a9a9 transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
