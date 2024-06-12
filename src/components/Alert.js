import React from 'react'

export default function alert(props) {

  function capitalize(word){
    if (!word) {
      return ''; // Return an empty string if word is undefined or null
    }
    let lower=word.toLowerCase()
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }

  return (
    <div  className="my-2 container" style={{height:'25px' ,width:"100vw"}}>
    {props.alert && <div  className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong className='secondary-color'>{capitalize(props.alert.type)}</strong><span className='secondary-color'> {props.alert.msg}</span>
    </div>}
    </div>
  )
}
