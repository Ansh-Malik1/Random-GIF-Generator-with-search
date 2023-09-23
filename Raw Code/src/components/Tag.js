import axios from "axios"
import { useEffect, useState } from "react"
import Spinner from "./Spinner"
import useGif from "../hooks/useGifs";



export default function Tag(){
    
    const [tag , setTag]  = useState('');
    const {gif , loader , fetchData} = useGif(tag)
    function handleClick(){
      fetchData()
    }
    function handleChange(e){
        setTag(e.target.value)
    }
    return(
        <div className=" bg-blue-400 transition-all duration-75 flex flex-col gap-6 w-[90%] pb-5 justify-around lg:w-[50%] text-center min-h-[215px] max-h-fit rounded-xl border-2 border-blue-700">
         <div className="mt-2">
           <h1 className=" text-2xl font-semibold underline">Random {tag} GIF</h1>
           
         </div>
         {
          loader? (<Spinner/>)  :  (<img src={gif} className=" w-[40%] mx-auto"></img>)
         }

         <input
         className="w-[60%] mx-auto py-3 px-2 rounded-xl"
         type="text"
         placeholder="Write Prompt here"
         onChange={handleChange}
         value={tag}
         ></input>
         <button onClick={handleClick} className=" w-[60%] bg-blue-200 py-2 rounded-xl font-semibold mx-auto">Generate GIF</button>
        </div>
    )
}