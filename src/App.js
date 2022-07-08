import Nav from "./components/Nav"
import Header from "./components/Header";
import { GlobalStyle } from "./styled/global"
import Footer from "./components/Footer";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
