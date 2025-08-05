import React from 'react'
import CenterMenu from './CenterMenu'
import muziclogo from "../images/muziclogo.png"


function Header() {
    const buttonStyle = "border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]"

  return (
    <div className="header bg-[#081730] flex items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8]">
        <img src={muziclogo} alt="musiclogo" className="logo w-[42px] h-[42]" />
        <CenterMenu />
        <div className="buttons flex">
            <button className={`mr-[35px] hover:bg-[#232A4E] ` +buttonStyle}>Login</button>
            <button className={buttonStyle+` hover:bg-[#232A4E]`}>Sign Up</button>
        </div>
    </div>
  )
}

export default Header