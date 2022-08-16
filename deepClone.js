function deepClone(a) {
    if (a instanceof Object) {
        let result = undefined;
        if (a instanceof Function) {
            if (a.prototype) {
                result = function () { return a.apply(this, arguments) }
            } else {
                result = (...args) => { return a.call(undefined, ...args) }
            }
        } else if (a instanceof Array) {
            result = []
        } else if (a instanceof Date) {
            result = new Date(a - 0)
        } else if (a instanceof RegExp) {
            result = new RegExp(a.source, a.flags)
        } else {
            result = {}
        }
        for (let key in a) {
            result[key] = deepClone(a[key])
        }
        return result
    } else {
        return a
    }
}

const a = {
    number: 1,
    bool: false,
    str: 'hi',
    empty1: undefined,
    empty2: null,
    array: [
        {name: 'jack', age: 18},
        {name: 'ronger', age: 19}
    ],
    date: new Date(2000, 0, 1, 20, 30, 0),
    regex: /\.(j|t)sx/i,
    object: {name: 'ronger', age: 26},
    f1: (a, b) => a + b,
    f2: function(a, b) { return a + b; }
}

const b = deepClone(a)
