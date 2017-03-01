/**
 * Get line info about some log
 */
const path = require('path');

Error.stackTraceLimit = 20;

module.exports = {
  
  lineInfo(stackUp = 1) {
    
    var stack = new Error().stack, file, line, fn;
    
    [file, line] = stack.split('\n')[stackUp].split(':');
    
    [fn, file] = file.split(' (');
    if (!file) { // sometimes the function isn't specified
      [fn, file] = ['??', fn];
    }
    [fn, file] = [ fn.split(' ').pop(), path.basename(file) ];
    [junk, fn] = fn.split('.');
    
    if (!fn) { fn = junk; }
    
    return `${file}:${line} (${fn})`;
  }
};
  
