import './App.css';
import {useGoogleLogin} from '@react-oauth/google';
import { hasGrantedAllScopesGoogle } from '@react-oauth/google';
//jwt -> backend, jwt->exchanged for access token or refresh token
function App() {
    const login = useGoogleLogin({
        onSuccess: tokenResponse =>{
            console.log(tokenResponse.access_token)
            //const hasAccess = hasGrantedAllScopesGoogle(
            // tokenResponse,
            // 'https://www.googleapis.com/auth/youtube',
            // )
            // console.log(hasAccess);
        },
        scope: 'https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.force-ssl'
    });
    
    
    return (
        <div className="App">
            <header className="App-header">
                <button onClick={login}>
                    <i className="fa-brands fa-google"></i>
                    Continue with google
                </button>
            </header>
        </div>
    );
}
// ya29.a0AWY7Ckm5kIVHSazJ7rWfv5CIxB4MyL71QGg4Y7R2mUjQrtlUogFq-7lXa2MxHzu3XpX0msnUKjrDr93Pok3hUPduKqteygjzFKnTxUEOJTLJA9efZgzJwSQ1HibuMMBPb7artFs7UUenHNM2JSRrBK6o0x791QaCgYKAdsSARASFQG1tDrpiU5haULRFeIWtk1M24y6zQ0165
export default App;
