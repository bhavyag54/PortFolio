import styled, {keyframes} from "styled-components";

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;


export const LoadingScreen = styled.div`
 position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--acsent); /* or any background color */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: opacity 0.5s ease, visibility 0.5s ease;
  opacity: ${props => (props.hidden ? 0 : 1)};
  visibility: ${props => (props.hidden ? 'hidden' : 'visible')};
`

// export const Spinner = styled.div`
//   border: 8px solid var(--text-color);
//   border-top: 8px solid var(--text-hover);
//   border-radius: 50%;
//   width: 60px;
//   height: 60px;
//   animation: ${spin} 5s linear infinite;
// `;