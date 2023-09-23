import axios from "axios"
import { useEffect, useState } from "react"
import Spinner from "./Spinner"
import useGif from "../hooks/useGifs"

export default function Random(){
  const {gif , loader  , fetchData} = useGif()
    function handleClick(){
      fetchData()
    }
    return(
        <div className=" bg-green-500 transition-all duration-75 flex flex-col gap-6 pb-5 justify-around w-[90%] lg:w-[50%] text-center min-h-[215px] max-h-fit rounded-xl border-2 border-green-700">
         <div className="mt-2">
           <h1 className=" text-2xl font-semibold">Random Gif</h1>
           <div className=" w-[20%] mx-auto h-[2px] bg-black"></div>
         </div>
         {
          loader? (<Spinner/>)  :  (<img src={gif} className=" w-[40%] mx-auto"></img>)
         }

         
         <button onClick={handleClick} className=" w-[60%] bg-green-300 py-2 rounded-xl font-semibold mx-auto">Generate Random GIF</button>
        </div>
    )
}