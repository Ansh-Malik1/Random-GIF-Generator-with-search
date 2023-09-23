import axios from "axios"
import { useEffect, useState } from "react"

function useGif(tag){
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
    const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
    const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    const [gif , setGif] = useState('')
    const [loader , setLoader ] = useState(false)
    async function fetchData(){
      setLoader(true)
    
      const {data} = await axios.get(tag? tagUrl : randomUrl )
      const imgSrc = data?.data?.images?.downsized_large?.url
      console.log(imgSrc)
      setGif(imgSrc)
      setLoader(false)
    }
    useEffect(()=>{
      fetchData()
    },[])
    return {gif , loader , fetchData}
}

export default useGif