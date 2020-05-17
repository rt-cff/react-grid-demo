import React, {memo, useCallback} from 'react'

const formatData = (data, type) => {
    switch(type) {
        case 'number':
            return data
        default:
            return data;
    }
}

const Cell = ({x, y, data, width, setMask}) => {
    const handleClick = useCallback(() => setMask({x, y}), [setMask, x, y])

    return (
        <div 
            className = 'react-grid-cell' 
            style = {{
                width, 
            }}
            onClick = {handleClick}
        >
            {data}
        </div>
    )
}

export default memo(Cell)