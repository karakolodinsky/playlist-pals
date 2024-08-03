
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
                            const profileData = await fetchProfile(accessToken);
                            populateUI(profileData);
                        } catch (error) {
                            console.error("Error fetching profile:", error);
                        }
                    }
                };
        
                fetchProfileData();
            }, []);
        
            async function fetchProfile(accessToken: String) {
                const result = await fetch("https://api.spotify.com/v1/me", {
                    method: "GET",
                    headers: { Authorization: `Bearer ${accessToken}` }
                });
        
                return await result.json();
            }
        
        return (
                <div>  
                <section id="profile">
                    <h2>Logged in as <span id="displayName"></span></h2>
                    <img id="avatar" width="200" src="#" />
                    <ul>
                      <li>User ID: <span id="id"></span></li>
                      <li>Email: <span id="email"></span></li>
                      <li>Spotify URI: <a id="uri" href="#"></a></li>
                      <li>Link: <a id="url" href="#"></a></li>
                      <li>Profile Image: <span id="imgUrl"></span></li>
                    </ul>
                  </section>


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

        function populateUI(profile: UserProfile) {
                document.getElementById("displayName")!.innerText = profile.display_name;
                document.getElementById("avatar")!.setAttribute("src", profile.images[0].url)
                document.getElementById("id")!.innerText = profile.id;
                document.getElementById("email")!.innerText = profile.email;
                document.getElementById("uri")!.innerText = profile.uri;
                document.getElementById("uri")!.setAttribute("href", profile.external_urls.spotify);
                document.getElementById("url")!.innerText = profile.href;
                document.getElementById("url")!.setAttribute("href", profile.href);
                document.getElementById("imgUrl")!.innerText = profile.images[0].url;
            }
}

export default Select;



