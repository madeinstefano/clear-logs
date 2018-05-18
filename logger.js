const timestamp = require( './lib/timestamp' );
const tracer = require( './lib/tracer' );
const serializer = require( './lib/serializer' );

const bsh = {
  error: '\x1b[1;31m', // red & bold
  info: '\x1b[1;34m', // blue & bold
  warn: '\x1b[1;33m', // yellow & bold
  log: '\x1b[1;32m', // green & bold
  debug: '\x1b[1;36m', // cyan & bold
  appendix: '\x1b[0;37m', // light gray
  reset: '\x1b[0m',
  arrow: '\x1b[1;90m', // dark grey
  intro: '\x1b[0;95m', // light purple
  line: '\x1b[0;94m' // light blue
};

const config = {
  console,
  appendix: null,
  stackUp: 4,
  envs: {
    production: [ 'error', 'log', 'warn', 'info' ],
    staging: [ 'error', 'log', 'warn', 'info' ],
    test: [ 'error' ],
    development: [ 'error', 'log', 'warn', 'debug', 'info' ]
  }
};

function log( method, ...args ) {
  const envCfg = config.envs[process.env.NODE_ENV || 'development'];

  if ( !envCfg || !envCfg.includes( method ) ) { return; }

  const prefix = `${`${bsh.intro}${timestamp.now()}${bsh.reset} ` +
    `${bsh[method]}${method.toUpperCase()}${bsh.reset} ` +
    `${bsh.line}${tracer.lineInfo( config.stackUp )}${bsh.reset} `
     }${config.appendix ? `${bsh.appendix}[${config.appendix}]${bsh.reset} ` : ''
    }${bsh.arrow}>>${bsh.reset}`;

  return config.console.log( prefix, ...args.map( serializer.stringifyInfo ) );
}

module.exports = {

  /**
   * Configure logger
   * @param config <Object> | Setup the settings for this logger
   */
  config( _config ) { Object.assign( { }, config, _config ); },

  /**
   * Logging methods
   */
  debug( ...args ) { log( 'debug', ...args ); },
  log( ...args ) { log( 'log', ...args ); },
  error( ...args ) { log( 'error', ...args ); },
  warn( ...args ) { log( 'warn', ...args ); },
  info( ...args ) { log( 'info', ...args ); }
};
