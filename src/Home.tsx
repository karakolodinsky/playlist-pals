import { NavLink } from 'react-router-dom';
import './index.css'
import { redirectToAuthCodeFlow } from './authCodeWithPkce';
const Home = () => {
        const clientId = "fe405747701f42ba9c275ddd6f37ffb7";
        const handleAuth = async () => {
                redirectToAuthCodeFlow(clientId);
                // The user will be redirected to Spotify for authentication, and then back to your app with a code
            };
        

        return (
                <div className='flex'>
                        <div className='introdiv versionavec text' id='text'>
                        </div>
                  <p className="button frames" onClick={handleAuth}>Connect to Spotify</p>
                  

                  <div className='flex-row'>
                        <div className='credit frames'>
                                <NavLink to="/credits"> 
                                <a className='styling'>c </a> 
                                </NavLink>
                        </div>

                        <div className='credit frames'>
                                <a href='https://github.com/karakolodinsky/playlist-pals/' className='styling'>g</a>
                        </div>

                        <div className='credit frames'>
                        <a href='https://twitter.com/domushen' className='styling'>t</a>
                        </div>

                        <div className='credit frames'>
                        <a href='https://domu.club/' className='styling'>d</a>
                        </div>
                </div>
                </div>
        )
}

export default Home;