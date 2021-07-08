import "./App.css";
import Main from "./pages/main.js";
import Container from "./components/Container";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Container>
      <Wrapper>
        <Main />
      </Wrapper>
    </Container>
  );
}

export default App;
