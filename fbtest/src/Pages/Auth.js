/* Funtions related to handling the user context thought the application for FB Authentication
   Currently stores accessToken,userID,auth state
*/

import { useState, createContext} from "react";

export const UserContext = createContext({ accessToken: '',userID:'', auth: false, pageacessToken: '', pageID: '' });



export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ accessToken: '',userID:'', auth: false, pageacessToken: '', pageID: ''});

  const login = (accessToken,userID,pageacessToken='',postID='') => {
    setUser((user) => ({
      accessToken:accessToken,
      userID:userID,
      auth: true,
      postID:postID,
      pageacessToken:pageacessToken
    }));

    
  };
const updatelogin = (pageacessToken,postID)=>{
  setUser((user) => ({
    accessToken:user.accessToken,
    userID:user.userID,
    auth: true,
    postID:postID,
    pageacessToken:pageacessToken
  }));
 
}
  const logout = () => {
    setUser((user) => ({
      accessToken:'',
      userID:'',
      auth: false,
    }));
  };

  return (
    <UserContext.Provider value={{ user, login, logout, updatelogin }}>
      {children}
    </UserContext.Provider>
  );
};

