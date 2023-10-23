import React from 'react'
import Lasulog from '../../../assets/lasu.png'
import './FifthOnb.css'

const FifthOnb = () => {
  return (
    <div  className='first_main'>
        <div className='second_main_div'>
            <div className='first_main_div'>
                <img src={Lasulog} className='lasu_onb5_img' style={{width: 62.5, height:64}}/>
                <div className='p_div'>
                <p className='welcome_text'>Welcome Soso, let’s get you all set up</p>
                <p className='body_text'>Welcome to Your LASU APP, designed to make your work a bit much easier and easy to track. To begin please select all the courses you’re taking this semester. You can always do this much later, but it is useful to add at least 1 course before we proceed.</p>
                </div>
            </div>
            <div>
                <div className='inner_email_div'>
                    <h4 className='h4'>Select your department</h4>
                    <div className='form_input_div'>
                        <input type='text' placeholder='Select your department' className='email_input' required></input>
                    </div>
                </div>
                <div className='inner_email_div'>
                    <h4 className='h4'>Select Levels</h4>
                    <div className='form_input_div'>
                        <input type='text' placeholder='This is placeholder text' className='email_input' required></input>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default FifthOnb