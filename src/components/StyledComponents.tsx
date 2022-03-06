import styled from "styled-components";

const SContainer = styled.div`
  border: solid 2px blue;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
`;

const STitle = styled.p`
  margin: 0;
  color: #3d84a8;
`;

const SButton = styled.button`
  background-color: lightgray;
  border: none;
  border-radius: 8px;
`;

export const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>- Styled Components -</STitle>
      <SButton>FIGHT!!</SButton>
    </SContainer>
  );
};
