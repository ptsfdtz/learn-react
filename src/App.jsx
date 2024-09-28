import TestHoc from "./TestHoc";
import Son from "./Son.js";
let HocSon = TestHoc(Son);
function App() {
  return <div>
    <HocSon></HocSon>
  </div>
}

export default App;