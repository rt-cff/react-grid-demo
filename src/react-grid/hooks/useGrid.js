import {} from 'react'

import useVirtualization from './useVirtualization'

const useGrid = (data, headerNode) => {
    const [vData, topOffset, _handleScroll] = useVirtualization(data)
    
    const handleScroll = (e) => {
        _handleScroll(e)

        headerNode.current.scrollLeft = e.target.scrollLeft
    }

    return [vData, topOffset, handleScroll]
}

export default useGrid