import React,{useState,useEffect,useContext} from 'react'
import FirstOnb from '../../components/onboarding/firstonb/FirstOnb'
import SecondOnb from '../../components/onboarding/secondonb/SecondOnb'
import ThirdOnb from '../../components/onboarding/thirdonb/ThirdOnb'
import { SectionContext } from '../../context/SectionContext'
import FourthOnb from '../../components/onboarding/fourthonb/FourthOnb'
import FifthOnb from '../../components/onboarding/fifthonb/FifthOnb'

const Onboarding_pg = () => {
    const {step, setStep} = useContext(SectionContext)
    
    useEffect(() => {
        if (step === 1) {
            setTimeout(()=> {
                setStep(2)
            }, 5000)
        }
        alert(step)
    })
  return (
    <>
    {step === 1 &&<FirstOnb/>}
    {step === 2 &&<SecondOnb/>}
    {step === 3 &&<ThirdOnb/>}
    {step === 4 &&<FourthOnb/>}
    {step === 5 &&<FifthOnb/>}
    </>
  )
}

export default Onboarding_pg