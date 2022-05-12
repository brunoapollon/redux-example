import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  input {
    width: 100%;
    height: 100%;
    border-radius: 0.3125em;
    text-align: center;
  }
  & + div {
    margin-top: 0.625em;
  }
`;

export { Container };
