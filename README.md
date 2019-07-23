# pconsole
Use p() instead of console.log() because you have places to be

## Usage

Simple syntax:
```js
const PConsole = require('pconsole')
const p = new PConsole('My Prefix |').getLogger()

p('Message')
```

Verbose usage:
```js
const PConsole = require('pconsole')
const pconsole = new PConsole('My Prefix |')

pconsole.log('message')
pconsole.setPrefix('New Prefix |')
pconsole.log('message')
```
