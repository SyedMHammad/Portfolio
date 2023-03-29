import Home from './Home';
import Education from './Education';
import '../styles/Main.scss'
import Experience from './Experience';
function MainPage(){
  return(
    <>

    <div className='detail' id="detail">
        <div id="home" className='home'>
          
            <Home />
          <div className='des-box'>
            <div className='description'>
              <p>As a computer science enthusiast, I am passionate about staying up-to-date with the latest advancements in the field. Currently working as a software engineer, I have a command on full-stack development and possess a unique set of skills that make me a valuable asset to any company.</p>
              <p>One of my key traits is punctuality. I understand the importance of meeting deadlines and proactively manage my time to ensure that projects are completed on schedule. Additionally, I recognize the value of being available to my team and clients. I make myself accessible for questions and feedback, and I am responsive to emails and messages.</p>
              <p>Attentiveness is a critical skill for a software engineer, and I have a keen eye for detail. I am diligent in my work, ensuring that every line of code is correct and every component of the software is functional. I am also vigilant in testing my work to identify and fix any bugs or issues.</p>
              </div>
            <div className='skills'>
              <h2>Skills:</h2>
              <p>Java, ReactJs, C, C#, C++, Springboot, HTML, CSS, JavaScript, ElasticSearch, Flutter, VueJs, MySQL, PostgreSQL,Node </p>
            </div>
          
          </div>
        </div>
        <div className='education-outer' id="education">
        <div  className='education'>
          
          <h2>Education:</h2>
          <br />
          <Education title="Education Trust Nasra School" degree="Matriculation" start="2014" end="2016"/>
          <Education title="Aga Khan Higher Secondary School" degree="Intermediate" start="2016" end="2018" />
          <Education title="FAST-National University of Computer and Emerging Sciences" degree="Bs(CS)" start="2018" end="2022"/>
        
        </div>
        </div>
        <Experience />
        
      </div>
    </>
  )
}

export default MainPage;