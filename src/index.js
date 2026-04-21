'use strict';

// first
console.log('~~~~~ First task ~~~~~');
function createLogger(prefix) {
  return function strLogger(message) {
    return `${prefix}: ${message}`;
  };
}

const authLogger = createLogger('AUTH');
const apiLogger = createLogger('API');

console.log(authLogger('User logged in'));
console.log(apiLogger('Request failed'));

//second
console.log('~~~~~ Second task ~~~~~');
function createLimiter(limit) {
  let count = 0;
  return function () {
    if (typeof limit !== 'number' || Number.isNaN(limit)) return 'Type error';
    if (count === limit) return 'Error';
    count++;
    return 'Ok';
  };
}

const limited = createLimiter(2);

console.log(limited());
console.log(limited());
console.log(limited());
