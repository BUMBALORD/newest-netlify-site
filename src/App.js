import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import './App.css';
import glueCon from './D7MwnVQW4AAPsYe.jpg'
import teach from './IMG_6023.jpeg'

let divStyle = {
  width: "18rem"
};

let cardStyle = {
  width: "100%",
  height: "15vw",
  objectFit: "cover"
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="row">
            <div className="col-lg-6 col-md-8 mx-auto">
              <p className="mt-5 ml-3 mr-3 white">
                <b>David Hallinan</b> is an integration strategist and Head of Content at <a href="https://www.kloudless.com">Kloudless</a> in Berkeley, California. He enjoys painting, JavaScript, vintage synths, drum machines and forcing his sports allegiances on his children. Read some of his published works <a href="https://kloudless.com/blog/author/david-hallinan/">HERE</a>
              </p>
            </div>
          </div>
          <div className="row mt-5 mb-5">
      {/* <div className="col-lg-8 col-md-8 col-sm-12 mx-auto"> */}
      <div className="card float-lg-left float-xl-left mr-5" style={divStyle}>
          <img className="card-img-top" style={cardStyle} src={glueCon} alt="gluecon" />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">GlueCon Talk</h5>
            <p className="card-text">My presentation on Unified APIs and the future of app integrations at GlueCon 2019</p>
            <a href="https://www.youtube.com/watch?v=9zfPL5P_adE" className="mt-auto btn btn-primary">Watch Video</a>
          </div>
      </div>
        <div className="card float-lg-right float-xl-right ml-5" style={divStyle}>
            <img className="card-img-top" style={cardStyle} src={teach} alt="teachin" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Embrace Confusion</h5>
              <p className="card-text">An article about my time teaching Full Stack Javascript at UC Berkeley</p>                
              <a href="https://medium.com/@trilogyeducationservices/embrace-confusion-instructor-david-hallinan-shares-his-advice-for-learning-how-to-code-996462411a1d" className="mt-auto btn btn-primary">Read Now</a>
            </div>
        </div>
      {/* </div> */}
    </div>
      </header>
      <footer>
        <div className="col-lg-8 col-md-10 mx-auto mt-3">
          <ul className="list-inline text-center">
            <li className="list-inline-item">
              <a href="https://twitter.com/david_hallinan">
                  <FontAwesomeIcon 
                    icon={faTwitter} 
                    size="4x"
                  />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/dhallinan/">
                  <FontAwesomeIcon 
                    icon={faLinkedin} 
                    size="4x"
                  />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/BUMBALORD">
                  <FontAwesomeIcon 
                    icon={faGithub} 
                    size="4x"
                  />
              </a>
            </li>
          </ul>
          <p className="copyright text-muted">Copyright &copy; David Hallinan 2019</p>
        </div>
  </footer>
    </div>
  );
}

export default App;
