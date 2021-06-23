const throttle = require('./throttle');
const sinon = require('sinon');

let clock;


clock = sinon.useFakeTimers();


test('called selected times', () => {
    const fn = jest.fn()

    const throttledFunc = throttle(fn, 1000)

    throttledFunc()

    expect(fn).toHaveBeenCalledTimes(1)

    for (let i = 0; i < 4; i++) {
        clock.tick(500);
        throttledFunc();
    }

    expect(fn).toHaveBeenCalledTimes(3)
})