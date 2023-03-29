import '../styles/Projects.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import auto1 from '../assets/auto1.webp';
import auto2 from '../assets/auto2.webp';
import auto3 from '../assets/auto3.webp';
import auto4 from '../assets/auto4.webp';
function Projects(props){
    return(
        <>
        <div className='projects'>
            <div className='project'>
                <h2>1. AutoTechConnect</h2>
            <div className='carousel-div'>
                <Carousel
                infiniteLoop
                showStatus={false}
                showArrows={false}
                showThumbs={false}
                interval={1000}>
                    <div>
                        <img src={auto1} alt="loading failed" />
                    </div>
                    <div>
                        <img src={auto2} alt="loading failed" />
                    </div>
                    <div>
                        <img src={auto3} alt="loading failed" />
                    </div>
                    <div>
                        <img src={auto4} alt="loading failed" />
                    </div>
                </Carousel>
            </div>
            
            <div className='technology-stack'><strong>Technology stack:</strong><p>Springboot (JAVA), Flutter, PostgreSQL, Firebase Messaging, VueJs</p></div>
            <div className='proj-desc'><strong>Description:</strong><p>Developed backend for a Canada based client's project 'AutoTechconnect' and currently providing support for the backend (Springboot), for admin panel (VueJs) and also for the mobile application (flutter). AutoTechconnect's aim is to connect auto technicians via a platform where they can find work and delegate work. The application is live on playstore as well as on AppStore.</p></div>
            <div className='url'><button><a href="https://play.google.com/store/apps/details?id=com.qavi.techconnect&hl=en&gl=US">Go To PlayStore</a></button></div>
            </div>
        </div>
        </>
    )
}
export default Projects;