import React, {memo, forwardRef} from 'react'

import HeaderCell from './header-cell.component'

const Header = ({cols}, ref) => {

    return (
        <div ref = {ref} className = 'react-grid-header'>
            {cols.map(col => <HeaderCell col = {col} />)}
        </div>
    )
}

export default memo(forwardRef(Header))