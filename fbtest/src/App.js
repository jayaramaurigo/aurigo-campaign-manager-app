//import logo from './logo.svg';
import './App.css';
import LoginPage from './Pages/Login';
import CreatePost from './Pages/CreatePost';
import CreateComment from './Pages/CreateComment';
import { UserProvider } from './Pages/Auth';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
function App() {

// Load FB Javascript SDK 
useEffect(() => {
  window.fbAsyncInit = function() {
    window.FB.init({
      appId      : process.env.REACT_APP_APP_ID,
      cookie     : true,
      xfbml      : true,
      version    : process.env.REACT_APP_API_VERSION

    });
      
    window.FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

  }, []);

  return (
    <>
    <UserProvider>
    <Router>   
    <Routes>
      <Route exact path="/createpost" element={<CreatePost/>}/> 
      <Route exact path="/createcomment" element={<CreateComment/>}/> 
      <Route path="*"  element={<LoginPage/>}/>
    </Routes>
  </Router>
  </UserProvider>
  </>
   
  );
}

export default App;
