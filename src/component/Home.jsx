
import { useState } from 'react'

function Home({myArray}) {
    const[inputValue,setinputValue]=useState(0)
    const[text,settext]=useState([])
    
    
         let amount = parseInt(inputValue);
    
        const paragraphGenerator = (e)=>{
          if(amount<1){
            alert("number is less than 1")
            amount=1
          }
          if(amount>5){
            alert("number is greater than paragraph")
            amount=5
          }
         settext(myArray.slice(0,amount))
          
        }
        console.log(text);
    

    

  return (
    <>
    
    <div className="bg-[rgb(234, 165, 105)] w-full h-full flex flex-col items-center pt-20 pb-20">
        <h1 className="text-3xl text-orange-700  font-bold tracking-wide">TIRED OF BORING LOREM IPSUM?</h1>
        <div className="flex items-center gap-3 mt-5">
            <p className="text-xl">Paragraphs:</p>
            <input 
            className="w-16"
            type='number'
            placeholder='0'
            min={1}
            onChange={(e)=> setinputValue(e.target.value)}
            >

            </input>
            <button 
            className="flex items-center bg-orange-500 text-white px-4 text-xl py-1 rounded-lg"
            onClick={paragraphGenerator}
            >Generate</button>
        </div>
        <div>
              {text.map((item, index) => {
                 return <p key={index} className="w-2/4 text-gray-800 h-auto mt-5 ml-[27%]" >{item}</p>;
              })}
        </div>
    </div>
   
    </>
  )
}

export default Home