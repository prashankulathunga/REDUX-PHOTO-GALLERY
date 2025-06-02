import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { themeChange } from '../redux/feature/theme/ThemeSlice';

function ThemeButton() {

    const isTheme = useSelector((state)=>state.theme.darkMode)

    const dispatch = useDispatch();

    const handleClick = ()=>{
        dispatch(themeChange())
    }


  return (
    <div className='mt-8'>
      <button onClick={handleClick} className={`font-bold rounded-md py-1 ${isTheme? 'bg-black text-white': 'bg-white text-black'} lg:px-96 px-32`}>{isTheme ? "Light" : "Dark"}</button>
    </div>
  )
}

export default ThemeButton
