import React, {memo, useCallback} from 'react'

const HeaderCell = ({x, y, col}) => {
    return (
        <div className = 'react-grid-header-cell' style = {{
            width: col.width, 
            // left: offset, 
        }}
        >
            {col.name}
        </div>
    )
}

export default memo(HeaderCell)