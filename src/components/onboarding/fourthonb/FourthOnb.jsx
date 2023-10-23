import React,{useState, useContext} from 'react'
import Lasulogo from '../../Lasulogo'
import '../thirdonb/ThirdOnb.css'
import user_icon from '../../../assets/user.svg'
import OtpInput from './OtpInput'
import './FourthOnb.css'
import { SectionContext } from '../../../context/SectionContext'


const FourthOnb = () => {
    const {setStep} = useContext(SectionContext)
    const [result, setResult] = useState('_')
    const onSubmit = (e) => {
        e.preventDefault()
        if(result.length === 6) {
            alert("submited")
            setStep(5)
        } else {
            alert('invalid otp')
        }
    }
  
  return (
        <div className='first_main'>
            <div className='logodiv'>
                <Lasulogo/>
                <div className='sign_up'>
                    <p className='h1'>Verification</p>
                    <p className='body_text'>Enter your credentials to gain access.</p>
                </div>
            </div>
            <form className='email_form' onSubmit={onSubmit}>
                <div className='otp_main_div'>
                    <OtpInput setResult={setResult}/>
                    <div className='timer_div'>
                        <p className='input_text'>Didn’t get a code? <b>Resend</b></p>
                        <p className='input_bold'>2:00</p>
                    </div>
                </div>
                <div className='active'>
                    <button type='submit'>Verify code</button>
                </div>
            </form>
        </div>
  )
}

export default FourthOnb