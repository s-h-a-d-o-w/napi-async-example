Expected output:
```
D:\...>node .
Before Promise resolved
Promise resolved!
```

Errors I get about 10% of the time (Node v10.3.0) - one time, execution even froze,
I had to interrupt it: 
```
D:\...>node .

D:\...>node .

D:\...>node .
Before Promise resolved
FATAL ERROR: EscapableHandleScope::Escape Escape value set twice
 1: node::DecodeWrite
 2: node_module_register
 3: v8::EscapableHandleScope::Escape
 4: v8::Function::Call
 5: std::basic_ostream<char,std::char_traits<char> >::operator<<
 6: v8::internal::interpreter::BytecodeDecoder::Decode
 7: v8::internal::RegExpImpl::Exec
 8: v8::internal::RegExpImpl::Exec
 9: v8::internal::RegExpImpl::Exec
10: 000000CB3B484281

D:\...>node .
console.js:196
Console.prototype.log = function log(...args) {
                                    ^^

SyntaxError: Unexpected identifier
    at Object.<anonymous> (D:\development\github\mute-volume\something.js:10:9)
    at Module._compile (internal/modules/cjs/loader.js:702:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:713:10)
    at Module.load (internal/modules/cjs/loader.js:612:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:551:12)
    at Function.Module._load (internal/modules/cjs/loader.js:543:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:744:10)
    at startup (internal/bootstrap/node.js:238:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:572:3)

D:\...>node .
Stacktrace:
   ptr1=0000029304803B99
    ptr2=0000000000000000
    ptr3=0000000000000000
    ptr4=0000000000000000
    failure_message_object=00000000001C5C10

==== JS stack trace =========================================

    0: ExitFrame [pc: 0000018337E84281]
    1: StubFrame [pc: 0000018337F05787]
Security context: 0000029304820769 <JSObject>
```
