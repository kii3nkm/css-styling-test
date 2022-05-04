import { CSSProperties, ReactNode, VFC } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

type Props = {
  children: ReactNode;
};

type MyButtonStyle = {
  bgColer: CSSProperties["backgroundColor"];
  textColor: CSSProperties["color"];
};

const useStyles = makeStyles({
  button: (style: MyButtonStyle) => ({
    backgroundColor: style.bgColer
  }),
  textColor: {
    color: (style: MyButtonStyle) => style.textColor
  }
});

export const MaterialUi: VFC<Props> = ({ children }) => {
  const styles: MyButtonStyle = {
    bgColer: "green",
    textColor: "white"
  };

  const classes = useStyles(styles);

  return (
    <Button
      variant="contained"
      className={`${classes.button} ${classes.textColor}`}
    >
      {children}
    </Button>
  );
};
