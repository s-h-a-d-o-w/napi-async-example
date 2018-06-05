const napiTest = require('bindings')('napitest');

napiTest.doSomething(34)
.then(() => {
	console.log('Promise resolved!');
})
.catch((err) => {
	console.error(err);
});

console.log('Before Promise resolved');

setTimeout(() => { console.log('Exiting...'); }, 2000);
