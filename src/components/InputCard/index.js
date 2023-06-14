import React,{useContext, useState} from 'react';
import {Clear} from "@mui/icons-material";
import "./styles.scss";
import storeApi from "../../utils/storeApi"

const InputCard = ({setOpen,listId,type}) => {
  const[title,setTitle]=useState("");
  const {addMoreCard,addMoreList}=useContext(storeApi)
  const handleSubmit=()=>{
    if(type === "card"){
      addMoreCard(title,listId);
    }else{
      addMoreList(title);
    }
    setOpen(false);
    setTitle("")
  }

  return (
    <div className="input-card">
      <div className="input-card-container">
        <textarea value={title} className='input-text' placeholder={
          type==="card"?"Enter a title of this card..." : "Enter list title"
        }
        autoFocus
        onChange={(e)=>setTitle(e.target.value)}
        />
      </div>
      <div className="confirm">
        <button className="button-confirm" onClick={handleSubmit}>
          {type === "card"?"Add Card":"Add List"}
          
        </button>
        <button className="button-cancel">
          <Clear/>
        </button>

      </div>
      </div>
  )
}

export default InputCard