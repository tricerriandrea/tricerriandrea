import Homepage from './components/Homepage';
import './App.css';
import ContactMe from './components/ContactMe';
import Certificate from './components/Certificate';
import Curriculum from './components/Curriculum';
import MyProjects from './components/MyProjects';
import {Nav, Navbar, Container} from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
<div>
<Navbar class="navbar navbar-expand-lg bg-light">
<Container> 
  <div class="container-fluid nav-menu">
<Navbar.Brand as={ Link } to="/" id="home" >Andrea Tricerri</Navbar.Brand>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-5 mb-lg-0">
        <li class="nav-item">
        <Nav.Link as={ Link } to="/myprojects" id="myProjectPage" aria-current="page">My Projects</Nav.Link>
        </li>
        <li class="nav-item">
          <Nav.Link as={ Link } to="/certificates" class="nav-link active" id="certificatePage" aria-current="page">Certificates</Nav.Link>
        </li>
        <li class="nav-item">
          <Nav.Link as={ Link } to="/cv" class="nav-link active" id="cvPage" aria-current="page">CV</Nav.Link>
        </li>
        <li class="nav-item">
          <Nav.Link as={ Link } to="/contactme" class="nav-link active" id="contactMePage" aria-current="page">Contact Me</Nav.Link>
        </li>
      </ul>
    </div>
  </div>
  </Container>
  </Navbar>
  <div>
    <Routes>
      <Route path='/' element= {<Homepage />  }></Route>
      <Route path='/myprojects' element= {<MyProjects />  }></Route>
      <Route path='/certificates' element= {<Certificate />  }></Route>
      <Route path='/cv' element= {<Curriculum />  }></Route>
      <Route path='/contactme' element= {<ContactMe />  }></Route>
    </Routes>
  </div>
</div>
</BrowserRouter> 
); 
}
export default App;
