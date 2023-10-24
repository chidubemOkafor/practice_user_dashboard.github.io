import React,{useState,useEffect} from 'react'
import Lasulog from '../../../assets/lasu.png'
import './FifthOnb.css'
import ArrowBottom from '../../../assets/arrow-bottom.svg'
import addIcon from '../../../assets/tick-square.svg'
import removeIcon from '../../../assets/minus-square.svg'
import cancle from '../../../assets/close-circle.svg'
import { useDetectClickOutside } from 'react-detect-click-outside'

const FifthOnb = () => {
    const [selectLevel, setSelectLevel] = useState(false)
    const [selectedLevels, setSelectedLevels] = useState([])
 
    const iconstyle = {
        width:16,
        height:16
    }

   const handleClickedLevel = (value) => {
        if(selectedLevels.includes(value))  {
            const updatedLevels = selectedLevels.filter((level) => level !== value);
            setSelectedLevels(updatedLevels);
        }  else {
            setSelectedLevels([...selectedLevels, value])
        }
        console.log(selectedLevels);
    }

    const handleClickOutside = () => {
        setSelectLevel(false);
    };
   
    const ref = useDetectClickOutside({onTriggered: handleClickOutside, disableClick: true,})
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
            <div className='select_level_container'>
                <div className='inner_email_div'>
                    <h4 className='h4'>Select your department</h4>
                    <div className='dropdown_div' tabIndex="0">
                        <p className='dropdown_div_text'>Select your department</p>
                        <img src={ArrowBottom} style={{width: 16, height:16}}/>
                    </div>
                </div>

                <div>
                {!selectLevel ? (
                <div className='inner_email_div'>
                    <h4 className='h4'>Select Levels</h4>
                    <div className='dropdown_div' tabIndex="0" onClick={() => setSelectLevel(true)}>
                        <p className='dropdown_div_text'>Select Level</p>
                        <img src={ArrowBottom} style={{width: 16, height:16}}/>
                    </div>
                    <div className='showlevel_div'>
                    {selectedLevels?.map((level) => (
                        <div className='showlevel' onClick={() => handleClickedLevel(level)}>{level.slice(0,4)}<img src={cancle} style={{width:12, height:12}}/></div>  
                    ))}
                    </div>
                </div>
                )
               :(
                <div ref={ref}>
                    <p className='dropdown_div_text_white'  >Select all that applies</p>
                    <ul className='level_div'>
                        <li className='levels' value='100Level' onClick={() => handleClickedLevel('100Level')}><img src={selectedLevels.includes('100Level') ? addIcon : removeIcon} style={iconstyle}/>100Level</li>
                        <li className='levels' value='200Level' onClick={() => handleClickedLevel('200Level')}><img src={selectedLevels.includes('200Level') ? addIcon : removeIcon} style={iconstyle}/>200Level</li>
                        <li className='levels' value='300Level' onClick={() => handleClickedLevel('300Level')}><img src={selectedLevels.includes('300Level') ? addIcon : removeIcon} style={iconstyle}/>300Level</li>
                        <li className='levels' value='400Level' onClick={() => handleClickedLevel('400Level')}><img src={selectedLevels.includes('400Level') ? addIcon : removeIcon} style={iconstyle}/>400Level</li>
                        <li className='levels' value='500Level' onClick={() => handleClickedLevel('500Level')}><img src={selectedLevels.includes('500Level') ? addIcon : removeIcon} style={iconstyle}/>500Level</li>
                    </ul>
                </div>
                )}
                </div>
                
            </div>
        </div>
        {selectedLevels.length === 0 ? <button className='notactive'>Proceed</button> : <button className='active'>Proceed</button>}
    </div>
  )
}

export default FifthOnb