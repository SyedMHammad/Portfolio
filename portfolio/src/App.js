import './styles/App.scss';
import { HashLink } from 'react-router-hash-link'
import MainPage from './components/MainPage';
import Experience from './components/Experience';
import './styles/MediaQuery.scss'
import { Route,Routes,Link} from 'react-router-dom';
function App() {
  return (
    <>
      <nav>
        <div className='header'>
          <h1>Portfolio</h1>
          <div className='routes'>
            <HashLink to="/#detail">Home</HashLink>
            <HashLink to="/#education">Education</HashLink>
            <HashLink to="/#experience">Experience</HashLink>
            <HashLink to="/#projects">Projects</HashLink>
            <HashLink to="/contact">Contact</HashLink>
          </div>
        </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<MainPage />}/>
        {/* <Route exact path="/experience" element={<Experience />} /> */}
      </Routes>
      <footer>
        <p>All Rights Reserved ©</p>
      </footer>
    </>
    
  );
}

export default App;
