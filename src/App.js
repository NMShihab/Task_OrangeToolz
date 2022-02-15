import InputCard from "./Components/InputCard";
import Ouput from "./Components/Output";
import { SlugProvider } from "./Context/SlugContext";
import "./App.css";

function App() {
  return (
    <SlugProvider>
      <div className="App">
        <InputCard />
        <Ouput />
      </div>
    </SlugProvider>
  );
}

export default App;
