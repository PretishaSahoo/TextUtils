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
    <div style={{height:'25px'}}>
    {props.alert && <div  className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong>{props.alert.msg}
    </div>}
    </div>
  )
}
