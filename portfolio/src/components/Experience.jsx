import React from 'react';
import qavilogo from '../assets/qavilogo.svg';
import Companies from './Companies';
import '../styles/Experience.scss'
function Experience() {
 
  return (
    <>
    <div className="experience" id="experience">
    <div className='title'> <h2>Experience:</h2></div>
      <div className='companies'>
        <Companies name="Qavi Technologies" description="Working as Full Stack developer for multiple teams and gaining experience by working under multiple team leads" designation="Software Engineer" img={qavilogo} startDate="July 2022" endDate="Present"/>
        <Companies name="Qavi Technologies" designation="Java Intern" img={qavilogo} startDate="January 2022" endDate="July 2022" description="Worked as Java Intern on Springboot framework under highly professional team lead and skilled colleagues"/>
      </div>
    </div>
    </>
  );
}

export default Experience;
