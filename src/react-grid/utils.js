//utils function from react-data-grid
export const getScrollbarSize = () => {
    let size = 0
    const scrollDiv = document.createElement('div')

    scrollDiv.style.position = 'absolute'
    scrollDiv.style.top = '-9999px'
    scrollDiv.style.width = '50px'
    scrollDiv.style.height = '50px'
    scrollDiv.style.overflow = 'scroll'

    document.body.appendChild(scrollDiv)
    size = scrollDiv.offsetWidth - scrollDiv.clientWidth
    document.body.removeChild(scrollDiv)

    return size
}

export const setScrollBarSizeCSSVariable = () => {
    document.documentElement.style.setProperty('--scroll-bar-size', getScrollbarSize() + 'px');
}