import React from 'react'
import { useState, useEffect } from 'react'


function Counter() {
    const [count, setCount] = useState(0)
    const [message,setMessage] = useState("")
    function Incress() {
        setCount(count + 1)
        setMessage("")
    }

    function Decress() {
        if (count < 1) {
           setMessage("ตัวเลขไม่สามารถติดลบได้")
        } else {
            setCount(count - 1)
            setMessage("")
        }
    }

    function Reset() {
        setCount(0)
        setMessage("")
    }
    useEffect(() => {
        if (message !== "") {
          const timer = setTimeout(() => {
            setMessage("");
          }, 2000); 
    
          return () => clearTimeout(timer);
        }
      }, [message]);

    console.log(count)
    return (
        <div className="flex flex-col items-center text-gray-800 max-w-[500px] h-100 border-1 pt-10">
            <h1 className="text-3xl font-bold mb-4">Counter App</h1>
            <div className="text-6xl font-bold mb-6">{count}</div>
            <div className="space-x-3">
                <button onClick={Incress} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">+</button>
                <button onClick={Decress} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">-</button>
                <button onClick={Reset} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Reset</button>
            </div>
            <div className="text-red-600 text-lg mt-2">{message}</div>
        </div>

    )
}

export default Counter