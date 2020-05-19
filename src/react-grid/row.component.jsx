import React, {memo, useMemo} from 'react'

import Cell from './cell.component'

const Row = ({rowIndex, cols, data, setMask}) => {
    const cells = useMemo(
        () => cols.map((col, i) => 
                <Cell 
                    key = {i}  
                    rowIndex = {rowIndex}
                    columnIndex = {i}
                    type = {col.type}
                    data = {data[col.id]}
                    width = {col.width}
                    setMask = {setMask}
                />
            ), 
        [rowIndex, cols, data, setMask]
    )
    
    return (
        <div className = 'react-grid-row'>
            {cells}
        </div>
    )
}

export default memo(Row)