import '../styles/Companies.scss'
function Companies(props){
    return(
        <>
        
        <div className="company">
            <div className="comp-logo">
            <img src={props.img} alt="Loading Failed"/>
            </div>
            <div className="comp-details">
                <strong>{props.name}</strong>
                <p>{props.startDate} - {props.endDate}</p>
                <p>{props.designation}</p>
                <p>{props.description}</p>
            </div>
        </div>
        </>
    )
}
export default Companies;