import UseStateHook from "./components/UserState/UseStateHook"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import UseStateObject from "./components/UserState/UseStateObject"
import HomePage from "./components/HomePage"
import UseEffect from "./components/UseEffect/UseEffect"
import ClearUp from "./components/UseEffect/ClearUp"

const App = () => {
  return (
    <div>
     
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
        <Route index element={<HomePage />} />
          <Route path="/state" element={<UseStateHook />} />
           <Route path="/registerpage" element={<UseStateObject />} />   
           <Route path="/useeffect" element={<UseEffect />} />     
           <Route path="/clearup" element={<ClearUp />} />       


        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App