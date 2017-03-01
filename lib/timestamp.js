/**
 * Timestamp utils lib to return current date
 */
module.exports = {
  now() {
    var d = new Date();
    var p = [ d.getUTCFullYear(), d.getUTCMonth() + 1, d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds() ].map( v => String(v) );
    return `${p[0]}-${p[1].padLeft(2,'0')}-${p[2].padLeft(2,'0')} ${p[3].padLeft(2,'0')}:${p[4].padLeft(2,'0')}:${p[5].padLeft(2,'0')}`;
  }
};
  
