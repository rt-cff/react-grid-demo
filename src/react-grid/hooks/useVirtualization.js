import {useState} from 'react'

const useVirtualization = (data) => {
    const [start, setStart] = useState(0), [end, setEnd] = useState(100)

    const handleScroll = e => {
        const {scrollLeft, scrollTop} = e.target
        
        console.log(scrollTop, scrollLeft)

        const start = Math.max(0, Math.floor(scrollTop/30) - 30)
        const end = Math.min(data.length, start + 100)

        setStart(start)
        setEnd(end)
    }
    console.log(start, end)
    return [
        data.slice(start, end),  
        start, 
        handleScroll, 
    ]
}

export default useVirtualization