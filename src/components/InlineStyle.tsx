export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px blue",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around"
  };
  const titleStyle = {
    margin: 0,
    color: "#3d84a8"
  };
  const buttonStyle = {
    backgroundColor: "lightgray",
    border: "none",
    borderRadius: "8px"
  };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- Inline Style-</p>
      <button style={buttonStyle}>FIGHT!!</button>
    </div>
  );
};
