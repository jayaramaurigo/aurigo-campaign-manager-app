/* Contains components for creating and publishing posts in FB */
import { UserContext } from './Auth';
import { useState,useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {Paper} from '@mui/material';
// Compenent to handle failed authentication 
function AuthFailed()
{
   
 
    return (<>Failed authentication please reload and go back to login!</>);
}

const fileToDataUri = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = (event) => {
    resolve(event.target.result)
  };
  reader.readAsDataURL(file);
  })

function CreatePostAuthenticated({user,updatelogin,setpoststatus})
{ 
    
    const [pageID,setPageId]=useState(process.env.REACT_APP_PAGE_ID);
    const [pageTitle,setPageTitle]=useState(process.env.REACT_APP_PAGE_TITLE);
    const [fbPageAccess,setFbPageAccessToken]=useState('');
    const [message,setMessage]=useState('');
    const [dataUri, setDataUri] = useState('');
    const [file, setFile] = useState(null);
    useEffect(()=>{

//  Fetch page access token for sending post requests on the default page id provided
    window.FB.api(
        `/${pageID}?fields=access_token&access_token=${user.accessToken}`,function(response)
        {
            // Update the page access token recieved 
            setFbPageAccessToken(response.access_token);
            console.log("page access",response);
            
        }

      );

}, [])

const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
  if (e.target.files) {
    setFile(e.target.files[0]);
    fileToDataUri(e.target.files)
    .then(dataUri => {
      setDataUri(dataUri)
    })
  }
};

// Event handler to publish the post
const onhandleSubmit = async () => 
{
  
  const formData = new FormData();
	

	formData.append('source', file);
	formData.append('message', message);
	formData.append('access_token', fbPageAccess);
	let response = await fetch(`https://graph.facebook.com/${pageID}/photos`, {
		body: formData,
		method: 'post'
	});
	response = await response.json();
	console.log(response);


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
    let msg='Post submitted sucessfully with id: '+ response.id;
    alert(msg);
  updatelogin(fbPageAccess,response.id);
  setpoststatus(true);
  
   
    
}



const onChange = (file) => {
  
  if(!file) {
    setDataUri('');
    return;
  }

  setFile(file);
  fileToDataUri(file)
    .then(dataUri => {
      setDataUri(dataUri)
    })
  
}

return (
    <div className="wrapper" width="50%" align="center">
    
    <h2>Write the message for the post </h2>
    <form  onSubmit={onhandleSubmit}>
    <fieldset width="50%">
        <label>
        For page {pageTitle} with page ID {pageID}
        </label>
       <label>
         <p>Message</p>
         <textarea type="text" name="message"  cols="50"
            rows="3" value={message} onChange={(event) =>
          setMessage(event.target.value)
        } />
        </label>
        <div>
        <img width="200" height="200" src={dataUri} alt="avatar"/>
        {/* <input type="file" onChange={handleFileChange} /> */}
   <input type="file" onChange={(event) => onChange(event.target.files[0] || null)} />
       </div>
      
       
       <br></br>
       
       <button type="button" align="center" onClick={onhandleSubmit}>Post</button>
     </fieldset>
   
    </form>
 </div>
  );



}

 

export default function CreatePost({userContext})
{


    const {user,logout,updatelogin} = useContext(UserContext);
    const [poststatus,setpoststatus]=useState('');
   // For navigating to other pages
  const navigate = useNavigate();

   // Render components based on the user authenticated status
  let post= (user.auth && !poststatus)?<CreatePostAuthenticated user={user} updatelogin={updatelogin} setpoststatus={setpoststatus}  />:(poststatus)?navigate('/createcomment'):<AuthFailed/>;
   // let post= user.auth?<CreatePostAuthenticated user={user} updatelogin={updatelogin} />:<AuthFailed/>;
    return (post);
}