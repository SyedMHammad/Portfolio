import profilePicture from '../assets/profile_picture.jpg'
import '../styles/Home.scss'
function Home(){
    return(
        <>
        <div className="bio">
            <img src={profilePicture} alt="Image Loading Failed" />
            <h1>Syed Muhammad Hammad</h1>
        </div>
        </>
    )
}
export default Home;