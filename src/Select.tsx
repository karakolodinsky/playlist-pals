
import React, { useEffect, useState } from "react";
import { redirectToAuthCodeFlow, getAccessToken } from "./authCodeWithPkce";
import { NavLink } from "react-router-dom";

const clientId = "fe405747701f42ba9c275ddd6f37ffb7";

const Select = () => {

        useEffect(() => {
                const params = new URLSearchParams(window.location.search);
                const code = params.get("code");
        
                const fetchProfileData = async () => {
                    if (!code) {
                        redirectToAuthCodeFlow(clientId);
                    } else {
                        try {
                            const accessToken = await getAccessToken(clientId, code);
                            const playlistData = await fetchProfile(accessToken);
                            populateUI(playlistData);
                        } catch (error) {
                            console.error("Error fetching profile:", error);
                        }
                    }
                };
        
                fetchProfileData();
            }, []);
        
            async function fetchProfile(accessToken: String) : Promise<PagedPlaylists>{
                const result = await fetch("https://api.spotify.com/v1/me/playlists", {
                    method: "GET",
                    headers: { Authorization: `Bearer ${accessToken}` }
                });
                return await result.json();
            }
        
        return (
                <div>  
                <div className="playlist introdiv">
                    <img id="playlistImage"  src="#" />
                    <h2> <span id="playlistName" className="versionavec"> </span></h2>
                  </div>



                  <div className='flex-row'>
                        <div className='credit frames'>
                                <NavLink to="/credits" className='styling'> 
                                 c
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

        function populateUI(playlists: PagedPlaylists) {
                const playlist = playlists.items[0]
                console.log(playlist)
                document.getElementById("playlistImage")!.setAttribute("src", playlist.images[0].url)
                document.getElementById("playlistName")!.innerText = playlist.name;
            }

}


export default Select;



