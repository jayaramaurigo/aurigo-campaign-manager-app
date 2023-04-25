import './App.css';
import {useGoogleLogin} from '@react-oauth/google';
import { hasGrantedAllScopesGoogle } from '@react-oauth/google';
//jwt -> backend, jwt->exchanged for access token or refresh token
function App() {
    const login = useGoogleLogin({
        onSuccess: tokenResponse =>{
            console.log(tokenResponse.access_token)
            const hasAccess = hasGrantedAllScopesGoogle(
            tokenResponse,
            'https://www.googleapis.com/auth/youtube',
            )
            console.log(hasAccess);
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
// ya29.a0Ael9sCMNFlUi-EsFoBa36faUtZXv_MUS5yRHdq3Ilazfq_TlORH08BWM0gxAcfWIqaXcg0HiFpHgUnOES7pJ6PiyQoXkpCCir8yBfVRvDkrjBPXT6_FE5Cb2AMHKb2PGfO4POvPPDtWVD0oihxULcX44u1qraCgYKAeYSARASFQF4udJhvZW6Io3xKEwrFML9LrUnLw0163
export default App;
