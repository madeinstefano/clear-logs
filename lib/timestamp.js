/**
 * Timestamp utils lib to return current date
 */
module.exports = {
  now() {
    const d = new Date();
    const p = [
      d.getUTCFullYear(),
      d.getUTCMonth() + 1,
      d.getUTCDate(),
      d.getUTCHours(),
      d.getUTCMinutes(),
      d.getUTCSeconds()
    ].map( v => String( v ).padStart( 2, '0' ) );
    return `${p[0]}-${p[1]}-${p[2]} ${p[3]}:${p[4]}:${p[5]}`;
  }
};

