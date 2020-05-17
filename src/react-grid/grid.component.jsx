import React, {memo, createRef, useRef, useMemo, useEffect, useCallback} from 'react'

import useGrid from './hooks/useGrid'

import Header from './header.component'
import Row from './row.component'

import {setScrollBarSizeCSSVariable} from './utils'

import './grid.styles.scss'

const Grid = ({
    cols = [],
    data = [], 
    onRowClick, 
    style = {}, 
    height, 
    width, 
}) => {
    const headerNode = createRef(), contentNode = useRef()
    const [vData, start, handleScroll] = useGrid(data, headerNode)
    const rows = useMemo(
        () => vData.map((d, i) => <Row key = {start + i} rowIndex = {start + i} cols = {cols} data = {d} onRowClick = {onRowClick}/>), 
        [vData, start, cols, onRowClick]
    )

    useEffect(() => {
        setScrollBarSizeCSSVariable()
    }, [])

    const containerStyle = {
        ...style, 
        height, 
        width
    }

    return (
        <div style = {containerStyle} className = 'react-grid'>
            <Header ref = {headerNode} cols = {cols} />
            <div 
                ref = {contentNode} 
                className = 'react-grid-content'
                onScroll = {handleScroll}
            >
                <div                
                    style = {{
                        height: data.length * 30,
                    }}
                >
                    <div style = {{
                        position: 'absolute',
                        top: start * 30, 
                    }}>
                        {rows}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Grid)