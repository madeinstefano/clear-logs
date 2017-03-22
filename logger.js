
/**
* Setup loggin
*/

require('padleft');

const timestamp = require('./lib/timestamp');
const tracer = require('./lib/tracer');
const serializer = require('./lib/serializer');
const extend = require('util')._extend;

const bsh = {
  error: '\033[1;31m', // red & bold
  info: '\033[1;34m', // blue & bold
  warn: '\033[1;33m', // yellow & bold
  log: '\033[1;32m', // green & bold
  debug: '\033[1;36m', // cyan & bold
  appendix: '\033[0;37m', // light gray
  reset: '\033[0m',
  arrow: '\033[1;90m', // dark grey
  intro: '\033[0;95m', // light purple
  line: '\033[0;94m' // light blue
};

const config = {
  console: console,
  appendix: null,
  stackUp: 4,
  envs: {
    production: [ 'error', 'log', 'warn', 'info' ],
    staging: [ 'error', 'log', 'warn', 'info' ],
    test: [ 'error', 'log', 'warn', 'debug', 'info' ],
    development: [ 'error', 'log', 'warn', 'debug', 'info' ]
  }
}

function log( ) {

  var envCfg = config.envs[process.env.NODE_ENV || 'development'];
  var [ method, ...args ] = Array.from( arguments );

  if ( !envCfg || !envCfg.includes( method ) ) { return; }

  var prefix = `${bsh.intro}${timestamp.now()}${bsh.reset} ` +
    `${bsh[method]}${method.toUpperCase()}${bsh.reset} ` +
    `${bsh.line}${tracer.lineInfo( config.stackUp )}${bsh.reset} ` +
    ( config.appendix ? `${bsh.appendix}[${config.appendix}]${bsh.reset} ` : '') +
    `${bsh.arrow}>>${bsh.reset}`;

  return config.console.log( prefix, ...args.map( serializer.stringifyInfo ) );
}

module.exports = {

  /**
   * Configure logger
   * @param config <Object> | Setup the settings for this logger
   */
  config( _config ) { extend( config, _config ); },

  /**
   * Logging methods
   */
  debug( ) { log( 'debug', ...Array.from(arguments) ); },
  log( ) { log( 'log', ...Array.from(arguments) ); },
  error( ) { log( 'error', ...Array.from(arguments) ); },
  warn( ) { log( 'warn', ...Array.from(arguments) ); },
  info( ) { log( 'info', ...Array.from(arguments) ); }
};
