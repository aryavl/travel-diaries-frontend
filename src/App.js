import Header from "./components/header/Header";
import {Routes,Route} from 'react-router-dom'
import Home from "./pages/Home";
import Diaries from "./pages/diary/Diaries";
import Auth from "./pages/Auth";
import {useDispatch, useSelector} from 'react-redux'
import Add from "./pages/diary/Add";
import Profile from "./profile/Profile";
import DiaryUpdate from "./pages/diary/DiaryUpdate";
import { useEffect } from "react";
import { authActions } from "./store/authentication";

function App() {
  const dispatch =useDispatch()
  const isLoggedIn = useSelector(state=>state.auth.isLoggedIn)
  console.log(isLoggedIn);
  useEffect(() => {
    if(localStorage.getItem("userId")){
      dispatch(authActions.login())
    }
  }, [localStorage])
  
  return (
    <div className="App">
      <header>
        <Header/>
      </header>

      <section>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/diaries" element={<Diaries/>}/>
          <Route path="/auth" element={<Auth/>}/>
          {isLoggedIn && <>
          
          <Route path="/add" element={<Add/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/post/:id" element={<DiaryUpdate/>}/>
          </>}
        </Routes>
      </section>
    </div>
  );
}

export default App;
