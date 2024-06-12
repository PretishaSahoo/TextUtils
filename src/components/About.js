import React from 'react'

export default function About(props) {

  return (
    <>
    <div>
        <div className="container p-5" style={{ marginBottom:'100px',marginTop:"100px",backgroundColor:props.mode==='light'? 'white' :'black',color:props.mode==='light'? 'black' :'white', animation:"float 5s ease-in-out"}}>
       
       <h3 className="primary-color">About TextUtils</h3>
        <div>
            <p  className='py-4'>"TextUtils is an intuitive online tool crafted to streamline a range of text-related tasks. <br />Whether you need to convert text to uppercase, lowercase, or capitalize sentences, TextUtils has you covered. This tool aims to make your text manipulation tasks easier and more efficient. <br />
            With a user-friendly interface, TextUtils is suitable for writers, students, and professionals seeking quick solutions for their text processing needs. <br /><br />Whether you are drafting an important document or preparing a presentation, TextUtils simplifies the process, allowing you to focus on your content rather than formatting. <br />
            Experience the convenience and efficiency of TextUtils today, and discover how it can transform your approach to text processing and manipulation."</p>
        </div>
        </div>
    </div>
    </>
  )
}
