/**
* Serialize given object to string
*/
module.exports = {
  stringifyInfo( info ) {
    if ( !info ) { return ''; } // empty
    if ( typeof info === 'string' ) { return info; }  // string
    if ( info instanceof Error ) { return `${info.message}\n${info.stack}`; } // error stack
    if ( info.constructor.name === 'Object' ) { return JSON.stringify( info ); } // common object
    if ( info.toString ) { return info.toString(); } // has toString method
    return info; // let nature decide
  }
};
