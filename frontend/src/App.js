import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
import Users from "./Users";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Users />} ></Route>
      <Route path="/create" element={<CreateUser />} ></Route>
      <Route path="/update" element={<UpdateUser />} ></Route>

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
