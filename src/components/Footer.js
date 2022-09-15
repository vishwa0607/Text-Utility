import React from 'react'

export default function Footer(props) {
  return (
    
  <footer className={`bg-${props.mode} text-center`}  style={{color:props.mode==='dark'?'white':'black'}} >
         

    
    <div className="text-center p-3 bg light "  >
      © 2022 Copyright:
      <p > All right Reserved by Text Utility</p>
    </div>
  
  </footer>
  
  )
}

