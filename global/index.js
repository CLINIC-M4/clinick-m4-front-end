import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: ${(props) => props.theme.colors.bgColor};
}
`;

export default Global;
