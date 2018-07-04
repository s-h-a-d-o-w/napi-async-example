const napiTest = require('bindings')('napitest');

napiTest.doSomething(34)
.then((val) => {
	console.log('Promise resolved:', val);
})
.catch((err) => {
	console.error(err);
});

console.log('Before Promise resolves.');

setTimeout(() => { console.log('Exiting...'); }, 200);
