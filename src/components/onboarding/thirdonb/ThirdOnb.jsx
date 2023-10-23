import React,{useContext} from 'react'
import Lasulogo from '../../Lasulogo'
import './ThirdOnb.css'
import user_icon from '../../../assets/user.svg'
import { SectionContext } from '../../../context/SectionContext'

const ThirdOnb = () => {
    const {step, setStep} = useContext(SectionContext)

    
    const handleSubmit = (e) => {
        e.preventDefault()
        setStep(4)
    }
  return (
        <div className='first_main'>
            <div className='logodiv'>
                <Lasulogo/>
                <div className='sign_up'>
                    <h1 className='h1'>Sign in</h1>
                    <h2 className='body_text'>Enter your credentials to gain access.</h2>
                </div>
            </div>
           
            <form className='email_form' onSubmit={handleSubmit}>
                <div className='inner_email_div'>
                    <h4 className='h4'>School Email Address/ID/Phone Number</h4>
                    <div className='form_input_div'>
                        <img className="user_icons" src={user_icon} alt="User Icon" style={{width: 16, height:16, flexShrink:0}}/>
                        <input type='text' placeholder='This is placeholder text' className='email_input' required></input>
                    </div>
                </div>
                <div className='active'>
                    <button  type='submit'>Request Code</button>
                </div>
            </form>
        </div>
  )
}

export default ThirdOnb