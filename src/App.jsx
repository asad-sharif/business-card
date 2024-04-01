import './App.css'
import photo from './photo.jpg'
import ig from './ig-icon.png'
import fb from './fb-icon.png'
import github from './github-icon.png'
import linkeidn from './linkedin-icon.png'

function App() {

  return (
    <>
      <div className="card">
        <div className="photo">
          <img src={photo} alt="" />
        </div>
        <div className="content">
          <div className="header">
            <h1>Laura Smith</h1>
            <p>Frontend Developer</p>
            <div className="header-buttons">
              <button>✉ Email</button>
            </div>
          </div>

          <div className="about">
            <article>
              <h2>About</h2>
              <p>
                I am a frontend developer with 5 years of experience. I have a passion for creating beautiful and responsive websites.
              </p>
            </article>
            <article>
              <h2>Interest</h2>
              <p>
                I am interested in web development, design, and technology. I love to learn new things and improve my skills.
              </p>
            </article>
            <article>
              <h2>Skills</h2>
              <p>
                HTML, CSS, JavaScript, React, Bootstrap, Figma, Photoshop
              </p>
            </article>

          </div>
        </div>
        <div className="footer">
          <a href="#"><img src={fb} alt="" /></a>
          <a href="#"><img src={ig} alt="" /></a>
          <a href="#"><img src={linkeidn} alt="" /></a>
          <a href="#"><img src={github} alt="" /></a>
        </div>
      </div>

    </>
  )
}

export default App
