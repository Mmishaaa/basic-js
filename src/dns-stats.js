const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let stats = {};
  for(const elem of domains) {
  const domainInParts = elem.split('.').reverse();
  let x = "";
  for(const part of domainInParts) {
  x += `.${part}`;
  stats[x] = (stats[x] || 0) + 1;
  }
  }
  return stats;
  }

module.exports = {
  getDNSStats
};
