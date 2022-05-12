import styled from "styled-components";

const Content = styled.div`
  strong {
    font-size: 1.5em;
  }
  ul {
    list-style: none;
    li {
      display: flex;
      p {
        margin-right: 0.625em;
      }
    }
    li + li {
      margin-top: 0.625em;
    }
  }
`;

export { Content };
