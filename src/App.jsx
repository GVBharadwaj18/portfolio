import { BrowserRouter,Routes,Route} from "react-router-dom";
import {Home} from "./pages/Home";
import { NotFound } from "./pages/NotFound";
function App() {
  return (
    <>
    <BrowserRouter basename="/Portfolio/">
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

