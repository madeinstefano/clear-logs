const chai = require( 'chai' );

const expect = chai.expect;
const logger = require( '../../logger.js' );

let logFn;

logger.config( {
  console: {
    log( ...args ) {
      logFn( ...args );
    }
  }
} );

describe( 'Show log message', () => {
  it( 'Should log message as log', () => {
    logFn = ( ...args ) => {
      expect( args[1] ).to.eql( 'log' );
    };
    logger.log( 'log' );
  } );

  it( 'Should log message as warn', () => {
    logFn = ( ...args ) => {
      expect( args[1] ).to.eql( 'warn' );
    };
    logger.warn( 'warn' );
  } );

  it( 'Should log message as error', () => {
    logFn = ( ...args ) => {
      expect( args[1] ).to.eql( 'error' );
    };
    logger.error( 'error' );
  } );

  it( 'Should log message as info', () => {
    logFn = ( ...args ) => {
      expect( args[1] ).to.eql( 'info' );
    };
    logger.info( 'info' );
  } );

  it( 'Should log message as debug', () => {
    logFn = ( ...args ) => {
      expect( args[1] ).to.eql( 'debug' );
    };
    logger.debug( 'debug' );
  } );
} );
