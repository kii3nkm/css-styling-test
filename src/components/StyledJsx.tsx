export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- StyledJsx -</p>
        <button className="button">FIGHT!!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px blue;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
        }
        .title {
          margin: 0;
          color: #3d84a8;
        }
        .button {
          background-color: lightgray;
          border: none;
          border-radius: 8px;
        }
      `}</style>
    </>
  );
};
