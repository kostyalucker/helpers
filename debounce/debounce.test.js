const debounce = require('./debounce');
const sinon = require('sinon');

const clock = sinon.useFakeTimers();

describe('called debounce callback', () => {
    const fn = jest.fn()
    const debouncedFunc = debounce(fn, 1000)

    test('called 0 times', () => {    
        for (let i = 0; i < 3; i++) {
            clock.tick(500);
            debouncedFunc();
        }
    
        expect(fn).toHaveBeenCalledTimes(0);
    })

    test('called selected times', () => {
        for (let i = 0; i < 3; i++) {
            clock.tick(1000);
            debouncedFunc();
        }

        expect(fn).toHaveBeenCalledTimes(3);
    })
})