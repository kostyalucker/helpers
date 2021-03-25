const debounce = require('./debounce')

test('return value', () => {
    const fn = jest.fn()
    const debouncedFunc = debounce(fn, 1000)

    debouncedFunc()

    expect(fn).toHaveBeenCalledTimes(0)
})