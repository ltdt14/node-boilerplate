<a name="do"></a>

## do(name, callback)
Returns the name if not empty

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name. |
| callback | <code>requestCallback</code> | Error first callback. Returns the name. |

**Example**  
```js
const doSomething = require('one-time-download');

do('examplecode', function(err, name){
     name ? console.log(name) : console.log(err)
}
```
