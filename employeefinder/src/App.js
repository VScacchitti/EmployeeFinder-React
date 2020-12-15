
import './App.css';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header"
import TableArea from "./components/TableArea"

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <TableArea/>
      </Wrapper>
    </div>
  );
}

export default App;
