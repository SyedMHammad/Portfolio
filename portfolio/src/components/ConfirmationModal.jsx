import '../styles/ConfirmationModal.scss'
import { useState,useEffect } from 'react'
function ConfirmationModal(props){
    const [show, setShow] = useState(false);

    useEffect(() => {
        console.log("Called")
      if (props.message) {
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 5000);
      }
    }, [props.message]);
    return(
        <>
        <div className={`confirmation-message ${show ? 'show' : ''}`}>
            <i className="fa fa-solid fa-check" style={{"color":"green"}}></i>
            <strong>{props.status}</strong>
            <p>{props.message}</p>
        </div>
        </>
    )

}
export default ConfirmationModal