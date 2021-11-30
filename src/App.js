
import './App.css';
import x from './b2.png';
import githubicon from './github.png';
import instagramicon from './instagram.png';
import codewars from './codewars.svg';
import me from './me.jpg';
import video from './video.mp4';
import tinda from './tinda.png';
import django from './django.jpeg';
import roboarm from './arm.png';
import githubimg from './github.png';







function App() {
  return (
    <>
        <section class="top">
          <nav class="navbar">
            <img src={ x } alt="logo" class="logo"/>
            <ul>
              <li><a href="#about-me">About Me</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#footer">Contact</a></li>
            </ul>
          </nav>
          <div class ="content">
              <div class="name-container">
                <hi class="name">Harpreet Singh</hi>
                <p class="name-p">Full Stack Developer</p>
                <a href="#about-me"><div class="button">About Me</div></a>
                </div>
                <div class="socials">
                <a href="https://github.com/harric07"><img src={githubicon} class="githubicon" fill="#ffffff"/></a>
                <a href="https://www.codewars.com/users/18_650"><img src={codewars}  class="codewarsicon" /></a>
                <a href="https://www.instagram.com/studio.sublime"><img src={instagramicon} class="instagramicon"/></a>
              </div>
          </div>
        </section>
        <section class="second-section" id="projects">
          <h2 class="project-title">Projects: </h2>
          <div class="cards-container">
            <div class="project-container">
              <div class="project-card">
                  <div><img class="project-image" src={tinda} alt="" />
                  <h3 class="card-title">tinda:</h3>
                  <hr class="solid"/>
                  <p class="project-text">Python library of Modern Simple Wrapper functions. It supports voice commands for all of them. (currently in developement stage, version 0.0.15.)<br/><br/><hr class="solid"/>© copyright reserved!</p>
                </div>
              </div>
              </div>
              <div class="project-container">
              <div class="project-card">
                  <div><img class="project-image" src={django} alt="" />
                  <h3 class="card-title">django</h3>
                  <hr class="solid"/>
                  <p class="project-text">Experienced in django CRUD, Auth, Routing, Models and Databases.<br/><br/><hr class="solid"/></p>
                </div>
              </div>
              </div>
              <div class="project-container">
              <div class="project-card">
                  <div><img class="project-image" src={githubimg} alt="" />
                  <h3 class="card-title">Github</h3>
                  <hr class="solid"/>
                  <p class="project-text">Link to the Github profile<br/><br/><hr class="solid"/></p>
                </div>
              </div>
              </div>
              <div class="project-container">
              <div class="project-card">
                  <div><img class="project-image" src={roboarm} alt="" />
                  <h3 class="card-title">3d Printing & Robotics</h3>
                  <hr class="solid"/>
                  <p class="project-text">Experiences with 3d priting, arduino, raspberry pi, other IOT developement environments.<br/>
                  3d printed 12 feet tall sculpture in 107 tiny parts.<br/><hr class="solid"/></p>
                </div>
              </div>
              </div>
            </div>
            
        </section>
        <section class="bottom" id="about-me">
          <div class="about-me">
            <div class="info">
              <h2 class="title">About Me</h2>
              <p class="title-description">Hi, My name is Harpreet Singh. I am a Software Developer.<br/>
              Once upon a time i used to be an Interior designer, <br/>
              have been working as a Cabinet Marker since past two years.</p>
            </div>
            <div><img src={me} class="me" /></div>
          </div>
        </section>
        <footer id="footer">
          <div class="footer-container">
            <h5>Email: harpreetsingh1811@gamil.com</h5>
          </div>
        </footer>
    </>
  );
}

export default App;
