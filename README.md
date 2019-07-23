# pconsole
Use p() instead of console.log() because you have places to be

## Installation
npm:
```bash
npm install --save pconsole
```
yarn:
```bash
yarn add pconsole
```

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
