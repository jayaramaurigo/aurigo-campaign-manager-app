
/* Handles all the login related funtions 
   Updates the parent component with the access token and other parameters
*/
import { useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Typography,Button,Box,Card, CardContent } from '@mui/material';
import { UserContext } from './Auth';
import { Test } from "./FacebookService";


export default function LoginPage(){
// For navigating to other pages
  const navigate = useNavigate();

// Set user context after login
  const { login} = useContext(UserContext);


// Event handler for Fb login button
  const onLoginClick = () => {
  window.FB.getLoginStatus(function(response) {
    console.log("response:",response);
    if(response.status==='connected') // If user is already authenticated
    { //Test(); TO check the backend service
      login(response.authResponse.accessToken,response.authResponse.userID)
      console.log("logged in user with userID",response.authResponse.userID);
      navigate('/createpost');
    }else{
    // }else if(response.status==='not_authorized') // Denied access
    // {
    //   navigate('/error');
    // }else // New user login
    //{
      window.FB.login(function(response) {
        
        login(response.authResponse.accessToken,response.authResponse.userID)
        console.log("logged in user with userID",response.authResponse.userID);
        navigate('/createpost');
     }, {scope: 'email,public_profile,pages_show_list,pages_manage_posts,pages_read_engagement'}); //Set the scope of the access token
    }
    
    
  })
};

return (
<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
  <Card border="3px" alignItems="center" width="60px" height="200px">
  <CardContent>
    Click to login in to FB!
  </CardContent>
  <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
  <Button
  color='primary'
  size='medium'
  postion='relative'
  type='button'
  variant='contained'
  justifyContent='center'
  align='center'
  onClick={onLoginClick}
 >
  Login
</Button>
</div>
<br></br>
  </Card>
</div>);

//return (<div className="fb-login-button" data-width="20" data-size="large" data-button-type="login_with" data-layout="rounded" data-auto-logout-link="false" data-use-continue-as="false" data-onlogin="onLoginClick();"></div>)
// Login button to handle authentication
    // return (<div style={{display:'flex', justifyContent:'center'}}> <Card style={{
    //   background: '#afc0de',
    //   width: '50%',
    //   height:'40%',
    //   justify: 'center',
    //   alignContent: 'center',
    //   alignItems: 'center'
    // }}><Box textAlign='center'><button style={{display:'flex', justifyContent:'center'}} onClick={onLoginClick}>Login to FB</button></Box></Card>

    // </div>)
}