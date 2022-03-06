/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const SButton = styled.button`
  background-color: lightgray;
  border: none;
  border-radius: 8px;
`;

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px blue;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
  `;
  const titleStyle = css({
    margin: 0,
    color: "#3d84a8"
  });
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <SButton>FIGHT!!</SButton>
    </div>
  );
};
