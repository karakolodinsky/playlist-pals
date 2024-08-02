function App() {

  return (
    <>
        <h1 className="logo">
    p<span className = "inbetween">l</span>a<span className = "inbetween">y</span>l<span className = "inbetween">i</span>s<span className = "inbetween">t</span>p<span className = "inbetween">a</span>l<span className = "inbetween">s</span>
  </h1>
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
    </>
  )
}

export default App
