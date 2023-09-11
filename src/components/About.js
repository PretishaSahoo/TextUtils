import React from 'react'

export default function About(props) {

  return (
    <>
    <div>
        <div className="card container " style={{width: '470px', marginBottom:'100px',backgroundColor:props.mode==='light'? 'white' :'black',color:props.mode==='light'? 'black' :'white', border:'solid 1px grey'}}>
        <img src="/image.png" className="card-img-top"   alt="..."/>
        <div className="card-body">
            <p className="card-text" >"TextUtils is an intuitive online tool crafted to streamline a range of text-related tasks. Whether you need to convert text to uppercase, lowercase, or capitalize sentences, TextUtils has you covered. This tool aims to make your text manipulation tasks easier and more efficient. With a user-friendly interface, TextUtils is suitable for writers, students, and professionals seeking quick solutions for their text processing needs."</p>
        </div>
        </div>
    </div>
    </>
  )
}
