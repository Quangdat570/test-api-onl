import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";
import { RequireToken } from "./Auth";
import Landing from "./Landing";

import AddPost from "./AddPost";


function App() {
  return (
    <div className ="App">
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/login" element = {<Login/>}/>
      
      <Route path="/addpost" element={<AddPost/>}/>
      <Route
      path="/profile"
      element={
        <RequireToken>
          <Profile />
        </RequireToken>
      }
    />
    </Routes>
    </div>
  );
}

export default App;
