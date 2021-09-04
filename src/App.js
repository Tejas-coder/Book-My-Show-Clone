import { Route } from "react-router-dom";

//HOC
import DefaultHOC from "./HOC/default.hoc";

//Component
import HomePage from "./pages/Home.page";


function App() {
  return (
    <>
     <DefaultHOC path="/" exact component={HomePage} />
    </>
  );
}
// / , /movie
export default App;
