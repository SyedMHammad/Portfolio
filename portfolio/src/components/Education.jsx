import '../styles/Education.scss'
function Education(props){
    return(
        <>
        <div className="institute">
            <h3>{props.title}</h3>
            <p>{props.degree}</p>
            <p>{props.start} - {props.end}</p>
        </div>
        </>
    )
}
export default Education;