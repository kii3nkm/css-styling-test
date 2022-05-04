import "./styles.css";

import { InlineStyle } from "./components/InlineStyle";
import { CssModules } from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";
import { MaterialUi } from "./components/MaterialUi";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
      <MaterialUi>Test</MaterialUi>
    </div>
  );
}
