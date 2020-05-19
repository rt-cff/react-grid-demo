import React, {memo, createRef, useRef, useMemo, useEffect, useCallback} from 'react'

import Header from './header.component'
import Row from './row.component'
import Mask from './mask.component'

import useGrid from './hooks/useGrid'
import useMask from './hooks/useMask'

import {setScrollBarSizeCSSVariable} from './utils'

import './grid.styles.scss'

const Grid = ({
    cols = [],
    data = [], 
    onRowClick, 
    style = {}, 
    height, 
    width, 
    onChange, 
}) => {
    const headerNode = createRef(), contentNode = useRef()
    const {setMask, x, y, ...maskProps} = useMask(cols)
// [maskX, maskY, maskLeft, maskTop, maskWidth, setMask] = 
    const [vData, start, handleScroll] = useGrid(data, headerNode)
    const rows = useMemo(
        () => vData.map((d, y) => 
            <Row 
                key = {start + y} 
                rowIndex = {start + y} 
                cols = {cols} 
                data = {d} 
                onRowClick = {onRowClick} 
                setMask = {setMask}
            />), 
        [vData, start, cols, onRowClick, setMask]
    )

    useEffect(() => {
        setScrollBarSizeCSSVariable()
    }, [])

    const containerStyle = {
        ...style, 
        height, 
        width
    }

    const onDataChange = useCallback((value) => onChange({
        rowId: y,
        row: data[y],
        id: cols[x].id,
        value, 
    }), [x, y, data, cols])

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
                    <Mask 
                        {...maskProps}
                        x = {x}
                        y = {y}
                        value = {
                            x >= 0 && y >= 0 ? 
                            data[y][cols[x].id] : 
                            null
                        }
                        onChange = {onDataChange}
                        setMask = {setMask}
                    />
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