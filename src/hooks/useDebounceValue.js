import {useState,useEffect} from "react"

const useDebounceValue=(value,delay=500)=>{
  const [debouncedValue,setDebounceValue] = useState(value);
   useEffect(()=>{
     const handler = setTimeout(()=>setDebounceValue(value),delay);
      return ()=>clearTimeout(handler)
   },[value,delay])

   return debouncedValue

}

export default useDebounceValue;