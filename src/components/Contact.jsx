import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { SectionWrapper } from "../hoc";
import {faPhone}  from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div className='contacC'>
      <h3 className='text-white font-bold text-[24px] width:100 %'>CONTACT</h3>
      <div className='Z'>
      <div className='MC'>
       <div className='Mail'><FontAwesomeIcon icon={faPhone} /></div>
        <h4>+58-424-5190050</h4>
      </div>
      <div className='MC'>
        <div className='Mail'><FontAwesomeIcon icon={faEnvelope} /></div>
        <h4>ingsuarezgustavo@gmail.com</h4>
      </div>
      </div>
      </div>
  )
}
export default SectionWrapper(Contact, "contact");