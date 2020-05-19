import {useState, useCallback} from 'react'

const useMask = (cols) => {
    const [x, setX] = useState()
    const [y, setY] = useState()
    const col = x >= 0 ? cols[x] : {}
    const setMask = useCallback((x, y) => {
        setX(x)
        setY(y)
    }, [setX, setY])

    return {
        x, 
        y, 
        left: cols.slice(0, x).reduce((res, col) => res += col.width, 0), 
        top: y * 30, 
        width: col.width,
        type: col.type,
        setMask, 
    }
}

export default useMask