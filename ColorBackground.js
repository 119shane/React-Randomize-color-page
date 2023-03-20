import React from 'react'
import Title from './Title'

export default function ColorBackground(){
   const handleChange = (e)=>{
      document.body.style.background = getRandomColor()
      e.target.style.background =getRandomColor() 
      document.querySelector('p').style.color = getRandomColor()
   }
   
   function getRandomColor(e){
       let letters = "0123456789abcdef"
       let color = "#"
       for(let i=0; i<6; i++){
          color += letters[Math.floor(Math.random()*16)]
       }
       return color
  }
    return(
        <div>
            <Title text={"Randomize Color"} />
            <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}>
                <button onClick={handleChange} className="btn red">Click Me</button>
                <button onClick={handleChange}  className="btn green">Click Me</button>
                <button onClick={handleChange}  className="btn purple">Click Me</button>
                <button onClick={handleChange}  className="btn yellow">Click Me</button>
            </div>
        </div>
    )
}