const chai = require('chai');
const expect = chai.expect;
const logger = require('../../logger.js');

var logFn;

logger.config({
  console: {
    log: function () {
      logFn( ...Array.from(arguments));
    }
  }
})

describe('Show log message', function () {

  it('Should log message as log', function () {
    logFn = function () {
      var msg = Array.from(arguments)[1];
      expect(msg).to.eql('Oi');
    }
    logger.log('Oi');
  });

  it('Should log message as warn', function () {
    logFn = function () {
      var msg = Array.from(arguments)[1];
      expect(msg).to.eql('Oi');
    }
    logger.warn('Oi');
  });

  it('Should log message as error', function () {
    logFn = function () {
      var msg = Array.from(arguments)[1];
      expect(msg).to.eql('Oi');
    }
    logger.error('Oi');
  });

  it('Should log message as info', function () {
    logFn = function () {
      var msg = Array.from(arguments)[1];
      expect(msg).to.eql('Oi');
    }
    logger.info('Oi');
  });

  it('Should log message as debug', function () {
    logFn = function () {
      var msg = Array.from(arguments)[1];
      expect(msg).to.eql('Oi');
    }
    logger.debug('Oi');
  });
});
