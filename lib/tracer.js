/**
 * Get line info about some log
 */
const path = require( 'path' );

Error.stackTraceLimit = 20;

module.exports = {

  lineInfo( stackUp = 1 ) {
    const stack = new Error().stack;
    let fn;
    let junk;
    let file;

    const [ rawInfo, lineNum ] = stack.split( '\n' )[stackUp].split( ':' );

    [ fn, file ] = rawInfo.split( ' (' );
    if ( !fn ) { // sometimes the function isn't specified
      [ fn, file ] = [ '??', fn ];
    }
    [ fn, file ] = [ fn.split( ' ' ).pop(), path.basename( file ) ];
    [ junk, fn ] = fn.split( '.' );

    if ( !fn ) { fn = junk; }

    return `${file}:${lineNum} (${fn})`;
  }
};

