import styled from "styled-components";
import ReactLoading from "react-loading";

export const Container = styled.div``;

export const ReactLoadingContainer = styled(ReactLoading).attrs((props) => ({
  color: props.theme.colors.primaryDark,
  type: "balls",
  height: "64px",
  width: "64px",
}))`
  transform: translate(50%, -50%);
  top: 50%;
  right: 50%;
  position: fixed;
`;