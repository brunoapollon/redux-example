import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  > h1 {
    margin-bottom: 0.625em;
  }
  > form {
    width: 21.25em;
    height: 2.5em;
    > button {
      width: 100%;
      height: 100%;
      margin-top: 0.625em;
    }
  }
`;

export { Container };
