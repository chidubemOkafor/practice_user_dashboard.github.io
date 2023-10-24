import React,{useEffect,useState,useContext} from 'react'
import { SectionContext } from '../../../context/SectionContext'
import './SecondOnb.css'
import tag from '../../../assets/paper.png'
import books from '../../../assets/books.png'
import Lasulogo from '../../Lasulogo'


const SecondOnb = () => {
    const {step, setStep} = useContext(SectionContext)
    const [xTranslation, setXTranslation]= useState(175);
    const [active, setActive] = useState(false)
    const yTranslation = 0;

    useEffect(()=> {
        setTimeout(() => {
            setXTranslation(-175)
            setActive(true)
        },3000)
    })

    const handlePageScroll = () => {
        setStep(3)
    }

    const handleLeftSwipe = () => {
        
    }
  return (
    <div className='first_main'>
        <div  className='second_logo_container'>    
                <Lasulogo/>
        <div className='eclipse_container'>
            <div className='eclipse'></div>
            <div className='eclipse'></div>
            <div className={`${'eclipse'} ${'brown'}`}></div>
            <div className='eclipse'></div>
            <div className='eclipse'></div>
        </div>
        </div>
        <div className='main_tag_container' style={{transform: `translate(${xTranslation}px, ${yTranslation}px)`}}>
            <div className='tagName'>
                <h1 className='h1'>Mark Attendance</h1>
                <h2 className='faint_text'>Your dashboard gives you access to some more tools to make your work attendance. Like </h2> 
                <img className='schedule_image' style={{height: 232.078, width: 232.078}} src={tag}/>
            </div>
            <div className='tagName'>
                <h1 className='h1'>Mark Attendance</h1>
                <h2 className='faint_text'>Your dashboard gives you access to some more tools to make your work attendance. Like </h2> 
                <img className='schedule_image' style={{height: 278.024, width: 231.687}} src={books}/>
            </div>
        </div>
        {!active ? <button className='notactive'>Proceed</button> : <button className='active' onClick={() => handlePageScroll()}>Proceed</button>}
    </div>
  )
}

export default SecondOnb