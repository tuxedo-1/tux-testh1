const { expect } = require('chai');
const {
  MIN_SUPPORTED_SERVER_VERSION,
  MAX_SUPPORTED_SERVER_VERSION,
  MIN_SUPPORTED_WIRE_VERSION,
  MAX_SUPPORTED_WIRE_VERSION
} = require('../../../../src/cmap/wire_protocol/constants');

describe('Wire Protocol Constants', function () {
  describe('MIN_SUPPORTED_SERVER_VERSION', function () {
    it('returns 3.6', function () {
      expect(MIN_SUPPORTED_SERVER_VERSION).to.equal('3.6');
    });
  });

  describe('MAX_SUPPORTED_SERVER_VERSION', function () {
    it('returns 5.1', function () {
      expect(MAX_SUPPORTED_SERVER_VERSION).to.equal('5.1');
    });
  });

  describe('MIN_SUPPORTED_WIRE_VERSION', function () {
    it('returns 6', function () {
      expect(MIN_SUPPORTED_WIRE_VERSION).to.equal(6);
    });
  });

  describe('MAX_SUPPORTED_WIRE_VERSION', function () {
    it('returns 14', function () {
      expect(MAX_SUPPORTED_WIRE_VERSION).to.equal(14);
    });
  });
});
