import React from 'react'  
import "../index.css"

function MenuItem(props) { 
  const choices=props.options.map(option =>{
    console.log(option)
    return <option value= {option} > {option} </option>
  })
  
  return ( 
    <div id={props.cssID}>
      <label>
        {props.label}
      </label>
      <select name= {props.selection} onClick={()=>console.log(this.value)}>
        {choices}
      </select>
    </div>
  )
}

export default MenuItem