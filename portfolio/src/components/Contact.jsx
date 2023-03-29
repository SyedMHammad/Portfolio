import '../styles/Contact.scss';
import {useState} from 'react';
import ConfirmationModal from './ConfirmationModal';
import emailjs from '@emailjs/browser'
function Contact(){
    const [inputs, setInputs] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalStatus, setModalStatus] = useState('');

    async function Submit(event) {
        event.preventDefault()
        console.log(process.env.REACT_APP_KEY)
        const postResponse = await emailjs.send(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID,inputs,process.env.REACT_APP_KEY)
        console.log(postResponse)
        if(postResponse.status === 200) {
            setModalMessage('Query submitted successfully');
            setModalStatus(postResponse.status);
        } else {
            setModalMessage('Error');
            setModalStatus(postResponse.status);
        }
        setShowModal(true);
    }
    function handleInput(event) {
        const name = event.target.name;
        const value = event.target.value;
        console.log("Name:",name,"Value",value)
        setInputs(values => ({ ...values, [name]: value }))
    }
    return (
        <>
            <div className='form-div'>
                <h1>Contact:</h1>
                <form className="form" action="Submit">
                    <div className='form-text'> <label>
                        Email Address:
                        <textarea required type="text" name="email" id="title" onInput={handleInput} />
                    </label>
                        <label >
                            Subject:
                            <textarea type="text" name="subject" id="body" onInput={handleInput}/>
                        </label>
                        <label >
                            Message:
                            <textarea type="text" name="message" id="userId" onInput={handleInput}/>
                        </label>
                    </div>
                    <button onClick={Submit}>Submit</button>
                </form>
            </div>
            {showModal && <ConfirmationModal message={modalMessage} status={modalStatus} />}
        </>
    )
}
export default Contact;