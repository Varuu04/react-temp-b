import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
export default function App15() {
  return (
    <div>
        <h3>This is App15</h3>
        <div>
            <FaHome size={15}/>
            Home
        </div>
        <div>
        <FaWhatsapp size={15}/>Contact
        </div>
        <div>
        <div>
        <FaCartPlus size={15}/>Cart
        </div>
        </div>
    </div>
  )
}