import Routers from "./router";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet
        titleTemplate={"%s - Crypto WAO"}
        defaultTitle={"Inicio - Crypto WAO"}
      >
        <meta name={"description"} content={"Crypto WAO Play to Earn Game."} />
      </Helmet>
      <GlobalStyle />
      <Routers />
    </>
  );
}

export default App;
