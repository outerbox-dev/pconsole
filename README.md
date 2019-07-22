# pconsole
Use p() instead of console.log() because you have places to be

## Usage
```js
const p = require('pconsole')

p('Hello')
// Hello

p.setPrefix('Prefix 1')
p('Message')
// Prefix 1 Message

p.setPrefix('Prefix 2')
p('Message')
// Prefix 2 Message
```
