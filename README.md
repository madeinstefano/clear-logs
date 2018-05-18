# Clear logs

![alt text](https://raw.githubusercontent.com/madeinstefano/clear_logs/master/sample.png)

A lib to provide more context around logs, making them clear and easy to display.

## 1. Install & import

`npm install clear_logs`

```js
const logger = require('clear_logs');
```

## 2. Just use it
```js
logger.log( 'Something', 'something 2', 'something 3');
```

Where the methods are the same as the ol' good console:
- **log**
- **error**
- **info**
- **warn**
- **debug**

## 3. Done!

---

## Advanced config (Hey, maybe you need something else)

You can setup some aditional configurations to shape the logger for your needs.
Just set using the `config` method:

```js
logger.config( { /* opts */ } );
```

*Where your options are:*

| prop | default | descr |
| ---- | ------- | ----- |
| console | console | This is the node console, used to stdout the stuff. You can pass your own console here, if you need. Just dont forget to have the same methods as the normal console (log info, warn, error, debug) |
| appendix | null | Info to prepend to all your logs |
| stackUp | 4 | How much going thru the Error.stack to get the line, file and fn name for logging. Don't mess with this unless you really need too. |
| envs.production | [ 'error', 'log', 'warn' ] | What methods will actually output when NODE_ENV === 'production' |
| envs.staging | [ 'error', 'log', 'warn' ] | What methods will actually output in when NODE_ENV === 'staging' |
| envs.test | [ 'error' ] | What methods will actually output when NODE_ENV === 'test' |
| envs.development | [ 'error', 'log', 'warn', 'debug', 'info' ] | What methods will actually output when NODE_ENV === 'development' |

So, lets say you dont want to polute your tests with logs, but want those in the production version of your app, you can config as following:

```js
logger.config( { 
  envs: {
    test: [] 
  } 
});
```

So now, no stdout will be made in this environment.

### Enjoy!