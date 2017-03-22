# Clear logs

A lib to provide more context around logs, making those clear and easy to display

## 1. Install & import

`npm install clear_logs`

```js
const logger = require('clear_logs');
```

## 2. Just use it
```js
logger.log( 'Something', 'something 2', 'something 3');
```

Where the methods are:
**log**
**error**
**info**
**warn**
**debug**

## 3. Config

you can setup configurations using the config method:

```js
logger.config( { /* opts */ } );
```

Where:
| prop | default | descr |
| ---- | ------- | ----- |
| console | console | A overwrite of the inner console objeto, useful for outputing from another process |
| appendix | null | Info to append to all logs |
| stackUp | 4 | How much going throw Error.stack to get the line, file and fn name for logging. Don't mess with this |
| envs.production | [ 'error', 'log', 'warn' ] | What types of logs will be sent on this NODE_ENV |
| envs.staging | [ 'error', 'log', 'warn' ] | What types of logs will be sent on this NODE_ENV |
| envs.test | [ 'error', 'log', 'warn', 'debug', 'info' ] | What types of logs will be sent on this NODE_ENV |
| envs.development | [ 'error', 'log', 'warn', 'debug', 'info' ] | What types of logs will be sent on this NODE_ENV |
