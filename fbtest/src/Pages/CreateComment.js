/* Contains components for creating and publishing posts in FB */
import { UserContext } from './Auth';
import { useState,useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {Paper} from '@mui/material';



export default function CreateComment({userContext})
{ 
    const {user,logout,login} = useContext(UserContext);

    const [pageID,setPageId]=useState(process.env.REACT_APP_PAGE_ID);
    const [pageTitle,setPageTitle]=useState(process.env.REACT_APP_PAGE_TITLE);
    const [fbPageAccess,setFbPageAccessToken]=useState(user.pageacessToken);
    const [message,setMessage]=useState('');
    const [postID,setPostId]=useState(user.postID);
    
    const [likes, setLikes] = useState(0);
    const [isClicked, setIsClicked] = useState(false);


    
    
      const handleClick = async() => {
        if (isClicked) {
          // setLikes(likes - 1);
          alert("cant unlike a post sryy");
        } else {
          const requestOptions = {
            method: 'post',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
       
           
        };
        const response = await fetch(`https://graph.facebook.com/${postID}/likes/?access_token=${fbPageAccess}`, requestOptions)//.then((response) => { // wait for Promise to be done
        const data = await response.json();
        console.log(data);
        }
       // setIsClicked(!isClicked);
      };
    
    
    

// Event handler to publish the post
const onhandleSubmit = async () => 
{
  
    const requestOptions = {
        method: 'post',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
   
       
    };
    const response = await fetch(`https://graph.facebook.com/${postID}/comments/?access_token=${fbPageAccess}&message=${message}`, requestOptions)//.then((response) => { // wait for Promise to be done
    const data = await response.json();
    
        console.log(data);
//   const formData = new FormData();
	

	
// 	formData.append('message', message);
// 	formData.append('access_token', fbPageAccess);
// 	let response = await fetch(`https://graph.facebook.com/${pageID}/comments`, {
// 		body: formData,
// 		method: 'post'
// 	});
// 	response = await response.json();
// 	console.log(response);


    //   const requestOptions = {
    //     method: 'post',
    //     mode: 'cors',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       pageId: pageID,
    //       message: message,
    //       accessToken: fbPageAccess,
    //       fileToUpload: dataUri
    //     })
    // };
    // const response = await fetch('https://localhost:7087/api/Facebook', requestOptions)//.then((response) => { // wait for Promise to be done
    // const data = await response.json();
    // console.log("response",data);
   
 
    
}





return (
    <div className="wrapper" width="50%" align="center">
    
    <h2>Write the comment for the post </h2>
    <form  onSubmit={onhandleSubmit}>
    <fieldset width="50%">
        <label>
        For page {pageTitle} with post ID {postID}
        </label>
       <label>
         <p>Message</p>
         <textarea type="text" name="message"  cols="50"
            rows="3" value={message} onChange={(event) =>
          setMessage(event.target.value)
        } />
        </label>
       
       <br></br>
       
       <button type="button" align="center" onClick={onhandleSubmit}>Post</button>
     </fieldset>
     {/* <button className={ `like-button ${isClicked && 'liked'}` } onClick={ handleClick }>
          <span className="likes-counter">{ `Like | ${likes}` }</span>
        </button> */}
    </form>
 </div>
  );



}

 
