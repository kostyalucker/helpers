function debounce(func, ms) {
    let timeoutId;

    return function(...args) {
        const callFunc = () => func.apply(this, args)
        
        clearTimeout(timeoutId)

        timeoutId = setTimeout(callFunc, ms);
    }
}

module.exports = debounce