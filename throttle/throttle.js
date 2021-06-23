function throttle(func, ms) {
    let isThrottled;
    let savedArgs;
    let savedThis;

    function callback(...args) {
        if (isThrottled) {
            savedArgs = args;
            savedThis = this;

            return;
        }

        func.apply(this, args)

        isThrottled  = true

        setTimeout(() => {
            isThrottled = false;

            if (savedArgs) {
                callback.apply(savedThis, savedArgs);

                savedArgs = savedThis = null
            }
        }, ms);
    }

    return callback
}

module.exports = throttle