import React, {memo, useCallback} from 'react'

const formatData = (data, type) => {
    switch(type) {
        case 'number':
            return data
        default:
            return data;
    }
}

const Cell = ({columnIndex, rowIndex, data, width, setMask}) => {
    const handleClick = useCallback(() => setMask(columnIndex, rowIndex), [setMask, columnIndex, rowIndex])

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