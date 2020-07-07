import _ from 'lodash';

export function multiply (x, y) {
    if (_.isNaN(x) || _.isNaN(y)) return;
    return x * y;
}

export function divide (x, y) {
    return x / y;
}
