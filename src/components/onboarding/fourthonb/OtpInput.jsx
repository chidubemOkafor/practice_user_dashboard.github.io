// OTPInput.js
import React, { useState } from 'react';
import AuthCode from 'react-auth-code-input'

const OtpInput = (prop) => {
    const handleOnChange = (res) => {
        prop.setResult(res)
    }

  return (
    <div className='main_otp'>
        <div className='main_otp'>
        <AuthCode placeholder='_' inputClassName='input' allowedCharacters='numeric' containerClassName='authcode' onChange={handleOnChange}/>
        </div>
    </div>
  );
};

export default OtpInput;
