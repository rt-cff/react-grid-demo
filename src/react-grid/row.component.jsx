import React, {memo, useMemo} from 'react'

import Cell from './cell.component'

const Row = ({y ,cols, data, offset, setMask}) => {
    const cells = useMemo(
        () => cols.map((col, i) => 
                <Cell 
                    key = {i}  
                    y = {y}
                    x = {i}
                    type = {col.type}
                    data = {data[col.id]}
                    width = {col.width}
                    setMask = {setMask}
                />
            ), 
        [y, cols, data, offset, setMask]
    )
    
    return (
        <div className = 'react-grid-row'>
            {cells}
        </div>
    )
}

export default memo(Row)