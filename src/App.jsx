import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import NavBar from "./components/NavBar";
import Player from "./components/Player";
import Authentication from "./pages/Authentication";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "./Base";
import {useDispatch, useSelector} from 'react-redux'
import { setLoadingScreen } from "./store/features/globalSlice";
import ViewNaatKhwan from "./pages/ViewNaatKhwan";
import Search from "./pages/Search";

function App() {
  const [hidden, setHidden] = useState(false);
  const {loadingScreen} = useSelector(state=>state.globalState)
  const dispatch = useDispatch();

  useEffect(() => {
   window.addEventListener('load',()=>{
    dispatch(setLoadingScreen(false))
   })
  }, []);

  return (
    <>
      {/* {loadingScreen?<LoadingScreen/>:null} */}
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/login" element={<Authentication page="login" />} />
            <Route path="/signup" element={<Authentication page="signup" />} />
            <Route path="/" element={<Base page={<Home/>}/>} />
            <Route path="/naat-khwan/" element={<Base page={<ViewNaatKhwan/>}/>} />
            <Route path="/search/:query" element={<Base page={<Search/>}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
