'use strict';

var path = require('path');
var defaultPath = path.resolve(process.env.HOME, './.bitcore');

/**
 * Will return the path and default bitcore-node configuration on environment variables
 * or default locations.
 * @param {Object} options
 * @param {String} options.network - "testnet" or "livenet"
 * @param {String} options.datadir - Absolute path to bitcoin database directory
 */
function getDefaultBaseConfig(options) {
  if (!options) {
    options = {};
  }
  return {
    path: process.cwd(),
    config: {
      network: options.network || 'livenet',
      port: 3001,
      services: ['bitcoind', 'insight-api-zero', 'insight-ui-zero', 'web'],
      servicesConfig: {
        bitcoind: {
          spawn: {
            //datadir: options.datadir || path.resolve(process.env.HOME, '.zero'),
            //exec: path.resolve(__dirname, '../../bin/zcashd')
            datadir: path.resolve(defaultPath, './data'),
            exec: path.resolve(defaultPath, './bin/zerod')
          }
        }
      }
    }
  };
}

module.exports = getDefaultBaseConfig;
