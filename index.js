'use strict';

// array.reduce(callback, initial value)
// single output


const numbersArray = [1, 2, 3, 4];
const letterArray = ['c', 'r', 'y', 's', 't', 'a', 'l'];

const reducerCallback = (accumulator, item) => {
    console.log('accumulator, item', accumulator, item); //This console log makes this not a pure function
    return accumulator + item;
};

const total = numbersArray.reduce(reducerCallback, 0);
const newString = letterArray.reduce(reducerCallback, '');

// console.log('the total is: ', total);
// console.log('the string is: ', newString);

const stateReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return state + action.item;
        case 'RESET':
            return '';
        default:
            return state;
    }
};

let wordStore = '';
wordStore = stateReducer(wordStore, { type: 'ADD', item: 'r' });
wordStore = stateReducer(wordStore, { type: 'ADD', item: 'e' });
wordStore = stateReducer(wordStore, { type: 'ADD', item: 'd' });
wordStore = stateReducer(wordStore, { type: 'ADD', item: 'u' });
wordStore = stateReducer(wordStore, { type: 'ADD', item: 'x' });
console.log('wordStore is now: ', wordStore);
wordStore = stateReducer(wordStore, {});
console.log('wordStore is now after passing an empty action', wordStore);
wordStore = stateReducer(wordStore, { type: 'RESET' });
console.log('has wordStore been reset?', wordStore);

let numberStore = 0;
numberStore = stateReducer(numberStore, { type: 'ADD', item: 5 });
numberStore = stateReducer(numberStore, { type: 'ADD', item: 10 });
numberStore = stateReducer(numberStore, { type: 'ADD', item: 15 });
numberStore = stateReducer(numberStore, { type: 'ADD', item: 20 });
numberStore = stateReducer(numberStore, { type: 'ADD', item: 25 });
numberStore = stateReducer(numberStore, { type: 'ADD', item: 30 });
console.log('numberStore is now: ', numberStore);
numberStore = stateReducer(numberStore, {});
console.log('numberStore after being passed an empty action: ', numberStore);
numberStore = stateReducer(numberStore, { type: 'FOO', item: 100 });
console.log('numberStore after being passed FOO: ', numberStore);
numberStore = stateReducer(numberStore, { type: 'RESET' });
console.log('numberStore after the reset: ', numberStore);
