import { Collapse } from '@mui/material'
import React, {useState} from 'react'
import InputCard from "../InputCard"
import "./styles.scss"

const InputContainer = ({listId,type}) => {
    const [open,setOpen]=useState(false)
  return (
    <div className="input-container">
        <Collapse in={open}>
            <InputCard setOpen={setOpen} listId={listId} type={type}/>


        </Collapse>
        <Collapse in={!open}>
            <div className="input-content">
                <button onClick={()=>setOpen((prev)=>!prev)}>
                    {type==="card"?"+ Add card" : "Add List"}
                </button>
            </div>
        </Collapse>
    </div>
  )
}

export default InputContainer