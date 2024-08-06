import UseStateHook from "./components/UserState/UseStateHook"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import UseStateObject from "./components/UserState/UseStateObject"
import HomePage from "./components/HomePage"

const App = () => {
  return (
    <div>
     
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
        <Route index element={<HomePage />} />
          <Route path="/state" element={<UseStateHook />} />
           <Route path="/registerpage" element={<UseStateObject />} />       
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App