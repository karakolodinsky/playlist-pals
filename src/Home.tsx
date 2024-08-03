import { NavLink } from 'react-router-dom';
import './index.css'

const Home = () => {

        return (
                <div className='flex'>
                        <div className='introdiv versionavec text'>
                                <p> Intro text here. Make a text scrolling css animation?</p>
                        </div>
                  <NavLink to="/select" style={{textDecoration: 'none'}}><p className="button frames">Connect to Spotify</p></NavLink>
                  

                  <div className='flex-row'>
                        <div className='credit frames'>
                                <NavLink to="/credits"> 
                                <p className='styling'>c </p> 
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