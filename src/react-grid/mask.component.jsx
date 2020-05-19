import React, {useRef, useState, useEffect, useCallback} from 'react'

// < 37 ^ 38 > 39 v 40
const ARROW_CODE = [37, 38, 39, 40]

const Mask = ({setMask, x, y, left, top, value: defaultValue = null, onChange, width, type}) => {
    const containerNode = useRef(null), maskNode = useRef(null), inputNode = useRef(null)
    const [active, setActive] = useState(false)
    const [value, setValue] = useState(defaultValue)

    const toggleActive = useCallback(() => setActive(prevActive => !prevActive), [])
    
    const handleChange = e => {
        const {type} = e.target
        let {value} = e.target

        if(type === 'number') {
            value = parseFloat(value)
            
            if(isNaN(value)) return
        }
  
        setValue(value)
    }
    
    const handleBlur = useCallback(() => {
        toggleActive()
        
        if(defaultValue === value)
            return
        
        onChange(value)

    }, [toggleActive, defaultValue, value])
    
    const handleKeyDown = useCallback(e => {
        const {target, keyCode} = e

        if(target === containerNode.current) {
            if(ARROW_CODE.includes(keyCode))
                setMask(x + (keyCode - 38) % 2, y + (keyCode - 39) % 2)
                // setMask(mask => ({
                //     x: mask.x + (keyCode - 38) % 2, 
                //     y: mask.y + (keyCode - 39) % 2, 
                // }))

            if(keyCode === 13) 
                toggleActive()
            
            e.preventDefault()
        }

        if(target === inputNode.current) {
            if(keyCode === 27)
                setActive(false)

            if(keyCode === 13) {
                handleBlur()
            }
        }
    }, [x, y, setMask, toggleActive, handleBlur])


    useEffect(() => {
        //re-init mask value if different cells/default value are used
        setValue(defaultValue)
    }, [x, y, defaultValue])

    useEffect(() => {
        if(containerNode && containerNode.current && !active) {
            console.log('focus')
            containerNode.current.focus()
            containerNode.current.scrollIntoView({block: 'nearest', inline: 'nearest'})
        }
    }, [x, y, active])

    if(!(x >= 0 && y >= 0))
        return null

    return (
        <div 
            className = 'react-grid-mask-container'
            tabIndex = {0}
            ref = {containerNode}
            style = {{
                width, 
                top, 
                left, 
            }}
            onKeyDown = {handleKeyDown}
        >
            {
                active ?
                <input 
                    autoFocus
                    ref = {inputNode}
                    className = 'react-grid-mask-input' 
                    onBlur = {handleBlur}
                    onChange = {handleChange}
                    defaultValue = {value}
                    type = {type || 'text'}
                /> :
                <div 
                    className = 'react-grid-mask'
                    ref = {maskNode}
                    onClick = {toggleActive}
                />
            }
        </div>
    )
}

export default Mask